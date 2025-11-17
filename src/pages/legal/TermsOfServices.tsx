import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const documents = [
  {
    title: "On-premise and Community Edition",
    description: "Find the terms and conditions of our on-premise license and support.",
    file: "/legal/filigran-onprem-terms-europe-aug-2025.pdf",
    cta: "Terms and Conditions",
  },
  {
    title: "Cloud platform service agreement",
    description: "Find the terms and conditions of our Cloud Services (Software as a Service, SaaS).",
    file: "/legal/filigran-saas-terms-europe-aug-2025.pdf",
    cta: "Cloud Service Agreement",
  },
];

const TermsOfServices = () => {
  return (
    <LegalPageLayout
      title="Terms of Services"
      description="Access the agreements that govern how Filigran delivers and supports on-premise deployments and our cloud platform."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {documents.map((doc) => (
          <Card key={doc.title} className="bg-white/5 border-white/10 backdrop-blur">
            <CardHeader className="space-y-3">
              <CardTitle className="text-white">{doc.title}</CardTitle>
              <p className="text-white/70 text-base leading-relaxed">{doc.description}</p>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-white/80 shadow-[0_0_35px_rgba(15,188,255,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan mb-4">Download</p>
                <p className="text-white text-lg font-semibold mb-2">{doc.cta}</p>
                <p className="text-white/60 text-sm">
                  Updated August 2025 • PDF • Europe
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outlineGlow"
                className="w-full justify-center text-base font-semibold"
              >
                <a href={doc.file} download>
                  <Download className="w-5 h-5" />
                  {doc.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfServices;

