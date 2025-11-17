import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import { LIVE_DEMO_PATH } from "@/lib/routes";
import transparencyIcon from "@/assets/icons/xtm/check.svg";
import scenarioIcon from "@/assets/icons/automation-scenarios.svg";
import remediationIcon from "@/assets/icons/optimal-response.svg";
import agentIcon from "@/assets/icons/opencti/incident-response.svg";
import supportIcon from "@/assets/icons/xtm/audit-logging-user-behavior-analytics.svg";
import checkGreenIcon from "@/assets/icons/check-green.svg";
import crossRedIcon from "@/assets/icons/cross-red.svg";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const featureHighlights: Feature[] = [
  {
    icon: transparencyIcon,
    title: "Transparency by design",
    description: "Every scenario and simulation on OpenAEV is explainable, reproducible and customizable",
  },
  {
    icon: scenarioIcon,
    title: "AI-Powered Scenario Generation",
    description:
      "Create realistic test scenarios instantly with AI. Turn threat intelligence and CERT reports into actionable simulations, reduce manual effort, and make intelligence operational in minutes.",
  },
  {
    icon: remediationIcon,
    title: "AI-Augmented Remediation",
    description:
      "Accelerate response and improve detection with AI-driven insights. Prioritize risks, generate security rules for tools like CrowdStrike and Splunk, and standardize remediation knowledge.",
  },
  {
    icon: agentIcon,
    title: "Bring Your Own Agent",
    description:
      "Run simulations with no extra agents or deployment overhead. Integrate seamlessly with CrowdStrike and Tanium for flexible, resource-efficient execution — even on constrained endpoints.",
  },
  {
    icon: supportIcon,
    title: "Dedicated Customer Support",
    description:
      "Work with our team of experts to scale your exposure management program through defensive and offensive security teams.",
  },
];

type ComparisonRow =
  | { type: "boolean"; label: string; community: boolean; enterprise: boolean }
  | { type: "text"; label: string; community: string; enterprise: string };

const comparisonRows: ComparisonRow[] = [
  { type: "boolean", label: "Integration with OpenCTI to generate threat-informed scenarios", community: true, enterprise: true },
  { type: "boolean", label: "Pre-packaged scenarios library", community: true, enterprise: true },
  { type: "boolean", label: "Frameworks – MITRE ATT&CK, Atomic Red Team, Caldera, Nist, Nuclei & NMAP", community: true, enterprise: true },
  { type: "boolean", label: "Build and automate continuous scenario assessment", community: true, enterprise: true },
  { type: "boolean", label: "Fetch alerts raised through your security systems (EDR, XDR, SIEM, NDR, etc.)", community: true, enterprise: true },
  { type: "boolean", label: "Customize global security posture dashboard", community: true, enterprise: true },
  { type: "boolean", label: "Findings that include detailed CVEs information (via Dashboard)", community: true, enterprise: true },
  { type: "boolean", label: "Recommendations include multiple options for vulnerability mitigation/remediation", community: false, enterprise: true },
  { type: "boolean", label: "Actionable security controls remediation guidance with AI", community: false, enterprise: true },
  { type: "boolean", label: "AI-assisted scenario generation", community: false, enterprise: true },
  { type: "boolean", label: "Leverage existing EDR agents to run & validate your security posture", community: false, enterprise: true },
  { type: "boolean", label: "Filigran Hosted (SaaS)", community: false, enterprise: true },
  { type: "text", label: "Customer support", community: "Community support", enterprise: "Filigran support" },
];

interface RelatedOffering {
  title: string;
  description: string;
  link: string;
}

const relatedOfferings: RelatedOffering[] = [
  {
    title: "Software as a Service",
    description: "Filigran provides fully hosted and managed cloud private instances for all product available in the XTM Suite.",
    link: "/offerings/software-as-a-service",
  },
  {
    title: "Support and Services",
    description:
      "Filigran's XTM Suite Support and Services provide organizations with professional assistance along their integration and usage of the platforms. It ensures them guaranteed response time and prioritization of their requests and questions.",
    link: "/offerings/professional-support-packages",
  },
  {
    title: "Filigran Academy",
    description:
      "Master Filigran solutions and enhance your cybersecurity skills with engaging, hands-on learning paths designed for every level on Filigran Academy.",
    link: "/offerings/filigran-academy",
  },
];

