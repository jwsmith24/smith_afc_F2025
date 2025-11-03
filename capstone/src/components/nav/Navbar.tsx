import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

import NavbarItem from "@/components/nav/NavbarItem.tsx";
import type { NavItem } from "@/types/NavItem.ts";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router";

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

  const [searchContent, setSearchContent] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchContent) return;

    const query = searchContent.toLowerCase();

    if (query === "home") {
      navigate("/");
    } else if (query === "about") {
      navigate("/about");
    } else {
      navigate("/inventory");
    }
  };

  return (
    <div
      className={
        "bg-midnightSteel w-full p-4 text-brightSilver flex items-center justify-between"
      }
      id={"navBar"}
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
      <div className={"flex gap-1 "}>
        <Input
          type={"text"}
          className={"hidden sm:block w-[400px]"}
          placeholder={"Search..."}
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
        />
        <Button className={"cursor-pointer"} onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}
