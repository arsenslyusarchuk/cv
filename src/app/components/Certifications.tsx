import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certification = (typeof RESUME_DATA)["certifications"][number];

interface CertificationItemProps {
  certification: Certification;
}

function CertificationItem({ certification }: CertificationItemProps) {
  const { title, issuer, date, certificateNumber } = certification;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none">{issuer}</h3>
          <div className="text-sm tabular-nums text-gray-500">
            {formattedDate}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-2 text-xs text-foreground/80 print:text-[10px]">
        {title}
          {certificateNumber && (
            <span className="ml-1 text-foreground/60">({certificateNumber})</span>
          )}
      </CardContent>
    </Card>
  );
}

interface CertificationsProps {
  certifications: readonly Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((item) => (
          <article key={item.certificateNumber ?? item.title}>
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
