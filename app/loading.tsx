import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Loader2 className="w-16 h-16 animate-spin text-primary" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Cargando...
      </h1>
      <p className="mt-2 text-muted-foreground">
        Por favor espera mientras obtenemos el contenido.
      </p>
    </div>
  );
};

export default Loading;
