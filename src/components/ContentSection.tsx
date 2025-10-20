import { SectionData } from "@/app/typeEj";
import { CodeBlock } from "./code-block";

const ContentSection = ({ section }: { section: SectionData }) => (
  <section
    className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-border"
    id={section.id}
  >
    <div className="space-y-8">
      <div>
        <h2
          className={`text-4xl font-bold mb-4 text-${section.color} glow-text`}
        >
          {section.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {section.description}
        </p>
      </div>

      {section.examples.map((example, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            {example.title}
          </h3>
          <CodeBlock code={example.code} />
        </div>
      ))}
    </div>
  </section>
);
export default ContentSection;
