import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

import { Loader2 } from "lucide-react";
import type { WidgetVariant } from "@/types/WidgetVariant.ts";

interface WidgetVariantsTableProps {
  variants: WidgetVariant[];
  loading: boolean;
  error: Error | null;
  handleClick: (variant: WidgetVariant) => void;
  activeVariant: WidgetVariant | undefined;
}

export default function WidgetVariantsTable({
  variants,
  loading,
  error,
  handleClick,
  activeVariant,
}: WidgetVariantsTableProps) {
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
        {variants.map((variant, index) => (
          <TableRow
            key={variant.id ?? index}
            onClick={() => handleClick(variant)}
            className={`cursor-pointer ${activeVariant?.id === variant.id ? "bg-electricBlue/20" : ""}`}
          >
            <TableCell className={"flex gap-2"}>
              {variant.color}{" "}
              <div
                className={"w-1/6 rounded border border-slate-300"}
                style={{ backgroundColor: variant.color }}
              ></div>
            </TableCell>
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
