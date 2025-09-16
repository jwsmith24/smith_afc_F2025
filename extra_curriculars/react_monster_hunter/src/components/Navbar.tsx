export default function Navbar() {
  const navItemBaseClass = "hover:cursor-pointer hover:bg-gray-300 px-4 py-2";
  type NavItem = {
    title: string;
    href: string;
  };
  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Bounty Board",
      href: "#",
    },
    {
      title: "Character",
      href: "#",
    },
    {
      title: "Monster Manual",
      href: "#",
    },
  ];

  return (
    <nav
      className={
        "flex w-full justify-between items-center border-gray-400 border-b p-2 bg-white shadow-sm text-black"
      }
    >
      <div className={"flex gap-4"}>
        {navItems.map((item) => (
          <a key={item.title} className={navItemBaseClass} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
      <div>
        <a className={navItemBaseClass}>Settings</a>
      </div>
    </nav>
  );
}
