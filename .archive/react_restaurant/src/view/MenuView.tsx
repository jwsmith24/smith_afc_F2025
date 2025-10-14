import MenuTable from "@/components/MenuTable.tsx";
import tacoIcon from "@/assets/icons/taco-icon.png";
import burritoIcon from "@/assets/icons/burritos-icon.png";
import fajitasIcon from "@/assets/icons/fajitas3.jpeg";
import aquafrescaIcon from "@/assets/icons/aqua-fresca-icon.png";
import horchataIcon from "@/assets/icons/horchata-icon.png";
import type { MenuItem } from "@/types/MenuItem.ts";

export default function MenuView() {
  const menuItems: MenuItem[] = [
    {
      name: "Tacos",
      description:
        "Personally recommended by everyone you know, genuinely SCRUMPTIOUS",
      price: 5.99,
      image: tacoIcon,
    },
    {
      name: "Fajitas",
      description: "All ratings say: exceptionally PALATABLE",
      price: 6.99,
      image: fajitasIcon,
    },
    {
      name: "Burritos",
      description: "These are quite DELECTABLE. Order them rn or else.",
      price: 6.99,
      image: burritoIcon,
    },
    {
      name: "Aqua Fresca",
      description:
        "Moderately DIVINE. Flavors: Strawberry, Cantaloupe, or Prickly Pear.",
      price: 3.99,
      image: aquafrescaIcon,
    },
    {
      name: "Horchata",
      description: "Cinnamon included at no extra charge.",
      price: 3.99,
      image: horchataIcon,
    },
  ];
  return (
    <div
      className={
        "flex flex-col gap-6 items-center justify-center h-full bg-gray-700 taco-bg"
      }
    >
      <h1 className={"text-4xl font-bold text-white mt-16"}>
        Taco && Taco Specials
      </h1>
      <MenuTable menuItems={menuItems} />
    </div>
  );
}
