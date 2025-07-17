import React from "react";
import type { Metadata } from "next";
import { TanstackQueryProvider } from "@/contexts/tanstack/tanstack-query-provider";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "SKNI KOD",
  description: "Strona Koła Naukowego SKNI KOD",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // https://next-intl.dev/docs/environments/server-client-components#example-locale-switcher

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // "server rendered HTML didn't match the client properties"
  // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          `antialiased flex flex-col min-h-screen`,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <TanstackQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
