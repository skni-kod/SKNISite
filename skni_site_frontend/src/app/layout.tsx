import React from "react";
import type { Metadata } from "next";
import { TanstackQueryProvider } from "@/contexts/tanstack/tanstack-query-provider";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar/navbar";

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
          `antialiased flex flex-col h-screen w-screen`,
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
              <div className="flex flex-col h-full w-full px-6 mx-auto max-w-screen-xl">
                <Navbar />
                {children}
              </div>
            </ThemeProvider>
          </TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
