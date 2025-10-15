import axios from "axios";

import type {
  CreateVariantFormSchema,
  WidgetVariant,
} from "@/types/WidgetVariant.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getVariants(widgetId: number): Promise<WidgetVariant[]> {
  const response = await axios.get(`${BASE_URL}/${widgetId}/variants`);
  console.log("got variants from backend: ", response.data);
  return response.data;
}

export async function createVariant(
  widgetId: number,
  data: CreateVariantFormSchema,
): Promise<WidgetVariant> {
  const response = await axios.post(`${BASE_URL}/${widgetId}/variants`, data);
  console.log("Created variant: ", response.data);

  return response.data;
}
