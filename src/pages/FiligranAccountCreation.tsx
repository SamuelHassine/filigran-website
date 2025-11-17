import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { HubspotForm } from "@/components/HubspotForm";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const demoResources = [
  {
    title: "XTM Hub",
    description:
      "The central, collaborative platform for users to access valuable resources and tradecraft for XTM products, and manage subscribed services.",
    cta: "Have an account? Explore XTM Hub now",
    href: "https://hub.filigran.io/",
  },
  {
    title: "OpenCTI live demo instance",
    description: "Structure and operationalize cyber threat intelligence knowledge efficiently.",
    cta: "Have an account? Access live demo now",
    href: "https://demo.opencti.io/dashboard",
  },
  {
    title: "OpenAEV live demo instance",
    description: "Leverage real-time threat data from OpenCTI to create attack simulations and monitor security posture.",
    cta: "Have an account? Access live demo now",
    href: "https://demo.openbas.io/",
  },
  {
    title: "Filigran Academy",
    description: "The all-in-one learning platform designed to help you master Filigran solutions.",
    cta: "Have an account? Go to Filigran Academy now",
    href: "https://academy.filigran.io/",
  },
];

const GradientBackground = () => (
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
  </div>
);

const FiligranAccountCreation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative min-h-screen overflow-hidden flex items-center py-24">
          <GradientBackground />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center mb-16 pt-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Filigran Account Creation</h1>
              <p className="text-lg md:text-xl text-white/80">
                Create a single Filigran account to{" "}
                <span className="text-white">access and explore all our product demos and various resources.</span>
              </p>
            </div>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start max-w-6xl mx-auto">
              <div className="space-y-8 text-white">
                <p className="text-white/70">
                  If you’ve already created an account, just click the links below and start your Filigran journey today!
                </p>

                <div className="grid gap-4">
                  {demoResources.map((resource) => (
                    <Card
                      key={resource.title}
                      className="p-6 border-white/10 bg-card/80 backdrop-blur-lg space-y-3"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                        <p className="text-white/70 text-sm md:text-base">{resource.description}</p>
                      </div>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan"
                      >
                        {resource.cta}
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 border-white/10 bg-card/85 backdrop-blur-2xl shadow-2xl">
                <div className="space-y-4">
                  <p className="text-sm font-semibold tracking-[0.35em] uppercase text-cyan/60">
                    Live demo access
                  </p>
                  <h2 className="text-3xl font-bold text-white">
                    Access free live demo & stay in the loop
                  </h2>
                  <p className="text-white/70">
                    Sign up for a single Filigran account to access our live demonstrations, explore free resources, and receive our bi-monthly newsletter, exclusive event invitations, and promotional updates.
                  </p>
                </div>

                <HubspotForm
                  portalId="26791207"
                  formId="10b2ca41-4734-46d8-96dd-ac410a10a937"
                  region="eu1"
                  className={cn("mt-8", "hubspot-form-container")}
                />
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FiligranAccountCreation;

