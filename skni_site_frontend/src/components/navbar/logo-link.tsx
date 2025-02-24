import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo_small_light.png"
        className="block dark:hidden"
        alt="logo"
        priority
        width={160}
        height={59}
      />
      <Image
        src="/images/logo_small_dark.png"
        className="hidden dark:block"
        alt="logo"
        priority
        width={160}
        height={59}
      />
      <span className="sr-only">SKNI KOD</span>
    </Link>
  );
};

export { LogoLink };
