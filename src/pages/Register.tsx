/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
  RegistrationValidationSchema,
  TRegistrationValidationSchema,
} from "@/components/Form";
import { useRegistrationMutation } from "@/redux/fetures/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationValidationSchema>({
    resolver: zodResolver(RegistrationValidationSchema),
  });

  const [registration] = useRegistrationMutation();
  // console.log("data", data);
  // console.log("error", error?.data.message);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering");

    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      //   console.log(userInfo);
      await registration(userData).unwrap();

      toast.success("User Registered Successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`);
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-5">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <h1 className="text-center mb-5">Register</h1>
        <FormSection>
          <Input
            type="text"
            id="name"
            label="Name"
            register={register("name")}
            errors={errors}
            placeholder="Your name"
          />
          <Input
            type="text"
            id="email"
            label="Email"
            register={register("email")}
            errors={errors}
            placeholder="Your email"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register("password")}
            errors={errors}
            placeholder="Your password"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Register;
