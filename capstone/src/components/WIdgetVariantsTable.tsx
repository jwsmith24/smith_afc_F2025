import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { WidgetVariant } from "@/types/WidgetVariant.ts";

export default function WidgetVariantsTable() {
  const mockVariants: WidgetVariant[] = [
    {
      id: 1,
      color: "blue",
      size: "big",
      quantity: 4,
    },
    {
      id: 2,
      color: "green",
      size: "small",
      quantity: 2,
    },
    {
      id: 3,
      color: "orange",
      size: "medium",
      quantity: -10,
    },
  ];

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
        {mockVariants.map((variant) => (
          <TableRow>
            <TableCell>{variant.color}</TableCell>
            <TableCell>{variant.size}</TableCell>
            <TableCell>{variant.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
