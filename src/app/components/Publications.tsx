import React from "react";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Publication = (typeof RESUME_DATA)["publications"][number];

interface PublicationItemProps {
  publication: Publication;
}

function PublicationItem({ publication }: PublicationItemProps) {
  const { citation, doi } = publication;

  return (
    <li className="text-xs text-foreground/80 text-pretty print:text-[10px]">
      {citation}
      {doi && (
        <>
          {" "}
          DOI:{" "}
          <a
            className="underline hover:text-foreground/70"
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {doi}
          </a>
          .
        </>
      )}
    </li>
  );
}

interface PublicationsProps {
  publications: (typeof RESUME_DATA)["publications"];
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications-section">
        Publications
      </h2>
      <ul
        className="list-inside list-disc space-y-2"
        aria-labelledby="publications-section"
      >
        {publications.map((pub) => (
          <PublicationItem key={pub.doi ?? pub.citation} publication={pub} />
        ))}
      </ul>
    </Section>
  );
}

