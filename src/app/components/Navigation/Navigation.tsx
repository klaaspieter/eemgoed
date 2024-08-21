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
import { useEffect, useState } from "react";
import { UrlObject } from "url";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when path changes
  // See: https://github.com/nextui-org/nextui/issues/2736#issuecomment-2196182286
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const menuItems: { title: string; href: UrlObject | Route }[] = [
    { title: "Eemgoed", href: "/" },
    { title: "Landschap", href: "/landschap" as Route },
    { title: "Eemhuis", href: "/eemhuis" as Route },
    { title: "Duurzaamheid & Energie", href: "/duurzaamheid-energie" as Route },
    { title: "Woningen", href: "/woningen" as Route },
    { title: "Organisatie", href: "/organisatie" as Route },
    { title: "Geschiedenis", href: "/geschiedenis" as Route },
    { title: "Contact", href: "/contact" as Route },
  ];

  const activePage = menuItems.find((item) => item.href === pathname);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        {activePage && <NavbarMenuItem>{activePage.title}</NavbarMenuItem>}
      </NavbarContent>

      <NavbarContent
        data-justify={"space-between"}
        className="hidden w-full justify-between gap-4 lg:flex"
      >
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
