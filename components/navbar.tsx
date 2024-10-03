import Link from "next/link";
import NavItem from "./navItem";
import { Button } from "./ui/button";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background opacity-95 fixed top-0 left-0 right-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-bold text-xl lg:text-3xl">The Office</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/temporadas">Temporadas</NavItem>
            <NavItem href="/personajes">Personajes</NavItem>
            <NavItem href="/recomendaciones">Recomendaciones</NavItem>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8 font-bold">
                  <NavItem href="/">Inicio</NavItem>
                  <NavItem href="/temporadas">Temporadas</NavItem>
                  <NavItem href="/personajes">Personajes</NavItem>
                  <NavItem href="/recomendaciones">Recomendaciones</NavItem>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
