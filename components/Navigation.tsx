"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  const links = [
    {
      title: "home",
      url: "/",
    },
    {
      title: "services",
      url: "/services",
    },
    {
      title: "resume",
      url: "/resume",
    },
    {
      title: "work",
      url: "/work",
    },
    {
      title: "contact",
      url: "/contact",
    },
  ];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            href={link.url}
            key={link.title}
            className={`${
              pathname === link.url && "text-accent border-b-2 border-accent "
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
