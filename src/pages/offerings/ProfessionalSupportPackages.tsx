import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ArrowRight } from "lucide-react";

import unlimitedQuestionsIcon from "@/assets/offerings/support-unlimited-questions.svg";
import responseTimeIcon from "@/assets/offerings/support-optimal-response.svg";
import contactChannelsIcon from "@/assets/offerings/support-contact-channels.svg";
import healthChecksIcon from "@/assets/offerings/support-health-checks.svg";
import integrationWorkshopsIcon from "@/assets/offerings/support-integration-workshops.svg";
import checkGreenIcon from "@/assets/icons/check-green.svg";
import crossRedIcon from "@/assets/icons/cross-red.svg";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: unlimitedQuestionsIcon,
    title: "Unlimited questions",
    description: "Whenever you have a question or encountered an issue, you can reach out to our team."
  },
  {
    icon: responseTimeIcon,
    title: "Optimal response time",
    description: "When you subscribe to our standard/premium support, your requests will be handled within a guaranteed time frame."
  },
  {
    icon: contactChannelsIcon,
    title: "Multiple contact channels",
    description: "Reach out to our customer success team through portal, ticketing system, private Slack channel."
  },
  {
    icon: healthChecksIcon,
    title: "Regular health checks",
    description: "A Filigran private tool to collect and analyze platform configurations, metrics and high level KPIs (not the data)."
  },
  {
    icon: integrationWorkshopsIcon,
    title: "Integration Workshops",
    description: "Ensure a proper integration between XTM suite and organizations' cybersecurity ecosystems with our customer success management team."
  }
];

interface ComparisonRow {
  label: string;
  standard: string | boolean | number;
  premium: string | boolean | number;
}

const comparisonData: ComparisonRow[] = [
  {
    label: "Communication channels",
    standard: "Support Portal",
    premium: "Support Portal + Private Slack Channel"
  },
  {
    label: "Support hours",
    standard: "8 x 5",
    premium: "24 x 7"
  },
  {
    label: "Response time for low severity issues",
    standard: "24 hours",
    premium: "12 hours"
  },
  {
    label: "Response time for major severity issues",
    standard: "4 hours",
    premium: "2 hours"
  },
  {
    label: "Filigran Academy",
    standard: "Free on-boarding courses",
    premium: "Free on-boarding courses"
  },
  {
    label: "Assigned customer success manager",
    standard: true,
    premium: true
  },
  {
    label: "Security notifications",
    standard: true,
    premium: true
  },
  {
    label: "Hot fixes and bug escalation",
    standard: true,
    premium: true
  },
  {
    label: "Health checks",
    standard: 2,
    premium: 4
  }
];

const ProfessionalSupportPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCellValue = (value: string | boolean | number) => {
    if (typeof value === "boolean") {
      return (
        <div className="flex justify-center">
          <img
            src={value ? checkGreenIcon : crossRedIcon}
            alt={value ? "Included" : "Not available"}
            className="h-5 w-5"
          />
        </div>
      );
    }
    if (typeof value === "number") {
      return <span className="text-foreground/70 text-center block">{value}</span>;
    }
    return <span className="text-foreground/70">{value}</span>;
  };

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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Support and Services</h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                We provide organizations with professional assistance along their deployment, maintenance and usage of the platforms. 
                It ensures them guaranteed response time and prioritization of their requests and questions
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/company/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Leverage our robust assistance</h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Our 100% in-house customer success team provides prompt and professional support service 
                to ensure you optimal operations on our XTM suite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 border-white/10 bg-card/80 backdrop-blur-xl space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                    <img src={feature.icon} alt="" className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
              <Card className="p-6 border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 backdrop-blur-xl space-y-4">
                <h3 className="text-xl font-semibold">Want to know more?</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Talk to the Filigran team to learn more about the support packages!
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/company/contact">Contact sales</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
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
                opacity: 0.3
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Maximize our products value within your organization
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Whatever stage and size your company is, we have a support plan that fits your team adapted to your use cases and needs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                          Options
                        </th>
                        <th className="text-center p-6 text-lg font-bold">
                          Standard support
                        </th>
                        <th className="text-center p-6 text-lg font-bold">
                          Premium support
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="p-6 text-sm font-medium">{row.label}</td>
                          <td className="p-6 text-center">{renderCellValue(row.standard)}</td>
                          <td className="p-6 text-center">{renderCellValue(row.premium)}</td>
                        </tr>
                      ))}
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Product brief</td>
                        <td colSpan={2} className="p-6 text-center">
                          <a 
                            href="/resources/pdfs/xtm-suite-support-and-services-filigran-product-brief-2025-july.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan hover:underline"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan/10 to-blue-500/10 text-center">
                  <Button asChild variant="cta" size="lg" className="px-8">
                    <Link to="/company/contact">Contact sales</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Explore other offerings</h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Discover Filigran's value-added services designed to ensure you maximize the value of your journey with Filigran products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/offerings/software-as-a-service" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Software as a Service
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Filigran provides fully hosted and managed cloud private instances for all product available in the XTM Suite.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/opencti-enterprise-edition" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Enterprise Edition
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Our Enterprise Edition (EE) provides highly demanding organizations with a version that includes additional and powerful features, 
                    which require specific investments in research and development.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/filigran-academy" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Filigran Academy
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Master Filigran solutions and enhance your cybersecurity skills with engaging, hands-on learning paths designed for every level on Filigran Academy.
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

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalSupportPackages;
