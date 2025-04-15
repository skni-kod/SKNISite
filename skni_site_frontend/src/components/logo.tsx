import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="mx-10">
      <Image
        src="/images/logo_small_dark.png"
        className="block"
        alt="logo"
        priority
        width={400}
        height={150}
      />
      <span className="sr-only">SKNI KOD</span>
    </div>
  );
};

export { Logo };
