import axios from "axios";

import type { AddRatingSchema, Rating } from "@/types/Rating.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getRatings(widgetId: number): Promise<Rating[]> {
  const response = await axios.get(`${BASE_URL}/${widgetId}/ratings`);
  return response.data;
}

export async function createRating(
  widgetId: number,
  data: AddRatingSchema,
): Promise<Rating> {
  const response = await axios.post(`${BASE_URL}/${widgetId}/ratings`, data);

  return response.data;
}
