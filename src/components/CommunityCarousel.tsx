import { Button } from "@/components/ui/button";
import { SlackIcon } from "@/components/icons/BrandIcons";
import { Share2, Crosshair, ShieldCheck } from "lucide-react";
import slack14 from "@/assets/community/slack-14.jpg";
import slack12 from "@/assets/community/slack-12.jpg";
import slack11 from "@/assets/community/slack-11.jpg";
import slack10 from "@/assets/community/slack-10.jpg";
import slack9 from "@/assets/community/slack-9.jpg";
import slack8 from "@/assets/community/slack-8.jpg";
import slack7 from "@/assets/community/slack-7.jpg";

const marqueeImages = [slack14, slack12, slack11, slack10, slack9, slack8, slack7];

export const CommunityCarousel = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm uppercase tracking-[0.2em] text-foreground/70">
              <SlackIcon className="w-4 h-4 text-cyan" />
              6,000+ MEMBERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Join Filigran eXtended Threat Management community
            </h2>
            <p className="text-xl text-foreground/70">
              Connect with practitioners worldwide, exchange threat intelligence tips, and get direct access to the teams building XTM Suite.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-card/40 p-5">
                <p className="text-sm uppercase tracking-wide text-foreground/60">Active practitioners</p>
                <p className="text-3xl font-bold mt-1">6,000+</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-card/40 p-5">
                <p className="text-sm uppercase tracking-wide text-foreground/60">Daily exchanges</p>
                <p className="text-3xl font-bold mt-1">24/7</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-cyan text-accent-foreground hover:bg-cyan-glow transition-all duration-300 shadow-glow"
            >
              <a href="https://community.filigran.io/" target="_blank" rel="noopener noreferrer">
                Join Slack
              </a>
            </Button>
          </div>

          <div className="space-y-6 animate-fade-in-slow">
            <div className="relative rounded-[32px] border border-border/30 bg-gradient-to-br from-[#050b1d] via-[#090f26] to-[#040812] overflow-hidden shadow-[0_35px_120px_rgba(6,11,25,0.55)] p-10 text-white">
              <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(22,235,249,0.4), transparent 55%), radial-gradient(circle at 80% 0%, rgba(138,99,255,0.35), transparent 45%)" }} />
              <div className="relative flex flex-col gap-8 lg:flex-row">
                <div className="space-y-4 max-w-lg">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold tracking-[0.3em]">
                    <SlackIcon className="w-4 h-4 text-cyan" />
                    COMMUNITY MOMENT
                  </div>
                  <h3 className="text-3xl font-semibold">Intelligence sharing, structured</h3>
                  <p className="text-white/70 text-lg">
                    Practitioners co-create threat intel briefs, attack scenario kits, and GRC playbooks so every team can respond faster. Here’s a snapshot of the most active streams this week.
                  </p>
                  <div className="grid gap-4">
                    {[
                      { label: "Threat intel briefs", value: "480+ / month" },
                      { label: "Attack scenario kits", value: "120 live projects" },
                      { label: "Collaborative playbooks", value: "300+ peer reviews" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</p>
                        <p className="text-2xl font-semibold mt-1">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Share2,
                      title: "Intel roundtable",
                      description: "Teams drop finished CVE write-ups and MISP bundles for others to remix.",
                      tag: "Threat intel",
                    },
                    {
                      icon: Crosshair,
                      title: "Attack scenario lab",
                      description: "Red, blue and purple teams co-build prioritized OpenAEV exercises.",
                      tag: "Attack scenarios",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Trust & validation",
                      description: "GRC leaders publish board-ready templates with metrics everyone can reuse.",
                      tag: "Risk & GRC",
                    },
                    {
                      icon: SlackIcon,
                      title: "Connector hangout",
                      description: "Engineers ship integrations + agentless automations, reviewed in-channel.",
                      tag: "Automation",
                    },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-cyan" />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">{card.tag}</p>
                            <p className="text-lg font-semibold">{card.title}</p>
                          </div>
                        </div>
                        <p className="text-sm text-white/70 flex-1">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/40">
              <div className="flex gap-6 p-6 marquee-track">
                {[...marqueeImages, ...marqueeImages].map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative w-44 h-44 rounded-2xl overflow-hidden border border-border/40 bg-card/60"
                  >
                    <img
                      src={image}
                      alt="Community moment"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
