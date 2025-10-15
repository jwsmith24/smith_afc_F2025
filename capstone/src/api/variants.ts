import axios from "axios";

import type { WidgetVariant } from "@/types/WidgetVariant.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getVariants(widgetID: number): Promise<WidgetVariant[]> {
  const response = await axios.get(`${BASE_URL}/${widgetID}/variants`);
  console.log("got variants from backend: ", response.data);
  return response.data;
}
