import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <FileQuestion className="w-16 h-16 text-muted-foreground" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Página no encontrada
      </h1>
      <p className="mt-2 text-muted-foreground">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Ir a la página principal</Link>
      </Button>
    </div>
  );
};

export default NotFound;
