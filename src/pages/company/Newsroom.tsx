import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HubspotForm } from '@/components/HubspotForm';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import brandBoilerplate from '@/assets/newsroom/brand-boilerplate.svg';
import brandLogotype from '@/assets/newsroom/brand-logotype.svg';
import brandColors from '@/assets/newsroom/brand-colors.svg';
import brandTypography from '@/assets/newsroom/brand-typography.svg';

import pressOpenAEV from '@/assets/newsroom/pr-openaev.webp';
import pressVmray from '@/assets/newsroom/pr-vmray.webp';
import pressSeriesC from '@/assets/newsroom/pr-series-c.webp';
import pressGlimps from '@/assets/newsroom/pr-glimps.webp';

import coverageChallenges from '@/assets/newsroom/coverage-challenges.svg';
import coverageSifted from '@/assets/newsroom/coverage-sifted.png';
import coverageForbes from '@/assets/newsroom/coverage-forbes.png';
import coverageFrance24 from '@/assets/newsroom/coverage-france24.png';
import coverageMaddyness from '@/assets/newsroom/coverage-maddyness.png';
import coverageSiliconAngle from '@/assets/newsroom/coverage-siliconangle.png';
import coverageTechCrunch from '@/assets/newsroom/coverage-techcrunch.webp';
import coverageLeFigaro from '@/assets/newsroom/coverage-lefigaro.webp';
import coverageBusinessInsider from '@/assets/newsroom/coverage-businessinsider.webp';
import coverageLeMondeInformatique from '@/assets/newsroom/coverage-lemondeinformatique.webp';

const heroBackgroundStyle = {
  backgroundColor: '#01091f',
  backgroundImage:
    'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const brandAssets = [
  {
    title: 'Boilerplate',
    description: 'Company description and key information',
    href: 'https://zeroheight.com/020822383/p/29743a-boilerplate',
    image: brandBoilerplate
  },
  {
    title: 'Logotype',
    description: 'Official logos and usage guidelines',
    href: 'https://zeroheight.com/020822383/p/172a6b-filigran-logo',
    image: brandLogotype
  },
  {
    title: 'Colors',
    description: 'Brand color palette and specifications',
    href: 'https://zeroheight.com/020822383/p/738068-colors',
    image: brandColors
  },
  {
    title: 'Typography',
    description: 'Font families and typographic system',
    href: 'https://zeroheight.com/020822383/p/60f264-typography',
    image: brandTypography
  }
];

const pressReleases = [
  {
    title:
      'Filigran Redefines Proactive Security: OpenBAS Rebrands to OpenAEV with an AI-Powered Enterprise Edition',
    description:
      'Filigran is evolving the OpenBAS solution into OpenAEV (Adversarial Exposure Validation), moving beyond control validation to full threat exposure management while introducing OpenAEV Enterprise Edition with automation and AI capabilities.',
    link:
      '/press-releases/filigran-redefines-proactive-security-openbas-rebrands-to-openaev-with-an-ai-powered-enterprise-edition',
    image: pressOpenAEV,
    imageAlt: 'OpenAEV announcement visual'
  },
  {
    title: 'Filigran and VMRay Join Forces to Accelerate Threat Detection and Response',
    description:
      'Filigran and VMRay announced a strategic partnership that brings VMRay’s UniqueSignal feed, renowned for its context and reliability, directly into OpenCTI to accelerate modern threat detection.',
    link: '/press-releases/filigran-and-vmray-join-forces-to-accelerate-threat-detection-and-response',
    image: pressVmray,
    imageAlt: 'Filigran and VMRay partnership visual'
  },
  {
    title: 'Filigran announces a new $58 million funding round to accelerate its growth and international expansion',
    description:
      'Filigran completed a Series C funding round worth $58 million, led by Eurazeo’s Growth team with support from Deutsche Telekom (T.Capital) and long-standing investors Accel and Insight Partners.',
    link:
      '/press-releases/filigran-announces-a-new-58-million-funding-round-to-accelerate-its-growth-and-international-expansion',
    image: pressSeriesC,
    imageAlt: 'Filigran Series C announcement visual'
  },
  {
    title: 'Filigran and GLIMPS join forces to industrialize malware analysis in Threat Intelligence flows',
    description:
      'Filigran and GLIMPS are integrating GLIMPS’ AI-powered malware analysis directly into OpenCTI, helping intelligence teams industrialize their workflows end-to-end.',
    link: '/press-releases/filigran-and-glimps-join-forces-to-industrialize-malware-analysis-in-threat-intelligence-flows',
    image: pressGlimps,
    imageAlt: 'Filigran and GLIMPS partnership visual'
  }
];

