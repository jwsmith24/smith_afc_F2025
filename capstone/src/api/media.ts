import axios from "axios";

export async function getAllWidgetMediaInfo(widgetId: number) {
  const response = await axios.get(
    `http://localhost:8080/api/images?widgetId=${widgetId}`,
  );

  return response.data;
}

export async function getImage(filePath: string) {
  const response = await axios.get(
    `http://localhost:8080/api/images/${filePath}`,
  );

  return response.data;
}
