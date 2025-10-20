
export interface SectionData {
    id: string;
    title: string;
    description: string;
    color: "primary" | "secondary" | "accent";
    examples: {
        title: string;
        code: string;
    }[];
}