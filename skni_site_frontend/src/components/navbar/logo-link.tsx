import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image
        src="https://kod.prz.edu.pl/img/logo_small.35e34fc9.png"
        alt="logo"
        priority
        style={{
          maxWidth: "100%",
          minHeight: "40px",
          minWidth: "110px",
          width: "auto",
          height: "auto",
          maxHeight: "60px",
        }}
        width={500}
        height={300}
      />
      <span className="sr-only">SKNI KOD</span>
    </Link>
  );
};

export { LogoLink };