const renderComparisonCell = (row: ComparisonRow, column: "community" | "enterprise") => {
  if (row.type === "boolean") {
    const value = row[column];
    if (value) {
      return (
        <div className="flex justify-center">
          <img src={checkGreenIcon} alt="Check" className="h-5 w-5" />
        </div>
      );
    } else {
      return (
        <div className="flex justify-center">
          <img src={crossRedIcon} alt="Cross" className="h-5 w-5" />
        </div>
      );
    }
  }
  return <span className="text-foreground/70">{row[column]}</span>;
};

const OpenAEVEnterpriseEdition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
              <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Offerings</p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">OpenAEV Enterprise Edition</h1>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Our Enterprise Edition (EE) provides highly demanding organizations with a version that includes additional and powerful features, which require specific investments in research and development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/company/contact">Contact sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Exclusive features</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Prioritize, test and fix what matters</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Convert your threat intelligence into realistic simulations to validate your security controls and see continuous improvement
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureHighlights.map((feature) => (
                <Card key={feature.title} className="border border-white/10 bg-card/80 backdrop-blur-xl p-6 space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10">
                    <img src={feature.icon} alt="" className="h-8 w-8" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              ))}

              <Card className="md:col-span-2 lg:col-span-3 border border-white/10 bg-gradient-to-br from-cyan/10 via-transparent to-blue-500/10 p-6 md:p-8">
                <div className="space-y-4 text-center md:text-left md:flex md:items-center md:justify-between md:space-y-0">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan mb-2">Want to know more?</p>
                    <h3 className="text-2xl font-semibold mb-2">Talk to the Filigran team</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Talk to the Filigran team to learn more about the Enterprise Edition offer!
                    </p>
                  </div>
                  <Button asChild size="lg" variant="cta" className="px-8">
                    <Link to="/company/contact" className="inline-flex items-center gap-2">
                      Contact sales
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.5
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Upgrade</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Upgrade with great added value</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Disrupt crisis preparation with the most comprehensive set of advanced features!
              </p>
            </div>

            <Card className="card-glass border border-white/10 p-0">
              <Table className="[&_th]:text-xs [&_th]:uppercase [&_th]:tracking-[0.3em]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-foreground/70">Options</TableHead>
                    <TableHead className="text-center text-foreground/70">Community Edition</TableHead>
                    <TableHead className="text-center text-foreground/70">Enterprise Edition</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="text-base font-medium text-foreground">{row.label}</TableCell>
                      <TableCell className="text-center">{renderComparisonCell(row, "community")}</TableCell>
                      <TableCell className="text-center">{renderComparisonCell(row, "enterprise")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-col gap-4 border-t border-white/10 p-6 text-center sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-foreground/70">Compare plans in depth with our team.</p>
                <Button asChild className="px-8">
                  <Link to="/company/contact">Contact sales</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Related offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="space-y-4 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Explore</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Explore other offerings</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Discover Filigran's value-added services designed to ensure you maximize the value of your journey with Filigran products.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedOfferings.map((offering) => (
                <Link key={offering.title} to={offering.link} className="group block h-full">
                  <Card className="h-full border border-white/10 bg-card/80 p-6 transition-shadow group-hover:shadow-[0_25px_60px_rgba(5,9,20,0.35)]">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{offering.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{offering.description}</p>
                    </div>
                    <div className="pt-6 text-sm font-semibold text-cyan inline-flex items-center gap-2">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Animated gradient background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#030c21",
              backgroundImage:
                "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          {/* Floating orbs with glow effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Ready to see OpenAEV{' '}
                <span className="text-gradient-cyan">in action?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Try the live demo for free or book a personalized demo to discover how OpenAEV can streamline your exposure validation operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button 
                  asChild 
                  size="lg"
                  className="group text-lg"
                >
                    <Link to={LIVE_DEMO_PATH}>
                    Try live demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="cta" className="group text-lg px-8 py-6">
                  <Link to="/book-demo">
                    Book a demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OpenAEVEnterpriseEdition;