import Link from "next/link";

interface FooterItemProps {
  icon: React.ReactNode;
  href: string;
  alt: string;
}

const FooterItem = ({ icon, href, alt }: FooterItemProps) => {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center">
        <div
          className="hover:text-primary transition-all duration-300 p-2"
          aria-label={alt}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
};

export { FooterItem };
