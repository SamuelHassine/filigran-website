import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ArrowRight, FileText, Check } from "lucide-react";
import openaevLogo from "@/assets/openaev-logo.svg";

const IntelligenceLedBreachSimulation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Intelligence-led breach & attack simulation
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                Continuously simulate the attack paths that matter most to your organization using OpenAEV 
                scenarios powered by OpenCTI intelligence. Transform threat intelligence into actionable 
                security validation exercises.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/openaev">Learn more about OpenAEV</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Intelligence-driven scenarios</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Create realistic attack scenarios based on current threat intelligence and adversary TTPs.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Continuous validation</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Continuously test your defenses against evolving threats with automated simulation campaigns.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Measurable improvement</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Track security posture improvements over time with detailed metrics and reporting.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[350px_1fr] gap-12 max-w-7xl mx-auto">
              {/* Sidebar */}
              <div className="lg:sticky lg:top-24 h-fit">
                <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl space-y-6">
                  <img src={openaevLogo} alt="OpenAEV" className="h-10" />
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Category</p>
                      <p className="font-semibold">Use case</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Team</p>
                      <p className="font-semibold">Red Team / Blue Team</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Benefits</p>
                      <ul className="space-y-1">
                        <li className="text-sm">• Intelligence-driven scenarios</li>
                        <li className="text-sm">• Continuous validation</li>
                        <li className="text-sm">• Measurable improvement</li>
                      </ul>
                    </div>
                  </div>

                  <Button asChild className="w-full" variant="cta">
                    <a 
                      href="/resources/pdfs/filigran-use-case_intelligence-led-breach-attack-simulation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </Card>
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Generic attack simulations don't reflect actual threats targeting your organization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Manual tabletop exercises are time-consuming and difficult to scale
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Lack of continuous validation leaves security gaps undetected
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Difficulty measuring actual security improvements and ROI
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solutions */}
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Threat-informed scenario creation</h2>
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Leverage real-time threat intelligence from OpenCTI to create highly relevant attack 
                        scenarios. OpenAEV automatically translates threat actor TTPs into executable simulations 
                        that test your specific environment.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Access a comprehensive library of pre-built scenarios mapped to MITRE ATT&CK framework, 
                        or create custom scenarios tailored to your organization's unique threat landscape and 
                        critical assets.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-6">Automated simulation campaigns</h2>
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Schedule and automate breach and attack simulations to continuously validate your 
                        security controls. OpenAEV orchestrates complex multi-stage attack campaigns without 
                        requiring manual intervention.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        The platform uses your existing security tools and telemetry sources, eliminating the 
                        need for additional agents or infrastructure changes. Simulations can run during 
                        production hours without impacting business operations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-6">Comprehensive validation coverage</h2>
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Test people, processes, and technology simultaneously through integrated tabletop 
                        exercises and technical simulations. OpenAEV validates detection capabilities, response 
                        procedures, and team readiness in realistic scenarios.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Simulate various attack vectors including email phishing, lateral movement, data 
                        exfiltration, and ransomware deployment to ensure comprehensive security coverage.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-6">Actionable remediation insights</h2>
                    <div className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed">
                        Receive detailed reports highlighting security gaps, failed detections, and improvement 
                        opportunities. OpenAEV provides specific remediation recommendations prioritized by risk 
                        and potential impact.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Track security posture improvements over time with built-in metrics and KPIs. Demonstrate 
                        ROI of security investments and validate the effectiveness of implemented controls through 
                        continuous measurement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <section className="py-20 bg-gradient-to-b from-transparent to-cyan/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Discover other use cases</h2>
              <p className="text-lg text-foreground/70">
                Explore how our XTM Suite can enhance other aspects of your security operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link to="/use-cases/threat-monitoring-hunting" className="group">
                <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl hover:border-cyan/50 transition-all h-full">
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan">Use case</span>
                    <h3 className="text-xl font-semibold group-hover:text-cyan transition-colors">
                      Threat monitoring and hunting
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Proactively hunt for threats using the intelligence that powers your simulations.
                    </p>
                    <div className="flex items-center gap-2 text-cyan text-sm font-semibold pt-2">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/use-cases/incident-response-and-investigation" className="group">
                <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl hover:border-cyan/50 transition-all h-full">
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan">Use case</span>
                    <h3 className="text-xl font-semibold group-hover:text-cyan transition-colors">
                      Incident response and investigation
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Improve incident response capabilities through realistic breach simulations.
                    </p>
                    <div className="flex items-center gap-2 text-cyan text-sm font-semibold pt-2">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default IntelligenceLedBreachSimulation;
