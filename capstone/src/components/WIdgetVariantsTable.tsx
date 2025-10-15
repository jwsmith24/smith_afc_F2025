import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useVariants } from "@/hooks/useVariants.ts";
import { Loader2 } from "lucide-react";

interface WidgetVariantsTableProps {
  widgetId: number;
}

export default function WidgetVariantsTable({
  widgetId,
}: WidgetVariantsTableProps) {
  const { data: variants, loading, error } = useVariants(widgetId);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin h-5 w-5 mr-2" />
        <span>Loading variants...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 py-4 text-center">
        Failed to load variants: {error.message}
      </div>
    );
  }

  if (variants.length === 0) {
    return (
      <div className="text-center py-4 text-slate-500">No variants found.</div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Color</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {variants.map((variant) => (
          <TableRow>
            <TableCell>{variant.color}</TableCell>
            <TableCell>{variant.size}</TableCell>
            <TableCell
              className={
                variant.quantity <= 0 ? "text-errorRed font-medium" : ""
              }
            >
              {variant.quantity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