const pressCoverageStories = [
  {
    publication: 'Challenges',
    stage: 'Series C',
    title: "Pépite du renseignement cyber français, Filigran lève 50 millions d'euros",
    image: coverageChallenges,
    imageAlt: 'Challenges logo',
    href: 'https://www.challenges.fr/la-verticale-cyber/pepite-du-renseignement-cyber-francais-filigran-leve-50-millions-deuros_626474'
  },
  {
    publication: 'Sifted',
    stage: 'Series C',
    title: 'Cybersecurity startup Filigran raises $58m to accelerate international expansion',
    image: coverageSifted,
    imageAlt: 'Sifted logo',
    href: 'https://sifted.eu/articles/cybersecurity-startup-filigran-raises-58m'
  },
  {
    publication: 'Forbes France',
    stage: 'Series C',
    title: 'À SUIVRE | Filigran veut accélérer la cybersécurité open source à l’échelle mondiale',
    image: coverageForbes,
    imageAlt: 'Forbes France logo',
    href: 'https://www.forbes.fr/entrepreneurs/a-suivre-filigran-veut-accelerer-la-cybersecurite-open-source-a-lechelle-mondiale/'
  },
  {
    publication: 'France 24',
    stage: 'Series B',
    title: 'Des agences de renseignement séduites par Filigran, un logiciel français contre les menaces',
    image: coverageFrance24,
    imageAlt: 'France 24 logo',
    href: 'https://www.france24.com/fr/%C3%A9missions/l-entretien-de-l-intelligence-%C3%A9conomique/20241029-des-agences-de-renseignement-s%C3%A9duites-par-filigran-un-logiciel-fran%C3%A7ais-contre-les-menaces'
  },
  {
    publication: 'Maddyness',
    stage: 'Series B',
    title: 'Cybersécurité : Filigran lève 35 millions pour devenir un acteur incontournable du secteur',
    image: coverageMaddyness,
    imageAlt: 'Maddyness logo',
    href: 'https://www.maddyness.com/2024/10/28/cybersecurite-filigran-leve-35-millions-pour-devenir-un-acteur-incontournable-du-secteur/'
  },
  {
    publication: 'SiliconANGLE',
    stage: 'Series B',
    title: 'Filigran raises $35M to help companies simulate and respond to cyberattacks',
    image: coverageSiliconAngle,
    imageAlt: 'SiliconANGLE logo',
    href: 'https://siliconangle.com/2024/10/28/filigran-raises-35m-help-companies-simulate-respond-cyberattacks/'
  },
  {
    publication: 'Tech Crunch',
    stage: 'Series A',
    title: 'OpenCTI maker Filigran raises $16M for its cybersecurity threat management suite.',
    image: coverageTechCrunch,
    imageAlt: 'TechCrunch logo',
    href: 'https://techcrunch.com/2024/02/28/opencti-maker-filigran-raises-16-million-for-its-cybersecurity-threat-management-suite/?guccounter=1'
  },
  {
    publication: 'Le Figaro',
    stage: 'Series A',
    title: 'Filigran, la pépite cyber française qui a conquis le FBI.',
    image: coverageLeFigaro,
    imageAlt: 'Le Figaro logo',
    href: 'https://www.lefigaro.fr/secteur/high-tech/filigran-la-pepite-cyber-francaise-qui-a-conquis-le-fbi-20240229'
  },
  {
    publication: 'Business Insider',
    stage: 'Series A',
    title:
      'Filigran, a French cybersecurity startup used by the FBI, just raised $16.2 million using this 12-slide pitch deck.',
    image: coverageBusinessInsider,
    imageAlt: 'Business Insider logo',
    href: 'https://www.businessinsider.com/filigran-accel-backed-cybersecurity-startup-raises-16-2m-vc-funding-2024-2?r=US&IR=T'
  },
  {
    publication: 'Le Monde Informatique',
    stage: 'Seed funding',
    title: 'Des start-ups françaises en cybersécurité très dynamiques en 2023.',
    image: coverageLeMondeInformatique,
    imageAlt: 'Le Monde Informatique logo',
    href: 'https://www.lemondeinformatique.fr/actualites/lire-des-start-ups-francaises-en-cybersecurite-tres-dynamiques-en-2023-90740.html'
  }
];

