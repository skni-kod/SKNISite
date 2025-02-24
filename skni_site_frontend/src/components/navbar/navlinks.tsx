import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { Text } from "@/components/ui/text";
import { SheetClose } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme-toogle";
import React from "react";

const NavLink = ({
  href,
  label,
  isSidebar,
}: {
  href: string;
  label: string;
  isSidebar: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  const link = (
    <Link
      href={href}
      className={clsx({
        "relative after:absolute after:bg-primary after:rounded-lg": isActive,
        "after:left-[-12px] after:h-full after:w-[3px]": isSidebar && isActive,
        "after:left-0 after:bottom-[-8px] after:w-full after:h-[3px]":
          !isSidebar && isActive,
      })}
    >
      <Text
        variant="navText"
        className="hover:text-primary transition-colors duration-300"
      >
        {label}
      </Text>
    </Link>
  );

  return isSidebar ? <SheetClose asChild>{link}</SheetClose> : link;
};

const NavLinks = ({ isSidebar = false }: { isSidebar?: boolean }) => {
  const t = useTranslations("Navbar");
  const pages = ["about", "news", "articles", "projects"] as const;

  return (
    <>
      {pages.map((page) => (
        <NavLink
          key={page}
          href={`/${page}`}
          label={t(page)}
          isSidebar={isSidebar}
        />
      ))}
      {isSidebar && (
        <div className="flex gap-2 items-center">
          <Text>{t("ThemeToggle.switchTheme")}</Text>
          <ThemeToggle />
        </div>
      )}
    </>
  );
};

export { NavLinks };
