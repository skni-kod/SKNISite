import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FooterItem } from "@/components/footer/footer-item";
import { Copyright } from "@/components/footer/copyright";

const footerItems = [
  {
    href: "https://www.facebook.com/skni.kod",
    alt: "Facebook",
    icon: <Facebook />,
  },
  {
    href: "https://www.instagram.com/skni.kod/",
    alt: "Instagram",
    icon: <Instagram />,
  },
  {
    href: "https://www.linkedin.com/company/78064192",
    alt: "Linkedin",
    icon: <Linkedin />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center my-4 gap-y-5 sm:gap-y-0">
      <div className="flex flex-row gap-x-3">
        {footerItems.map((item, index) => (
          <FooterItem
            key={item.alt}
            href={item.href}
            alt={item.alt}
            icon={item.icon}
          />
        ))}
      </div>
      <Copyright />
    </footer>
  );
};

export { Footer };
