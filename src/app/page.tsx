"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SECTIONS_DATA from "./dataEj";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// ... tus otros imports

export default function Home() {
  const router = useRouter();

  // Efecto para manejar los anchors en la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remover el #
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Ejecutar cuando cambie el hash
    handleHashChange();

    // También ejecutar cuando la página se cargue con un hash
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("load", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("load", handleHashChange);
    };
  }, [router]);

  return (
    <main className="min-h-screen">
      <HeroSection />

      {SECTIONS_DATA.map((section, index) => (
        <ContentSection key={section.id} section={section} />
      ))}

      <Footer />
    </main>
  );
}
