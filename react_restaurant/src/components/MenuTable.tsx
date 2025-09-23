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
    <div
      className={
        "border px-8 py-4 rounded shadow-xl hover:cursor-pointer bg-red-400 max-w-full mx-4"
      }
    >
      <Table className={"text-white w-full"}>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-white"}>Image</TableHead>
            <TableHead className={"text-white"}>Item Name</TableHead>
            {/* hide description column on small displays */}
            <TableHead className={"text-white hidden md:table-cell"}>
              Description
            </TableHead>
            <TableHead className={"text-white"}>Price</TableHead>
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
                    className={"w-12 h-12 bg-white p-1 rounded-lg"}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className={"hidden md:table-cell"}>
                  {item.description}
                </TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
