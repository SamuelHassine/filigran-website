import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import openctiLogo from '@/assets/company/opencti-wordmark.svg';
import openbasLogo from '@/assets/company/openbas-logo.svg';
import frenchTechBadge from '@/assets/company/french-tech-next40.webp';
import heroTeam from '@/assets/company/our-story/hero-team.png';
import gallery01 from '@/assets/company/our-story/gallery-01.jpg';
import gallery02 from '@/assets/company/our-story/gallery-02.jpg';
import gallery03 from '@/assets/company/our-story/gallery-03.jpg';
import gallery04 from '@/assets/company/our-story/gallery-04.jpg';
import gallery05 from '@/assets/company/our-story/gallery-05.jpg';
import gallery06 from '@/assets/company/our-story/gallery-06.jpg';
import gallery07 from '@/assets/company/our-story/gallery-07.jpg';
import gallery08 from '@/assets/company/our-story/gallery-08.jpg';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
  };
}

const timeline: TimelineItem[] = [
  {
    date: 'September 2022',
    title: 'Creation of Filigran',
    description:
      'We launched the company and welcomed our customers as well as our first employee.'
  },
  {
    date: 'March 2023',
    title: '10+ employees strong',
    description:
      'We reached 10+ employees focusing on software and platform engineering.'
  },
  {
    date: 'June 2023',
    title: '€5M Seed Series',
    description:
      'We announced our first round, raising €5 Million to speed-up our development.'
  },
  {
    date: 'August 2023',
    title: '20+ employees strong',
    description:
      'We reached 20+ employees and expand Revenue, Marketing and CSM teams.'
  },
  {
    date: 'February 2024',
    title: '€15M Series A',
    description:
      'We announced our Series A funding, set to expand to the United States and Australia.'
  },
  {
    date: 'March 2024',
    title: 'OpenCTI 6.0',
    description:
      'We announced the release of OpenCTI 6.0, a version that transforms the platform in numerous ways!'
  },
  {
    date: 'April 2024',
    title: '50+ employees strong',
    description:
      'We reached 50+ employees and expand Revenue, Product and CSM teams.'
  },
  {
    date: 'May 2024',
    title: 'OpenBAS 1.0',
    description:
      'The first iteration of our new Breach and Attack simulation platform based on a profound improvement and restructuring of our previous Exercise planning platform, OpenEx.'
  },
  {
    date: 'October 2024',
    title: '$35M Series B',
    description:
      'We raised $35M in Series B funding to drive global expansion and continued product innovation, with a focus on AI and data engineering use cases.'
  },
  {
    date: 'April 2025',
    title: '100+ employees worldwide',
    description:
      'As part of our global expansion, we now have teams in EMEA, North America, and APJ, providing support to our users across all time zones.'
  },
  {
    date: 'June 2025',
    title: 'French Tech Next40/120',
    description:
      'Filigran has been selected for the French Tech 120, a prestigious program by the French government that recognizes the top-performing and most promising scale-ups in the country.',
    image: frenchTechBadge,
    imageAlt: 'French Tech Next40/120 recognition badge',
    cta: {
      label: 'French Tech Next40/120 recognition',
      href: '/company/newsroom'
    }
  },
  {
    date: 'October 2025',
    title: '$58M Series C',
    description:
      "We raised $58M in Series C to accelerate Filigran's growth and expansion into new regions, support the development of OpenGRC, a third module for Filigran's platform, and create our AI Native platform, XTM One."
  }
];

const coreValues = [
  {
    title: 'Rooted in the open source',
    description:
      'We have been engaged in publishing open source projects under free licenses for several years. Providing the best tools to the community is part of our DNA.'
  },
  {
    title: 'Teams with high added value',
    description:
      'We have chosen to favor small teams with advanced and diversified skills to help our partners and customers integrate and operationalize our solutions as well as possible.'
  },
  {
    title: 'The product is king',
    description:
      'We focus on the quality of our products and associated source codes by taking the time to review contributions and minimize technical debt.'
  },
  {
    title: 'Open ecosystem',
    description:
      'We dedicate energy to maintaining open ecosystems supported by other organizations to ensure constructive feedback on the use and evolution of software.'
  },
  {
    title: 'Committed to general interest',
    description:
      'As our solutions are widely used by administrations, we have built partnerships to help public organizations protect themselves from potential threats and crises.'
  },
  {
    title: 'Innovation and fulfillment',
    description:
      'We want to continue to innovate and push new ideas while keeping in mind that professionalism is not incompatible with the fulfillment and fun at work of our teams.'
  }
];

