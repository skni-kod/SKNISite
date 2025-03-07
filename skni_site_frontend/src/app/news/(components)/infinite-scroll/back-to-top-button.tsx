"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full shadow-lg transition-all flex items-center justify-center w-12 h-12"
          aria-label="Wróć na górę"
        >
          <ArrowUp className="w-full h-full" />
        </Button>
      )}
    </div>
  );
};

export { BackToTopButton };
