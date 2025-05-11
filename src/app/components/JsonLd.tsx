// components/JsonLd.tsx
"use client";

interface JsonLdProps {
  children: Record<string, any>;
}

export function JsonLd({ children }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }}
    />
  );
}
