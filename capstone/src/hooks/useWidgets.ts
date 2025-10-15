import { useEffect, useState, useCallback } from "react";
import { getWidgets } from "@/api/widgets";
import type { Widget } from "@/types/Widget";

export function useWidgets() {
  const [data, setData] = useState<Widget[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchWidgets = useCallback(async () => {
    try {
      setLoading(true);
      const widgets = await getWidgets();
      setData(widgets);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchWidgets();
  }, [fetchWidgets]);

  return { data, loading, error, refetch: fetchWidgets };
}
