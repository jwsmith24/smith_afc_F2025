import axios from "axios";

import type {
  CreateVariantFormSchema,
  WidgetVariant,
} from "@/types/WidgetVariant.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getVariants(widgetId: number): Promise<WidgetVariant[]> {
  const response = await axios.get(`${BASE_URL}/${widgetId}/variants`);
  return response.data;
}

export async function createVariant(
  widgetId: number,
  data: CreateVariantFormSchema,
): Promise<WidgetVariant> {
  const path = `${BASE_URL}/${widgetId}/variants`;
  const response = await axios.post(path, data);

  return response.data;
}

export async function deleteVariant(widgetId: number, variantId: number) {
  const path = `${BASE_URL}/${widgetId}/variants/${variantId}`;
  const response = await axios.delete(path);

  return response.data;
}

// todo:
// export async function updateVariant(
//   widgetId: number,
//   variantId: number
// ): Promise<WidgetVariant> {
//
// }
