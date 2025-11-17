import type { ComponentType, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LinkedinIcon, TwitterIcon } from '@/components/icons/BrandIcons';

import samuelImg from '@/assets/leadership/samuel-hassine.webp';
import julienImg from '@/assets/leadership/julien-richard.webp';
import sebBoitelleImg from '@/assets/leadership/sebastien-boitelle.webp';
import saharImg from '@/assets/leadership/sahar-sabouni.webp';
import adrienImg from '@/assets/leadership/adrien-servel.webp';
import camilleImg from '@/assets/leadership/camille-ciais.webp';
import jeanPhilippeImg from '@/assets/leadership/jean-philippe-salles.webp';
import sebBocahuImg from '@/assets/leadership/sebastien-bocahu.webp';
import murielImg from '@/assets/leadership/muriel-avignon.webp';
import constantImg from '@/assets/leadership/constant-bridon.webp';
import lucasImg from '@/assets/leadership/lucas-guiglionia.webp';
import nicolasImg from '@/assets/leadership/nicolas-quintin.webp';
import ophelieImg from '@/assets/leadership/ophelie-morel.webp';
import crissyImg from '@/assets/leadership/crissy-costa-behrens.webp';
import andreiImg from '@/assets/leadership/andrei-brasoveanu.webp';
import mattiasImg from '@/assets/leadership/mattias-ljungman.webp';
import ralucaImg from '@/assets/leadership/raluca-ragab.webp';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Samuel Hassine',
    role: 'CEO and Co-Founder',
    image: samuelImg,
    linkedin: 'https://www.linkedin.com/in/samuelhassine/',
    twitter: 'https://twitter.com/SamuelHassine'
  },
  {
    name: 'Julien Richard',
    role: 'CTO and Co-Founder',
    image: julienImg,
    linkedin: 'https://www.linkedin.com/in/richard-julien/',
    twitter: 'https://twitter.com/richardjulien'
  },
  {
    name: 'Sébastien Boitelle',
    role: 'Chief Revenue Officer',
    image: sebBoitelleImg,
    linkedin: 'https://www.linkedin.com/in/sebastien-boitelle-40351/'
  },
  {
    name: 'Sahar Sabouni',
    role: 'Chief People Officer',
    image: saharImg,
    linkedin: 'https://www.linkedin.com/in/sahar-sabouni/'
  },
  {
    name: 'Adrien Servel',
    role: 'VP of Software Engineering',
    image: adrienImg,
    linkedin: 'https://www.linkedin.com/in/adrien-s-98959844/'
  },
  {
    name: 'Camille Ciais',
    role: 'VP of Marketing',
    image: camilleImg,
    linkedin: 'https://www.linkedin.com/in/camille-ciais/'
  },
  {
    name: 'Jean-Philippe Salles',
    role: 'VP of Product Management',
    image: jeanPhilippeImg,
    linkedin: 'https://www.linkedin.com/in/jean-philippe-salles-68a83845/',
    twitter: 'https://twitter.com/JPS_CTI'
  },
  {
    name: 'Sebastien Bocahu',
    role: 'VP of Platform Engineering',
    image: sebBocahuImg,
    linkedin: 'https://www.linkedin.com/in/sebbocahu/'
  },
  {
    name: 'Muriel Avignon',
    role: 'VP of Finance',
    image: murielImg,
    linkedin: 'https://www.linkedin.com/in/muriel-avignon-53158a32/'
  },
  {
    name: 'Constant Bridon',
    role: 'VP of Data Engineering',
    image: constantImg,
    linkedin: 'https://www.linkedin.com/in/constant-bridon/'
  },
  {
    name: 'Lucas Guiglionia',
    role: 'VP of Customer Success Management – EMEA',
    image: lucasImg,
    linkedin: 'https://www.linkedin.com/in/lucas-g-4381a2198/'
  },
  {
    name: 'Nicolas Quintin',
    role: 'VP of Customer Success Management – NA & APJ',
    image: nicolasImg,
    linkedin: 'https://www.linkedin.com/in/nicolas-q-353062a7/'
  },
  {
    name: 'Ophelie Morel',
    role: 'General Counsel',
    image: ophelieImg,
    linkedin: 'https://www.linkedin.com/in/opheliemorel/'
  }
];

