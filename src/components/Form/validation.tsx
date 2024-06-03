import { z } from "zod";

export const formSchema = z.object({
  item: z.string().refine((data) => data.trim() !== "", {
    message: "PhotoUrl  is required",
  }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export const LoginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 4 characters long"),
});

export type TLoginValidationSchema = z.infer<typeof LoginValidationSchema>;

export const RegistrationValidationSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 4 characters long"),
});

export type TRegistrationValidationSchema = z.infer<
  typeof RegistrationValidationSchema
>;

export const CreateProjectValidationSchema = z.object({
  image: z.string().min(1, "image is Required"),
  category: z.string(),
  name: z.string(),
  live: z.string(),
  server: z.string(),
  client: z.string(),
  rating: z.string(),
});

export type TCreateProjectValidationSchema = z.infer<
  typeof CreateProjectValidationSchema
>;
export const UpdateProjectValidationSchema = z.object({
  image: z.string().optional(),
  category: z.string().optional(),
  name: z.string().optional(),
  live: z.string().optional(),
  server: z.string().optional(),
  client: z.string().optional(),
  rating: z.string().optional(),
});

export type TUpdateProjectValidationSchema = z.infer<
  typeof UpdateProjectValidationSchema
>;
