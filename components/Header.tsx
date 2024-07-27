import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Nic<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />

          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
