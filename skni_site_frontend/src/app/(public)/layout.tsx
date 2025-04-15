import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full px-6 mx-auto max-w-screen-xl">
      <Navbar />
      <main className="flex-grow h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
