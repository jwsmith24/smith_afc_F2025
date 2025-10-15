import { z } from "zod";

export type Rating = {
  id?: number;
  score: number;
  comment: string;
  created: string;
  updated: string;
};

export const ratingSchema = z.object({
  score: z.number().min(1).max(5),
  comment: z.string().min(1).max(120),
});

export type AddRatingSchema = z.infer<typeof ratingSchema>;
