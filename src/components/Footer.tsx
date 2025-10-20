const Footer = () => (
  <footer className="border-t border-border mt-20 bg-gradient-to-b from-background to-muted/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Título y descripción */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="text-primary glow-text">Java</span>
            <span className="text-foreground"> Es una experiencia linda</span>
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Explora más sobre programación en Java
          </p>
        </div>

        {/* Enlace de documentación mejorado - Responsive */}
        <div className="flex justify-center px-2">
          <a
            href="/TecnicasJava.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto max-w-sm sm:max-w-none px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-foreground bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            {/* Efecto de gradiente de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icono y texto - Responsive */}
            <div className="relative z-10 flex items-center space-x-2 sm:space-x-3 flex-nowrap">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap text-sm sm:text-base lg:text-lg">
                Ver Documentación
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>

            {/* Efecto de brillo al hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mensaje final - Responsive */}
        <div className="pt-4 sm:pt-6">
          <p className="text-muted-foreground/80 italic text-sm sm:text-base">
            "Hola profe. -Listo para pasar Desarrollo III 🥳"
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
