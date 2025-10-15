import { useEffect, useState } from "react";
import type { WidgetVariant } from "@/types/WidgetVariant.ts";
import { getVariants } from "@/api/variants.ts";

export function useVariants(widgetId: number) {
  const [data, setData] = useState<WidgetVariant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!widgetId) return;

    getVariants(widgetId)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [widgetId]);

  return { data, loading, error };
}