const pressInquiries = {
  email: 'filigran@rumeurpublique.fr',
  description:
    'If you have any questions about press inquiries or need further information, please reach out to filigran@rumeurpublique.fr.'
};

const Newsroom = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-24 text-white">
          <div className="absolute inset-0" style={heroBackgroundStyle} />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan/30 blur-[160px]" />
            <div className="absolute bottom-0 right-1/5 h-96 w-96 rounded-full bg-blue-500/20 blur-[220px]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Newsroom</h1>
              <p className="text-lg text-white/80 md:text-xl">
                Find assets, media kits, our latest news and press coverage.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {brandAssets.map((asset) => (
                <a
                  key={asset.title}
                  href={asset.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <Card className="flex h-full flex-col justify-between overflow-hidden border-white/10 bg-white/5 p-6 text-white shadow-[0_30px_70px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/40 group-hover:shadow-cyan/20">
                    <div className="flex h-28 items-center justify-center">
                      <img src={asset.image} alt={`${asset.title} visual`} className="max-h-20 w-auto" loading="lazy" />
                    </div>
                    <div className="mt-6 flex flex-1 flex-col space-y-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Brand asset</p>
                      <h3 className="text-xl font-semibold">{asset.title}</h3>
                      <p className="text-sm text-white/70">{asset.description}</p>
                      <div className="mt-auto inline-flex items-center text-sm font-semibold text-cyan">
                        Access asset
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">Updates</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Latest press releases</h2>
              <p className="mt-4 text-base text-foreground/70">
                Stay informed about product milestones, partnerships, and funding announcements from Filigran.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {pressReleases.map((release) => (
                <Link key={release.title} to={release.link} className="group block h-full">
                  <Card className="flex h-full flex-col overflow-hidden border-border/50 bg-card/80 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/40">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={release.image}
                        alt={release.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">Press release</p>
                      <h3 className="text-2xl font-semibold text-foreground">{release.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/70">{release.description}</p>
                      <div className="mt-4 inline-flex items-center text-sm font-semibold text-cyan">
                        Read more
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="border-cyan text-cyan hover:bg-cyan hover:text-background">
                <Link to="/news-archive">View all news</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">Worldwide coverage</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Filigran in the news</h2>
              <p className="mt-4 text-base text-foreground/70">
                Leading business and technology publications regularly feature Filigran for its role in threat intelligence
                and proactive security.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pressCoverageStories.map((story) => (
                <a
                  key={story.publication}
                  href={story.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full"
                >
                  <Card className="flex h-full flex-col justify-between border-white/10 bg-[#040c1f] p-6 text-white shadow-[0_35px_80px_rgba(2,6,23,0.65)] transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/40">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70">
                        {story.stage}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/60 transition-colors transition-transform group-hover:translate-x-0.5 group-hover:text-cyan" />
                    </div>
                    <div className="mt-6 flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_25px_45px_rgba(3,7,18,0.2)]">
                      <img src={story.image} alt={story.imageAlt} className="max-h-12 w-auto object-contain" loading="lazy" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-white">{story.publication}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">{story.title}</p>
                    </div>
                  </Card>
                </a>
              ))}

              <Card className="flex flex-col justify-between border-cyan/30 bg-gradient-to-br from-cyan/10 to-blue-600/10 p-6 text-foreground shadow-lg shadow-cyan/10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">Press inquiries</p>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">Need to connect with us?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{pressInquiries.description}</p>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-cyan text-cyan hover:bg-cyan hover:text-background">
                    <a href={`mailto:${pressInquiries.email}`}>Email the press team</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32 px-4">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#030c21',
              backgroundImage:
                'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)'
            }}
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan/30 blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-glow/30 blur-[120px] animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[150px] animate-glow" />
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-10">
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

          <div className="container relative z-10 mx-auto">
            <div className="mx-auto max-w-4xl text-center text-white space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Newsletter</p>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Stay up to date <span className="text-gradient-cyan">with Filigran</span>
              </h2>
              <p className="text-lg text-white/80 md:text-xl">
                Get bi-monthly updates about product launches, upcoming events, latest content, and more from the Filigran team.
              </p>
              <div className="mx-auto mt-10 max-w-3xl text-left">
                <HubspotForm
                  portalId="26791207"
                  formId="ebb3382e-aa27-4002-a336-5e966866e407"
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Newsroom;
