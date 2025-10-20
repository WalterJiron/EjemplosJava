"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "java",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <div className="relative group">
      {/* Efecto de gradiente brillante */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 via-accent/40 to-secondary/60 rounded-xl opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>

      <div className="relative bg-gray-900/95 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm transform transition-all duration-300 group-hover:scale-[1.002] group-hover:border-primary/30">
        {/* Header con pestañas y botones */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-800/80">
          <div className="flex items-center space-x-2">
            {/* Puntos de control */}
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Lenguaje */}
            <span className="text-xs font-mono text-gray-300 bg-gray-700 px-2 py-1 rounded-md border border-gray-600">
              {language}
            </span>
          </div>

          {/* Botón de copiar con animación */}
          <button
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 active:scale-95"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Área del código con SyntaxHighlighter */}
        <div className="relative">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={showLineNumbers}
            lineNumberStyle={{
              color: "#6B7280",
              minWidth: "2.5em",
              paddingRight: "1em",
              textAlign: "right",
              userSelect: "none",
            }}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.5",
              borderRadius: 0,
              border: "none",
            }}
            codeTagProps={{
              style: {
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
