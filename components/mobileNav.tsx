"use client";
import NavItem from "./navItem";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle hidden>Menú</SheetTitle>
          <SheetDescription hidden />
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8 font-bold">
          <NavItem href="/" onClick={toggleMenu}>
            Inicio
          </NavItem>
          <NavItem href="/temporadas" onClick={toggleMenu}>
            Temporadas
          </NavItem>
          <NavItem href="/personajes" onClick={toggleMenu}>
            Personajes
          </NavItem>
          <NavItem href="/recomendaciones" onClick={toggleMenu}>
            Recomendaciones
          </NavItem>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
