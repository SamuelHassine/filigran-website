import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const licenses = [
  {
    title: "OpenCTI Enterprise Edition",
    description: "Our License Agreement for the OpenCTI Enterprise Edition.",
    file: "/legal/opencti-ee-license.txt",
    cta: "OpenCTI EE License Agreement",
  },
  {
    title: "OpenBAS Enterprise Edition",
    description: "Our License Agreement for the OpenBAS Enterprise Edition.",
    file: "/legal/openbas-ee-license.txt",
    cta: "OpenBAS EE License Agreement",
  },
];

const Licenses = () => {
  return (
    <LegalPageLayout
      title="Licenses"
      description="Review the licenses that govern the use of our enterprise software. Each agreement is available for offline reference."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {licenses.map((license) => (
          <Card key={license.title} className="bg-white/5 border-white/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">{license.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/70 text-base leading-relaxed">{license.description}</p>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                <FileText className="w-6 h-6 text-cyan" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan">Agreement</p>
                  <p className="text-white font-semibold">{license.cta}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outlineGlow" className="w-full justify-center text-base font-semibold">
                <a href={license.file} download>
                  <FileText className="w-5 h-5" />
                  {license.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </LegalPageLayout>
  );
};

export default Licenses;

