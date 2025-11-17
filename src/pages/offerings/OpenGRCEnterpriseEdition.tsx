import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Shield, TrendingUp, DollarSign, Users, Zap, Award } from "lucide-react";
import checkGreenIcon from "@/assets/icons/check-green.svg";
import crossRedIcon from "@/assets/icons/cross-red.svg";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureHighlights: Feature[] = [
  {
    icon: <DollarSign className="h-7 w-7 text-cyan" />,
    title: "Advanced Risk Quantification",
    description: "AI-powered financial impact modeling with Monte Carlo simulations and customizable risk appetite frameworks."
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-cyan" />,
    title: "Predictive Risk Analytics",
    description: "Machine learning algorithms that forecast risk trends based on threat intelligence and historical patterns."
  },
  {
    icon: <Shield className="h-7 w-7 text-cyan" />,
    title: "Automated Compliance Mapping",
    description: "AI agents that automatically map controls to multiple frameworks (ISO 27001, NIST, SOC2) and track compliance drift."
  },
  {
    icon: <Users className="h-7 w-7 text-cyan" />,
    title: "Board-Ready Reporting",
    description: "Executive dashboards with risk heat maps, trend analysis, and automated narrative generation for board presentations."
  },
  {
    icon: <Zap className="h-7 w-7 text-cyan" />,
    title: "Risk Treatment Automation",
    description: "Intelligent workflows that recommend and orchestrate risk mitigation actions across the XTM Suite."
  },
  {
    icon: <Award className="h-7 w-7 text-cyan" />,
    title: "Third-Party Risk Intelligence",
    description: "Continuous monitoring of supplier risk with automated questionnaires and threat intelligence correlation."
  }
];

interface ComparisonRow {
  feature: string;
  community: boolean | string;
  enterprise: boolean | string;
  type: "boolean" | "text";
}

const comparisonData: ComparisonRow[] = [
  { feature: "Core risk management", community: true, enterprise: true, type: "boolean" },
  { feature: "Threat-informed risk assessment", community: true, enterprise: true, type: "boolean" },
  { feature: "Basic compliance tracking", community: true, enterprise: true, type: "boolean" },
  { feature: "XTM Suite integration", community: "Limited", enterprise: "Full", type: "text" },
  { feature: "Financial risk quantification", community: false, enterprise: true, type: "boolean" },
  { feature: "Monte Carlo simulations", community: false, enterprise: true, type: "boolean" },
  { feature: "AI-powered risk predictions", community: false, enterprise: true, type: "boolean" },
  { feature: "Automated compliance mapping", community: false, enterprise: true, type: "boolean" },
  { feature: "Executive dashboards", community: false, enterprise: true, type: "boolean" },
  { feature: "Board reporting templates", community: false, enterprise: true, type: "boolean" },
  { feature: "Risk treatment automation", community: false, enterprise: true, type: "boolean" },
  { feature: "Third-party risk management", community: false, enterprise: true, type: "boolean" },
  { feature: "Advanced RBAC", community: false, enterprise: true, type: "boolean" },
  { feature: "Audit logging", community: false, enterprise: true, type: "boolean" },
  { feature: "API access", community: "Read-only", enterprise: "Full", type: "text" },
  { feature: "Support", community: "Community", enterprise: "24/7 Priority", type: "text" }
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
  } else {
    return <span className="text-foreground/70">{row[column]}</span>;
  }
};

const OpenGRCEnterpriseEdition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className="absolute -top-24 left-0 h-[480px] w-[480px] rounded-full bg-cyan/20 blur-[180px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[210px]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
                <span className="text-sm font-semibold text-cyan">Coming Q4 2026</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                OpenGRC Enterprise Edition
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                Transform risk management with AI-powered quantification, predictive analytics, 
                and automated compliance for enterprise-scale GRC operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild variant="cta" size="lg" className="px-8">
                  <Link to="/company/contact">Join Early Access</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="px-8">
                  <Link to="/platforms/opengrc">Learn about OpenGRC</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Enterprise Features</p>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Advanced capabilities for enterprise risk management
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                OpenGRC Enterprise Edition brings sophisticated AI and automation to make risk 
                quantification precise, compliance continuous, and decisions data-driven.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureHighlights.map((feature) => (
                <Card key={feature.title} className="border border-white/10 bg-card/80 backdrop-blur-xl p-6 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-6 border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-3">Want early access?</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Be among the first to transform your GRC program with OpenGRC Enterprise Edition.
              </p>
              <Button asChild variant="secondary" className="w-full md:w-auto">
                <Link to="/company/contact">Contact our team</Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gradient-to-b from-cyan/5 to-transparent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why OpenGRC Enterprise Edition?
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Built for organizations that need to quantify risk in business terms, 
                automate compliance, and make data-driven security investment decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl text-center">
                <div className="text-5xl font-bold text-cyan mb-4">10x</div>
                <h3 className="text-xl font-semibold mb-2">Faster Risk Assessment</h3>
                <p className="text-foreground/70 text-sm">
                  Automated risk scoring with real-time threat intelligence integration
                </p>
              </Card>

              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl text-center">
                <div className="text-5xl font-bold text-cyan mb-4">95%</div>
                <h3 className="text-xl font-semibold mb-2">Compliance Automation</h3>
                <p className="text-foreground/70 text-sm">
                  Reduce manual compliance work with AI-powered control mapping
                </p>
              </Card>

              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl text-center">
                <div className="text-5xl font-bold text-cyan mb-4">$2M+</div>
                <h3 className="text-xl font-semibold mb-2">Average Risk Reduction</h3>
                <p className="text-foreground/70 text-sm">
                  Identify and mitigate high-impact risks with predictive analytics
                </p>
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
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Compare Editions</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Enterprise-grade GRC capabilities</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                OpenGRC Enterprise Edition extends the Community Edition with advanced 
                features for large-scale risk management programs.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50%]">Features</TableHead>
                      <TableHead className="text-center">Community Edition</TableHead>
                      <TableHead className="text-center">
                        <span className="text-cyan">Enterprise Edition</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">{renderComparisonCell(row, "community")}</TableCell>
                        <TableCell className="text-center">{renderComparisonCell(row, "enterprise")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Complete your XTM Suite</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Combine OpenGRC with our other enterprise offerings for comprehensive threat management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/offerings/opencti-enterprise-edition" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    OpenCTI Enterprise Edition
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Advanced threat intelligence platform with AI-powered analysis and enterprise features.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/openaev-enterprise-edition" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    OpenAEV Enterprise Edition
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Enterprise-grade adversarial exposure validation with advanced automation.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/software-as-a-service" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Software as a Service
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Fully managed cloud instances with Enterprise Edition included.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-blue-500/20" />
          </div>

          <div className="container relative z-10 mx-auto">
            <Card className="max-w-4xl mx-auto p-12 border-white/10 bg-card/80 backdrop-blur-xl text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Be an Early Adopter
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                OpenGRC Enterprise Edition is coming in Q4 2026. Join our early access program 
                to shape the future of risk management and get exclusive benefits.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="cta" className="px-8">
                  <Link to="/company/contact">Request Early Access</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <Link to="/platforms/opengrc">Explore OpenGRC</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpenGRCEnterpriseEdition;
