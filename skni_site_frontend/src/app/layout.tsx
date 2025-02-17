import React from "react";
import type { Metadata } from "next";
import { TanstackQueryProvider } from "@/contexts/tanstack/tanstack-query-provider";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SKNI KOD",
  description: "Strona Koła Naukowego SKNI KOD",
};

const lato = Lato({ weight: "400", subsets: ["latin"] });

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

  return (
    <html lang={locale}>
      <body className={cn(lato.className, `antialiased h-screen w-screen`)}>
        <NextIntlClientProvider messages={messages}>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
