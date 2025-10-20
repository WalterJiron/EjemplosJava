"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TAGS = ["Enums", "Formato", "Random", "Recursividad"];

const HeroSection = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    try {
      // Actualizar la URL sin recargar la página
      router.push(`/#${sectionId}`, { scroll: false });

      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error("Error al navegar a la sección:", error);
      // Fallback: scroll básico y actualización de URL
      router.push(`/#${sectionId}`, { scroll: false });
      const element = document.getElementById(sectionId);
      element?.scrollIntoView();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent, sectionId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0, 240, 255, 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <section className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-balance">
            <span className="text-foreground"> {"Tecnicas de "}</span>
            <span className="text-primary glow-text">Java</span>
            <Image
              src="/java-logo.png"
              alt="Java Logo"
              width={60}
              height={60}
              className="inline-block ml-8 align-middle"
            />
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explora los conceptos de Java con un enfoque en las buenas prácticas
            y patrones de diseño.
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {TAGS.map((tag, index) => {
              const sectionMap: { [key: string]: string } = {
                Enums: "enum",
                Formato: "formato",
                Random: "random",
                Recursividad: "recursividad",
              };

              const sectionId = sectionMap[tag];

              return (
                <button
                  key={tag}
                  onClick={() => scrollToSection(sectionId)}
                  onKeyDown={(e) => handleKeyPress(e, sectionId)}
                  className={`px-4 py-2 border rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    index % 4 === 0 || index % 4 === 3
                      ? "bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 hover:border-primary/70 focus:ring-primary"
                      : index % 4 === 1
                      ? "bg-secondary/20 border-secondary/50 text-secondary hover:bg-secondary/30 hover:border-secondary/70 focus:ring-secondary"
                      : "bg-accent/20 border-accent/50 text-accent hover:bg-accent/30 hover:border-accent/70 focus:ring-accent"
                  }`}
                  aria-label={`Ir a la sección de ${tag}`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
