import { useCallback, useEffect, useState } from "react";
import type { Rating } from "@/types/Rating.ts";
import { getRatings, deleteRating } from "@/api/ratings.ts";

export function useRatings(widgetId: number) {
  const [data, setData] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRatings = useCallback(async () => {
    try {
      setLoading(true);
      const ratings = await getRatings(widgetId);
      setData(ratings);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [widgetId]);

  const removeRating = async (widgetId: number, ratingId: number) => {
    try {
      setLoading(true);
      await deleteRating(widgetId, ratingId);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!widgetId) return;

    void fetchRatings();
  }, [fetchRatings, widgetId]);

  return { data, loading, error, refetch: fetchRatings, removeRating };
}