const boardMembers: TeamMember[] = [
  {
    name: 'Samuel Hassine',
    role: 'CEO and Co-Founder',
    image: samuelImg,
    linkedin: 'https://www.linkedin.com/in/samuelhassine/',
    twitter: 'https://twitter.com/SamuelHassine'
  },
  {
    name: 'Julien Richard',
    role: 'CTO and Co-Founder',
    image: julienImg,
    linkedin: 'https://www.linkedin.com/in/richard-julien/',
    twitter: 'https://twitter.com/richardjulien'
  },
  {
    name: 'Crissy Costa Behrens',
    role: 'Principal, Insight Partners',
    image: crissyImg,
    linkedin: 'https://www.linkedin.com/in/costacristina/'
  },
  {
    name: 'Andrei Brasoveanu',
    role: 'Partner, Accel',
    image: andreiImg,
    linkedin: 'https://www.linkedin.com/in/andreibrasoveanu/'
  },
  {
    name: 'Mattias Ljungman',
    role: 'Founder, Moonfire',
    image: mattiasImg,
    linkedin: 'https://www.linkedin.com/in/mattiasljungman/'
  },
  {
    name: 'Raluca Ragab',
    role: 'Partner, Eurazeo',
    image: ralucaImg,
    linkedin: 'https://www.linkedin.com/in/raluca-ragab-2550b33/'
  }
];

const SocialLink = ({
  href,
  icon: Icon,
  label
}: {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan/10 text-cyan transition hover:bg-cyan/20"
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
  </a>
);

const PersonCard = ({ member, className }: { member: TeamMember; className?: string }) => {
  const hasSocialLink = [member.linkedin, member.twitter].some(Boolean);

  return (
    <Card
      className={cn(
        'group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-foreground shadow-[0_30px_60px_rgba(3,12,29,0.35)] backdrop-blur',
        className
      )}
    >
      <div className="flex w-full justify-center">
        <div className="h-40 w-40 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan/15 via-transparent to-transparent">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-lg font-semibold">{member.name}</p>
        <p className="text-sm text-foreground/70">{member.role}</p>
      </div>
      {hasSocialLink && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {member.linkedin && (
            <SocialLink href={member.linkedin} icon={LinkedinIcon} label={`LinkedIn profile of ${member.name}`} />
          )}
          {member.twitter && (
            <SocialLink href={member.twitter} icon={TwitterIcon} label={`Twitter profile of ${member.name}`} />
          )}
        </div>
      )}
    </Card>
  );
};

const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = 'center'
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) => (
  <div
    className={cn(
      'space-y-4',
      align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'
    )}
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">{eyebrow}</p>
    )}
    <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {description && <p className="text-base text-foreground/70">{description}</p>}
  </div>
);

const heroBackground = {
  backgroundColor: '#01091f',
  backgroundImage:
    'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const Leadership = () => {
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
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Leadership</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Meet our leadership team and board</h1>
              <p className="text-lg text-white/80 md:text-xl">
                The Filigran leadership team combines deep experience in cybersecurity, product, engineering, revenue, and
                operations to guide our eXtended Threat Management vision worldwide.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="secondary" size="lg" className="rounded-full bg-white/10 px-8 text-base text-white">
                  <Link to="/company/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionIntro title="Leadership team" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {leadershipTeam.map((member) => (
                <PersonCard key={member.name} member={member} className="h-full" />
              ))}
            </div>
          </div>
        </section>

        <section id="board" className="border-t border-white/5 bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionIntro title="Board of directors" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member) => (
                <PersonCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
