import { useCallback, useEffect, useState } from "react";
import type { WidgetVariant } from "@/types/WidgetVariant.ts";
import { deleteVariant, getVariants } from "@/api/variants.ts";

export function useVariants(widgetId: number) {
  const [data, setData] = useState<WidgetVariant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchVariants = useCallback(async () => {
    try {
      setLoading(true);
      const variants = await getVariants(widgetId);
      setData(variants);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [widgetId]);

  const removeVariant = useCallback(
    async (variantId: number) => {
      try {
        setLoading(true);
        await deleteVariant(widgetId, variantId);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [widgetId],
  );

  useEffect(() => {
    if (!widgetId) return;

    void fetchVariants();
  }, [fetchVariants, widgetId]);

  return { data, loading, error, refetch: fetchVariants, removeVariant };
}
