import { Card } from '@/components/ui/card';
import { Users, Building2, Plug } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { value: '6,000+', label: 'Active organizations', icon: Building2 },
    { value: '6,000+', label: 'Community Members', icon: Users },
    { value: '300+', label: 'Connectors & Services', icon: Plug },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Figures</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="p-10 text-center card-glass hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Icon className="w-8 h-8 text-cyan" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
                  {stat.value}
                </div>
                <p className="text-lg text-foreground/70">
                  {stat.label}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
