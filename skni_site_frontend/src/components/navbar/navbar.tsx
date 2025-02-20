"use client";

import React from "react";
import { ThemeToggle } from "@/components/theme-toogle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { LogoLink } from "./logo-link";
import { NavLinks } from "./navlink";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-between items-center py-6">
      <LogoLink />
      <nav className="hidden lg:flex gap-12 items-center">
        <NavLinks />
        <ThemeToggle />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <VisuallyHidden>
            <SheetHeader>
              <SheetTitle>Navigation menu</SheetTitle>
              <SheetDescription>Navigation menu</SheetDescription>
            </SheetHeader>
          </VisuallyHidden>
          <div className="flex flex-col gap-6">
            <LogoLink />
            <NavLinks isSidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { Navbar };
