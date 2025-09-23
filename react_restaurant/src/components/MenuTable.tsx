import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};
type MenuTableProps = {
  menuItems: MenuItem[];
};

export default function MenuTable({ menuItems }: MenuTableProps) {
  return (
    <div className={"border px-8 py-4 rounded shadow hover:cursor-pointer"}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuItems.map((item) => {
            return (
              <TableRow>
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.description}
                    className={"w-12 h-12"}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
