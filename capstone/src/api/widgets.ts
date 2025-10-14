import axios from "axios";

import type { Widget } from "@/types/Widget.ts";

const BASE_URL = "http://localhost:8080/api/v1/widgets";

export async function getWidgets(): Promise<Widget[]> {
  const response = await axios.get(BASE_URL);
  console.log("got widgets from backend: ", response.data);
  return response.data;
}
