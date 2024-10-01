import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex">
      <ul className="flex mx-auto gap-2 lg:gap-10">
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
        <li>
          <Link href={"/temporadas"}>Temporadas</Link>
        </li>
        <li>
          <Link href={"/personajes"}>Personajes</Link>
        </li>
        <li>
          <Link href={"/recomendaciones"}>Recomendaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
