import { useEffect, useState } from "react";
import type { Widget } from "@/types/Widget.ts";
import { getWidgets } from "@/api/widgets.ts";

export function useWidgets() {
  const [data, setData] = useState<Widget[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getWidgets()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