const galleryMosaic = [
  {
    src: gallery01,
    alt: 'Filigran teammates networking outdoors on campus',
    className: 'md:col-span-4 md:row-span-2'
  },
  {
    src: gallery02,
    alt: 'Team members collaborating during a workshop',
    className: 'md:col-span-2 md:row-span-1'
  },
  {
    src: gallery03,
    alt: 'Engineering leadership roundtable',
    className: 'md:col-span-2 md:row-span-1'
  },
  {
    src: gallery04,
    alt: 'Strategy session with Filigran product teams',
    className: 'md:col-span-4 md:row-span-2'
  },
  {
    src: gallery05,
    alt: 'Filigran teammates collaborating in person',
    className: 'md:col-span-2 md:row-span-1'
  },
  {
    src: gallery06,
    alt: 'Open discussion during a Filigran onsite',
    className: 'md:col-span-2 md:row-span-1'
  }
];

const TimelineCard = ({ item, align }: { item: TimelineItem; align?: 'right' }) => (
  <Card
    className={`relative border border-white/10 bg-white/[0.04] p-6 lg:p-8 shadow-[0_35px_100px_rgba(3,7,25,0.55)] backdrop-blur ${
      align === 'right' ? 'text-right' : 'text-left'
    }`}
  >
    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{item.date}</div>
    <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
    <p className="mt-4 text-white/80 leading-relaxed">{item.description}</p>
    {item.cta && (
      <Link
        to={item.cta.href}
        className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan/80 ${
          align === 'right' ? 'justify-end' : ''
        }`}
      >
        {item.cta.label}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    )}
    {item.image && (
      <img
        src={item.image}
        alt={item.imageAlt}
        className={`mt-6 h-20 w-20 rounded-2xl border border-white/20 bg-white/5 p-3 ${
          align === 'right' ? 'ml-auto' : ''
        }`}
        loading="lazy"
      />
    )}
  </Card>
);

const valueRows = [
  {
    image: gallery06,
    alt: 'Filigran teammates collaborating during an onsite workshop',
    alignment: 'left' as const,
    values: [coreValues[0], coreValues[1]]
  },
  {
    image: gallery07,
    alt: 'Product strategy sessions at the Filigran campus',
    alignment: 'right' as const,
    values: [coreValues[2], coreValues[3]]
  },
  {
    image: gallery08,
    alt: 'Team members sharing insights and feedback together',
    alignment: 'left' as const,
    values: [coreValues[4], coreValues[5]]
  }
];

const suiteSolutions = [
  {
    name: 'OpenCTI',
    description:
      'Cyber Threat Intelligence platform allowing organizations to manage and operationalize their cyber threat intelligence knowledge and observables.',
    logo: openctiLogo,
    logoAlt: 'OpenCTI logo',
    href: '/platforms/opencti'
  },
  {
    name: 'OpenBAS',
    description:
      'Breach and Attack Simulation platform allowing organizations to create attack simulations, stress tests, and crisis management exercises.',
    logo: openbasLogo,
    logoAlt: 'OpenBAS logo',
    href: '/platforms/openaev'
  }
];

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <section className="relative isolate overflow-hidden py-20 lg:py-32 text-white">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#030716',
              backgroundImage:
                'linear-gradient(180deg, #030716 0%, #071232 37%, #122a69 70%, #1f86ff 100%), radial-gradient(circle at 20% 15%, rgba(15,188,255,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(118,0,255,0.4) 0%, transparent 50%)'
            }}
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-cyan/40 blur-[160px]" />
            <div className="absolute bottom-[-10%] right-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/30 blur-[220px]" />
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Company</p>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Our story</h1>
                  <p className="text-2xl lg:text-3xl font-semibold leading-tight text-white">
                    Let&apos;s build a new open approach to cybersecurity strategy and operations
                  </p>
                </div>
                <p className="text-lg lg:text-xl text-white/75 max-w-2xl">
                  Our sole objective is to provide cybersecurity and crisis management teams with the best possible
                  software fueled by actionable threat intelligence. Since September 2022, we have contributed
                  significantly to the security and the protection of thousands of organizations.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-white/10 to-white/0 blur-3xl opacity-70" />
                <div className="relative rounded-[32px] border border-white/15 bg-white/5 shadow-[0_45px_120px_rgba(8,10,35,0.65)] overflow-hidden">
                  <img
                    src={heroTeam}
                    alt="Filigran team photo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#030a18] py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-6 auto-rows-[180px] lg:auto-rows-[220px]">
              {galleryMosaic.map((image) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_65px_rgba(6,8,24,0.55)] ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-[#030815] text-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Milestones</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Filigran in a nutshell</h2>
            <p className="text-lg lg:text-xl text-white/80">
              Discover the milestones that define our journey and our dedication to growth.
            </p>
          </div>

          <div className="container mx-auto px-4 lg:px-8 mt-16">
            <div className="relative isolate rounded-[48px] bg-[#040a1d] px-4 py-10 lg:px-12 lg:py-16 shadow-[0_45px_120px_rgba(5,10,35,0.55)]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-px -translate-x-1/2 bg-gradient-to-b from-cyan via-white/20 to-blue-500" />
                <div className="absolute -top-10 left-1/4 h-64 w-64 rounded-full bg-cyan/30 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/25 blur-[180px]" />
              </div>

              <div className="relative space-y-12">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const isFirst = index === 0;
                  const isLast = index === timeline.length - 1;

                  return (
                    <div key={item.title} className="relative">
                      <div className="grid gap-8 items-stretch lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)]">
                        <div className="hidden lg:block">
                          {isLeft && <TimelineCard item={item} />}
                        </div>

                        <div className="flex flex-col items-center justify-center lg:py-6">
                          {!isFirst && (
                            <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-cyan/30 via-white/25 to-blue-500/20" />
                          )}
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan to-blue-500 shadow-[0_0_25px_rgba(15,188,255,0.6)]" />
                          {!isLast && (
                            <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-cyan/30 via-white/25 to-blue-500/20" />
                          )}
                        </div>

                        <div className="hidden lg:block">
                          {!isLeft && <TimelineCard item={item} align="right" />}
                        </div>

                        <div className="lg:hidden">
                          <TimelineCard item={item} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#030915] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Values</p>
              <h2 className="text-4xl lg:text-5xl font-bold">Our core values</h2>
              <p className="text-lg text-white/70">Explore the values that drive us at Filigran.</p>
            </div>

            <div className="mt-14 space-y-10">
              {valueRows.map((row) => (
                <div
                  key={row.values[0].title}
                  className="grid gap-6 md:grid-cols-12 items-stretch"
                >
                  <div className={`md:col-span-8 ${row.alignment === 'right' ? 'md:order-2' : ''}`}>
                    <div className="relative h-full overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.03] shadow-[0_35px_100px_rgba(4,8,25,0.55)]">
                      <img
                        src={row.image}
                        alt={row.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
                    </div>
                  </div>
                  <div
                    className={`md:col-span-4 flex flex-col gap-6 ${row.alignment === 'right' ? 'md:order-1' : ''}`}
                  >
                    {row.values.map((value) => (
                      <Card
                        key={value.title}
                        className="flex-1 border border-white/15 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(3,6,20,0.5)] backdrop-blur"
                      >
                        <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                        <p className="mt-3 text-white/75 leading-relaxed">{value.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">What we do</p>
              <h2 className="text-4xl lg:text-5xl font-bold">What we do?</h2>
              <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
                Filigran&apos;s open source &ldquo;eXtended Threat Management&rdquo; (XTM) suite helps organizations
                understand threat environments, anticipate and detect incidents, and conduct attack simulations. The
                suite currently consists of two solutions:
              </p>
              <div>
                <Button asChild variant="cta" size="lg">
                  <Link to="/company/contact">
                    Get in touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {suiteSolutions.map((solution) => (
                <Card key={solution.name} className="border border-border/60 bg-card/80 p-6 lg:p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={solution.logo} alt={solution.logoAlt} className="h-10 w-auto" loading="lazy" />
                    <div className="text-xl font-semibold">{solution.name}</div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
                  <div>
                    <Button asChild variant="outlineGlow" size="sm">
                      <Link to={solution.href}>
                        Discover
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#030c21',
              backgroundImage:
                'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)'
            }}
          />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
          </div>

          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle, rgba(15,188,255,0.2) 1px, transparent 1px),
                  linear-gradient(60deg, rgba(15,188,255,0.12) 1px, transparent 1px),
                  linear-gradient(120deg, rgba(15,188,255,0.12) 1px, transparent 1px)
                `,
                backgroundSize: '70px 70px, 70px 70px, 70px 70px'
              }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Careers</p>
              <h2 className="text-4xl md:text-5xl font-bold">Join the team</h2>
              <p className="text-lg md:text-xl text-white/80">
                We are now hiring in all departments (Tech, Product, Customer Success, Sales, Marketing, Operations).
                Our team is our biggest strength, check us out!
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="cta" className="text-lg px-8">
                  <a
                    href="https://www.welcometothejungle.com/en/companies/filigran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See open roles
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
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

export default OurStory;
