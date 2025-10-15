import axios from "axios";

import type { Widget } from "@/types/Widget.ts";
import type { CreateWidgetFormSchema } from "@/types/CreateWidgetFormSchema.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getWidgets(): Promise<Widget[]> {
  const response = await axios.get(BASE_URL);
  console.log("got widgets from backend: ", response.data);
  return response.data;
}

export async function createWidget(
  data: CreateWidgetFormSchema,
): Promise<Widget> {
  const response = await axios.post(BASE_URL, data);
  console.log("Created widget: ", response.data);

  return response.data;
}
