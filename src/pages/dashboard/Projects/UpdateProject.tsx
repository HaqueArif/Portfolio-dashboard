/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";

import {
  Form,
  FormSection,
  FormSubmit,
  Input,
  TUpdateProjectValidationSchema,
  UpdateProjectValidationSchema,
} from "@/components/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProjectMutation } from "@/redux/fetures/supply/projectApi";
import { toast } from "sonner";

type FormData = {
  image?: string;
  category?: string;
  name?: string;
  live?: string;
  server?: string;
  client?: string;
  rating?: string;
};

const UpdateProject = ({ _id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUpdateProjectValidationSchema>({
    resolver: zodResolver(UpdateProjectValidationSchema),
  });

  const [updateSupply] = useUpdateProjectMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("creating");

    try {
      const projectsData: {
        id: string;
        updatedData: Partial<FormData>;
      } = {
        id: _id,
        updatedData: {},
      };
      if (data.image) {
        projectsData.updatedData.image = data.image;
      }
      if (data.category) {
        projectsData.updatedData.category = data.category;
      }
      if (data.name) {
        projectsData.updatedData.name = data.name;
      }
      if (data.live) {
        projectsData.updatedData.live = data.live;
      }
      if (data.server) {
        projectsData.updatedData.server = data.server;
      }
      if (data.client) {
        projectsData.updatedData.client = data.client;
      }
      if (data.rating) {
        projectsData.updatedData.rating = data.rating;
      }
      console.log(projectsData);
      await updateSupply(projectsData).unwrap();

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
    <Dialog>
      <DialogTrigger className="bg-orange-400 p-2 rounded-xl text-white">
        <Edit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <Form
              onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
            >
              <h1 className="text-center mb-5">Update Supply</h1>
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProject;
