"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import { UrlObject } from "url";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems: { title: string; href: UrlObject | Route }[] = [
    { title: "Home", href: "/" },
    { title: "Landschap", href: "/landschap" as Route },
    { title: "Eemhuis", href: "/eemhuis" as Route },
    { title: "Duurzaamheid & Energie", href: "/duurzaamheid-energie" as Route },
    { title: "Woningen", href: "/woningen" as Route },
    { title: "Organisatie", href: "/organisatie" as Route },
    { title: "Geschiedenis", href: "/geschiedenis" as Route },
    { title: "Contact", href: "/contact" as Route },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`link ${pathname == item.href ? "text-lime-700" : ""}`}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              className={`link w-full ${pathname == item.href ? "text-lime-700" : ""}`}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
