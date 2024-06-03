/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormSection, FormSubmit, Input } from "@/components/Form";
import {
  LoginValidationSchema,
  TLoginValidationSchema,
} from "@/components/Form/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/fetures/auth/authApi";
import { TUser, setUser } from "@/redux/fetures/auth/authSlice";
import { useAppDispatch } from "@/redux/fetures/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValidationSchema>({
    resolver: zodResolver(LoginValidationSchema),
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("logged in", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-5 ">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <h1 className="text-center mb-5">Login</h1>
        <FormSection>
          <Input
            type="text"
            id="email"
            label="Email"
            register={register("email")}
            errors={errors}
            placeholder="Your Email"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register("password")}
            errors={errors}
            placeholder="Your Password"
          />
        </FormSection>
        <NavLink
          className="mt-2 block hover:underline hover:text-blue-700"
          to="/login/register"
        >
          Create new account?
        </NavLink>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Login;
