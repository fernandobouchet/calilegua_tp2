import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-primary hover:text-opacity-70 transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavItem;
