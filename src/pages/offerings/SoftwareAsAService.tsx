import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ArrowRight } from "lucide-react";

import openctiLogo from "@/assets/offerings/saas-opencti.svg";
import openaevLogo from "@/assets/offerings/saas-openaev.svg";
import enterpriseEditionIllustration from "@/assets/offerings/saas-enterprise-edition.svg";
import securedIllustration from "@/assets/offerings/saas-secured-confidential.svg";
import valueIllustration from "@/assets/offerings/saas-all-in-one.svg";
import supportIllustration from "@/assets/offerings/saas-filigran-support.svg";
import checkGreenIcon from "@/assets/icons/check-green.svg";
import crossRedIcon from "@/assets/icons/cross-red.svg";

interface FeatureCard {
  image: string;
  imageAlt: string;
  imageBg: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    image: enterpriseEditionIllustration,
    imageBg: "from-cyan/10 to-blue-500/10",
    imageAlt: "Enterprise Edition Included",
    title: "Enterprise Edition Included",
    description: "Enjoy greater added value from EE exclusive features such as advanced correlation and pattern detection.",
  },
  {
    image: securedIllustration,
    imageBg: "from-blue-500/10 to-cyan/5",
    imageAlt: "Secured and Confidential",
    title: "Secured and Confidential",
    description: "Each SaaS instance is running in its own infrastructure tenant to ensure strict segregation between customers.",
  },
  {
    image: valueIllustration,
    imageBg: "from-cyan/15 to-blue-500/5",
    imageAlt: "All-in-one, no hidden cost",
    title: "All-in-one, no hidden cost",
    description: "Unlimited number of users, data sources and integrations.",
  },
  {
    image: supportIllustration,
    imageBg: "from-blue-500/10 to-purple-500/10",
    imageAlt: "Filigran Support",
    title: "Filigran Support",
    description: "Standard support package is attached to all cloud hosting plans, including 2 health checks per year and 1 annual workshop.",
  },
];

const BooleanIcon = ({ value }: { value: boolean }) => (
  <div className="flex justify-center">
    <img
      src={value ? checkGreenIcon : crossRedIcon}
      alt={value ? "Included" : "Not included"}
      className="h-5 w-5"
    />
  </div>
);

const SoftwareAsAService = () => {
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Software as a Service</h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                Filigran provides fully managed cloud private instances for all product available in our XTM suite.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/company/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                Always up-to-date
              </h2>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-cyan">
                and adaptable
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Filigran's SaaS offering is easy to implement, operate and scale your threat intelligence driven approach 
                to anticipate future attacks, identify priorities and establish remediation paths.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 border-white/10 bg-card/80 backdrop-blur-xl space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                    <img src={feature.image} alt={feature.imageAlt} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
              <Card className="p-6 border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 backdrop-blur-xl space-y-4">
                <h3 className="text-xl font-semibold">Want to know more?</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Talk to the Filigran team to learn more about the SaaS offering!
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/company/contact">Contact sales</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Tenant Sizes Table */}
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
                Available tenant sizes and options
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Filigran SaaS offering is only based on the amount of resources available for a given customer{" "}
                <span className="font-semibold">and not number of users or integrations.</span>
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                          Solutions
                        </th>
                        <th colSpan={2} className="text-center p-6 border-l border-white/10">
                          <div className="flex items-center justify-center gap-2">
                            <img src={openctiLogo} alt="OpenCTI" className="h-6" />
                            <span className="text-lg font-bold">OpenCTI</span>
                          </div>
                        </th>
                        <th colSpan={2} className="text-center p-6 border-l border-white/10">
                          <div className="flex items-center justify-center gap-2">
                            <img src={openaevLogo} alt="OpenAEV" className="h-6" />
                            <span className="text-lg font-bold">OpenAEV</span>
                          </div>
                        </th>
                      </tr>
                      <tr className="border-b border-white/10">
                        <th className="p-4"></th>
                        <th className="text-center p-4 text-base font-semibold border-l border-white/10">Medium</th>
                        <th className="text-center p-4 text-base font-semibold">Large</th>
                        <th className="text-center p-4 text-base font-semibold border-l border-white/10">Medium</th>
                        <th className="text-center p-4 text-base font-semibold">Large</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Managed dedicated instance</td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Enterprise Edition</td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Computing</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">8vCPU</td>
                        <td className="p-6 text-center text-foreground/70">16 vCPU</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">4 vCPU</td>
                        <td className="p-6 text-center text-foreground/70">8 vCPU</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Memory</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">32 GB</td>
                        <td className="p-6 text-center text-foreground/70">64 GB</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">8 GB</td>
                        <td className="p-6 text-center text-foreground/70">16 GB</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Storage</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">256 GB</td>
                        <td className="p-6 text-center text-foreground/70">512 GB</td>
                        <td className="p-6 text-center text-foreground/70 border-l border-white/10">32 GB</td>
                        <td className="p-6 text-center text-foreground/70">64 GB</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Unlimited connectors and integrations</td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Unlimited users</td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Support subscription</td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center border-l border-white/10">
                          <BooleanIcon value={true} />
                        </td>
                        <td className="p-6 text-center">
                          <BooleanIcon value={true} />
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 text-sm font-medium">Product brief</td>
                        <td colSpan={2} className="p-6 text-center border-l border-white/10">
                          <a 
                            href="/resources/pdfs/opencti-saas-filigran-product-brief-2025-july.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan hover:underline"
                          >
                            Download
                          </a>
                        </td>
                        <td colSpan={2} className="p-6 text-center border-l border-white/10">
                          <a 
                            href="/resources/pdfs/filigran_openaev-saas_2025-oct.pdf"
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
                <div className="p-6 bg-gradient-to-r from-cyan/10 to-blue-500/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-foreground/70">Compare plans in depth with our team.</p>
                  <Button asChild variant="cta" size="lg" className="px-8 w-full md:w-auto">
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

              <Link to="/offerings/professional-support-packages" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Support and Services
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Filigran's XTM Suite Support and Services provides organizations with professional assistance along their integration and usage of the platforms. 
                    It ensures them guaranteed response time and prioritization of their requests and questions.
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

export default SoftwareAsAService;
