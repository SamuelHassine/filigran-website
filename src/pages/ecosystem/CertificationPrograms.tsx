import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GetStartedSection } from "@/components/GetStartedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, UsersRound, Handshake, ShieldCheck, ArrowRight, CalendarClock } from "lucide-react";

const certificationTracks = [
  {
    title: "Practitioner Certification",
    description: "Validate day-to-day mastery of OpenCTI, OpenAEV and OpenGRC workflows.",
    focus: "Hands-on labs, threat data hygiene and scenario execution guidance.",
    timeline: "Private pilots begin Q2 2026.",
    icon: UsersRound,
  },
  {
    title: "Professional Certification",
    description: "Advanced accreditation for program leads who orchestrate the full XTM Suite.",
    focus: "Governance, automation templates and cross-platform design reviews.",
    timeline: "Capstone evaluations target mid-2026.",
    icon: Award,
  },
  {
    title: "Partner Accreditation",
    description: "Purpose-built paths for MSSPs, solution providers and technology alliances.",
    focus: "Service playbooks, integration checklists and joint success criteria.",
    timeline: "Partner enablement cohorts planned for H2 2026.",
    icon: Handshake,
  },
] as const;

const CertificationPrograms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
                <ShieldCheck className="h-4 w-4 text-cyan" />
                <span className="text-sm font-semibold text-cyan">Ecosystem Certifications</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Filigran Certification Programs</h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                We are building focused certification paths for practitioners, program leaders and partners, with the first waves
                landing throughout 2026. Let us know you are interested and we&apos;ll keep you in the loop.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="cta" className="px-8">
                  <Link to="/company/contact">Register your interest</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <Link to="/offerings/filigran-academy">Visit Filigran Academy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan/80 mb-4 flex items-center justify-center gap-2">
                <CalendarClock className="h-4 w-4" />
                2026 roadmap
              </p>
              <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Three certification paths, one ecosystem standard</h2>
              <p className="text-lg text-foreground/70">
                Each track blends scenario-based assessments with collaborative reviews so that every credential reflects how teams
                actually operationalize the XTM Suite.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certificationTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <Card key={track.title} className="p-6 bg-card/80 border-white/10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-cyan" />
                      </div>
                      <h3 className="text-xl font-semibold">{track.title}</h3>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">{track.description}</p>
                    <div className="space-y-3 text-sm text-foreground/70 mt-auto">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-cyan" />
                        <span>{track.focus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarClock className="h-4 w-4 text-cyan" />
                        <span>{track.timeline}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-8 bg-gradient-to-br from-cyan/10 via-transparent to-blue-500/10 border-cyan/20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-cyan mb-4">
                  <ShieldCheck className="h-4 w-4" />
                  Learn today
                </div>
                <h3 className="text-2xl font-semibold mb-4">Filigran Academy is ready now</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  While we finalize certification exams, Filigran Academy already offers on-demand and instructor-led training across
                  OpenCTI, OpenAEV and OpenGRC. Use it to prepare your teams and capture early feedback for the certification team.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="cta">
                    <Link to="/offerings/filigran-academy">Explore the academy</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href="https://academy.filigran.io" target="_blank" rel="noopener noreferrer">
                      Browse course catalog
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card/80 border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-xs font-semibold text-cyan mb-4">
                  <Handshake className="h-4 w-4" />
                  Get involved
                </div>
                <h3 className="text-2xl font-semibold mb-4">Raise your hand for early access</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We are assembling design partners across enterprises, MSSPs and technology alliances. Share the roles you want to
                  certify and we will invite you to planning workshops as soon as we open the 2026 cohorts.
                </p>
                <Button asChild variant="outline">
                  <Link to="/company/contact">Talk to the certification team</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <GetStartedSection />
      </main>

      <Footer />
    </div>
  );
};

export default CertificationPrograms;

