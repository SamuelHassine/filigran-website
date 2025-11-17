import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GetStartedSection } from '@/components/GetStartedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import eurazeoImage from '@/assets/investors/eurazeo.png';
import insightPartnersImage from '@/assets/investors/insight-partners.png';
import accelImage from '@/assets/investors/accel.png';
import tcapitalImage from '@/assets/investors/tcapital.png';

interface InvestorProfile {
  name: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  learnMoreUrl: string;
  imagePlacement?: 'left' | 'right';
}

const heroBackground = {
  backgroundColor: '#01091f',
  backgroundImage:
    'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const investors: InvestorProfile[] = [
  {
    name: 'Eurazeo',
    paragraphs: [
      'Eurazeo is a leading European investment group with \u20AC36.8 billion in diversified assets under management, including \u20AC27.5 billion on behalf of institutional and retail clients through its private equity, private debt, real estate and infrastructure strategies. The group supports more than 600 mid-market companies, leveraging the commitment of its 400-strong workforce, its in-depth sector expertise, its privileged access to global markets through 13 offices across Europe, Asia and the United States, and its responsible approach to value creation based on growth. The company\'s institutional and family shareholding structure, and its solid financial structure, ensure its long-term viability.',
      'Eurazeo has offices in Paris, New York, London, Frankfurt, Berlin, Milan, Madrid, Luxembourg, Shanghai, Seoul, Singapore, Tokyo and S\u00E3o Paulo.',
      'Eurazeo is listed on Euronext Paris.'
    ],
    image: eurazeoImage,
    imageAlt: 'Eurazeo investor visual',
    learnMoreUrl: 'https://www.eurazeo.com/en',
    imagePlacement: 'right'
  },
  {
    name: 'Insight Partners',
    paragraphs: [
      'Insight Partners is a global software investor partnering with high-growth technology, software, and Internet startup and scale-up companies that are driving transformative change in their industries. Insight Partners has invested in more than 800 companies worldwide and has seen over 55 portfolio companies achieve an IPO.',
      'Insight\'s mission is to find, fund, and work successfully with visionary executives, providing them with tailored, hands-on software expertise along their growth journey, from their first investment to IPO.'
    ],
    image: insightPartnersImage,
    imageAlt: 'Insight Partners investor visual',
    learnMoreUrl: 'https://www.insightpartners.com/',
    imagePlacement: 'left'
  },
  {
    name: 'Accel',
    paragraphs: [
      'Accel is a global venture capital firm that is the first partner to exceptional teams everywhere, from inception through all phases of private company growth. Accel has invested in over 300 companies over the past 40+ years, including Atlassian, CrowdStrike, Slack, Spotify, Squarespace, Tenable, and UiPath.',
      'They help ambitious entrepreneurs build iconic global businesses.'
    ],
    image: accelImage,
    imageAlt: 'Accel investor visual',
    learnMoreUrl: 'https://www.accel.com/',
    imagePlacement: 'right'
  },
  {
    name: 'T.Capital',
    paragraphs: [
      'T.Capital manages \u20AC2.3 billion in assets on behalf of Deutsche Telekom across venture and growth capital. The VC team invests \u20AC1-15 million tickets in Series A to C rounds across the US, Europe, and Israel, focusing on themes such as AI, cybersecurity, connectivity or consumer.'
    ],
    image: tcapitalImage,
    imageAlt: 'T.Capital investor visual',
    learnMoreUrl: 'https://www.t.capital/',
    imagePlacement: 'left'
  }
];

const InvestorCard = ({ investor }: { investor: InvestorProfile }) => {
  const placement = investor.imagePlacement ?? 'right';
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 p-6 text-foreground shadow-[0_40px_80px_rgba(3,12,29,0.4)] backdrop-blur lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr,0.8fr]">
        <div
          className={cn(
            'order-2 flex flex-col justify-between',
            placement === 'left' ? 'lg:order-2' : 'lg:order-1'
          )}
        >
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan/70">Investor spotlight</p>
          <h3 className="text-3xl font-semibold text-foreground">{investor.name}</h3>
          <div className="space-y-4 text-base leading-relaxed text-foreground/80">
            {investor.paragraphs.map((paragraph, index) => (
              <p key={`${investor.name}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
        <Button
          asChild
          variant="outlineGlow"
          className="mt-8 w-fit rounded-full px-6 py-2 text-sm font-semibold text-cyan"
        >
          <a href={investor.learnMoreUrl} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </Button>
        </div>
        <div
          className={cn(
            'relative order-1',
            placement === 'left' ? 'lg:order-1' : 'lg:order-2'
          )}
        >
        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan/15 via-transparent to-transparent" />
        <img
          src={investor.image}
          alt={investor.imageAlt}
          loading="lazy"
          className="relative z-10 h-full w-full rounded-[28px] object-cover"
        />
        </div>
      </div>
    </Card>
  );
};

const Investors = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-24 text-white">
          <div className="absolute inset-0" style={heroBackground} />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-16 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Investors</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Our investors</h1>
              <p className="text-lg text-white/80 md:text-xl">
                At Filigran, our investors are closely aligned with our strategy, our ambitions and our long-term
                growth plans.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="secondary" size="lg" className="rounded-full bg-white/10 px-8 text-base">
                  <Link to="/company/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                We are backed by top-tier investors
              </h2>
              <p className="mt-4 text-base text-foreground/70 md:text-lg">
                Insight Partners led our $35M Series B funding with the participation of our historical investors Accel
                and Moonfire Ventures.
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {investors.map((investor) => (
                <InvestorCard key={investor.name} investor={investor} />
              ))}
            </div>
          </div>
        </section>

        <GetStartedSection />
      </main>

      <Footer />
    </div>
  );
};

export default Investors;
