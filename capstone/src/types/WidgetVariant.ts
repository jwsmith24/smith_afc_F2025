import { z } from "zod";

export type WidgetVariant = {
  id?: number;
  color: string;
  size: string;
  quantity: number;
};

export const variantFormSchema = z.object({
  color: z.string().min(3).max(32),
  size: z.enum(["Small", "Medium", "Large"]),
  quantity: z.number(),
});

export type VariantSchema = z.infer<typeof variantFormSchema>;
