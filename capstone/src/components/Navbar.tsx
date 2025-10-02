import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

import NavbarItem from "@/components/NavbarItem.tsx";
import type { NavItem } from "@/types/NavItem.ts";
import { Input } from "@/components/ui/input.tsx";

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      itemName: "Home",
      path: "/",
    },
    {
      itemName: "Inventory",
      path: "/inventory",
    },
    {
      itemName: "About",
      path: "/about",
    },
  ];

  return (
    <div
      className={
        "bg-midnightSteel w-full p-4 text-brightSilver flex items-center justify-between"
      }
    >
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((navItem, index) => (
            <NavbarItem
              itemName={navItem.itemName}
              path={navItem.path}
              key={`${navItem.itemName}-${index}`}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Input type={"text"} className={"w-1/3"} placeholder={"Search..."} />
    </div>
  );
}
