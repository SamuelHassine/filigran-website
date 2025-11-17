import { Shield, Star } from 'lucide-react';

export const CertificationBadges = () => {
  const badges = [
    {
      icon: Shield,
      label: 'SOC 2 Type II',
      sublabel: 'Certified',
      link: 'https://app.drata.com/trust/ba12f398-34a3-4473-a3a1-482c1591b77b',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      label: 'ISO 27001',
      sublabel: 'Certified',
      link: 'https://app.drata.com/trust/ba12f398-34a3-4473-a3a1-482c1591b77b',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Star,
      label: 'G2',
      sublabel: '4.8/5 Rating',
      link: 'https://www.g2.com/products/opencti-by-filigran/reviews',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="flex items-center gap-3">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <a
            key={index}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative flex w-[110px] flex-col items-center gap-1 rounded-xl border border-border/50 bg-card/30 p-3 transition-all duration-300 hover:border-cyan/50 hover-lift backdrop-blur-sm">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${badge.gradient} p-1.5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-foreground">{badge.label}</div>
                <div className="text-[10px] text-foreground/60">{badge.sublabel}</div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
