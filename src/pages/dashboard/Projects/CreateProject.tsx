/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CreateProjectValidationSchema,
  FormSection,
  FormSubmit,
  Input,
  TCreateProjectValidationSchema,
} from "@/components/Form";

import { useCreateProjectMutation } from "@/redux/fetures/supply/projectApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "sonner";

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateProjectValidationSchema>({
    resolver: zodResolver(CreateProjectValidationSchema),
  });

  const [createSupply] = useCreateProjectMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("creating");

    try {
      const projectsData = {
        image: data.image,
        category: data.category,
        name: data.name,
        live: data.live,
        server: data.server,
        client: data.client,
        rating: data.rating,
      };
      await createSupply(projectsData).unwrap();

      toast.success("Supply created Successfully", {
        id: toastId,
        duration: 2000,
      });
      reset();
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-2 sm:px-5">
      <div className="border border-black px-1 py-5 sm:py-10 sm:px-5 w-[100%] glass-gradient">
        <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
          <h1 className="text-center text-[30px] mb-5">Add new Project</h1>
          <FormSection>
            <Input
              type="text"
              id="image"
              label="Image"
              register={register("image")}
              errors={errors}
              placeholder="Image link"
            />
            <Input
              type="text"
              id="category"
              label="Category"
              register={register("category")}
              errors={errors}
              placeholder="Exp: React, Next, etc..."
            />

            <Input
              type="text"
              id="name"
              label="Name"
              register={register("name")}
              errors={errors}
              placeholder="Project / App / Website Name"
            />
            <Input
              type="text"
              id="live"
              label="Live Site"
              register={register("live")}
              errors={errors}
              placeholder="Paste Domain/Live link"
            />
            <Input
              type="text"
              id="client"
              label="Client Github Repo"
              register={register("client")}
              errors={errors}
              placeholder="Paste Repository Link"
            />
            <Input
              type="text"
              id="server"
              label="Server Github Repo"
              register={register("server")}
              errors={errors}
              placeholder="Paste Repository Link"
            />
            <Input
              type="text"
              id="rating"
              label="Rating"
              register={register("rating")}
              errors={errors}
              placeholder="Paste Repository Link"
            />
          </FormSection>
          <FormSubmit />
        </Form>
      </div>
    </div>
  );
};

export default CreateProject;
