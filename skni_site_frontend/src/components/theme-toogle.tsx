"use client";

import * as React from "react";
import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

const ThemeButton = ({
  newTheme,
}: {
  newTheme: "light" | "dark" | "system";
}) => {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("Navbar.ThemeToggle");

  return (
    <DropdownMenuItem onClick={() => setTheme(newTheme)}>
      <div className="flex items-center justify-between w-full gap-2">
        <Text>{t(newTheme)}</Text>
        {theme === newTheme && <Check />}
      </div>
    </DropdownMenuItem>
  );
};

const ThemeToggle = () => {
  const t = useTranslations("Navbar.ThemeToggle");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("switchTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeButton newTheme="light" />
        <ThemeButton newTheme="dark" />
        <ThemeButton newTheme="system" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeToggle };
