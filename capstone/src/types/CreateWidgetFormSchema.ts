import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Widget name must be at least 3 characters")
    .max(32, "Widget name cannot exceed 32 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(120, "Description cannot exceed 120 characters"),
  baseColor: z.string().min(3).max(32),
  size: z.enum(["small", "medium", "large"]),
  initialQuantity: z.number(),
});

export type CreateWidgetFormSchema = z.infer<typeof formSchema>;
