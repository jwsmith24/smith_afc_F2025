import axios from "axios";

import type { RatingSchema, Rating } from "@/types/Rating.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getRatings(widgetId: number): Promise<Rating[]> {
  const response = await axios.get(`${BASE_URL}/${widgetId}/ratings`);
  return response.data;
}

export async function createRating(
  widgetId: number,
  data: RatingSchema,
): Promise<Rating> {
  const response = await axios.post(`${BASE_URL}/${widgetId}/ratings`, data);

  return response.data;
}

export async function updateRating(
  widgetId: number,
  ratingId: number,
  data: RatingSchema,
): Promise<Rating> {
  const response = await axios.patch(
    `${BASE_URL}/${widgetId}/ratings/${ratingId}`,
    data,
  );
  return response.data;
}
