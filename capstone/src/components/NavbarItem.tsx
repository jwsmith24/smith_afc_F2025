import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu.tsx";
import { Link } from "react-router";
import type { NavItem } from "@/types/NavItem.ts";

export default function NavbarItem({ itemName, path }: NavItem) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to={path}>
          <h2 className={"active:opacity-85"}>{itemName}</h2>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
