import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Video, Code, Users, FileText, MessageSquare } from 'lucide-react';
import { eventsCatalog } from '@/data/events';

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references for all Filigran platforms.',
      link: 'https://docs.opencti.io/latest/',
      color: 'cyan'
    },
    {
      icon: Video,
      title: 'Content Library',
      description: 'Step-by-step tutorials, webinars and downloadable resources.',
      link: '/content-library',
      color: 'cyan'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with code examples and SDKs.',
      link: 'https://docs.opencti.io/latest/developer/api/',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users, share knowledge, and get help.',
      link: '/community',
      color: 'cyan'
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world success stories from organizations using Filigran.',
      link: '/customers',
      color: 'cyan'
    },
    {
      icon: MessageSquare,
      title: 'Support',
      description: '24/7 technical support for enterprise customers.',
      link: 'mailto:support@filigran.io',
      color: 'cyan'
    }
  ];

  const upcomingEvents = eventsCatalog.filter((event) => !event.onDemand).slice(0, 2);
  const onDemandSpotlight =
    eventsCatalog.find((event) => event.onDemand && event.featured) ??
    eventsCatalog.find((event) => event.onDemand);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-cyan">Resources</span> & Support
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Everything you need to succeed with Filigran's XTM platform - documentation, 
              tutorials, community support, and more.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a 
                  key={index} 
                  href={resource.link}
                  target={resource.link.startsWith('http') ? '_blank' : resource.link.startsWith('mailto:') ? '_self' : undefined}
                  rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Card className="p-8 h-full card-glass hover-lift group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6 group-hover:bg-cyan/20 transition-colors">
                      <Icon className="w-8 h-8 text-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {resource.description}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Content Library */}
          <section id="content-library" className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Guides</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <GuideLink title="Getting Started with OpenCTI" time="10 min read" />
              <GuideLink title="Setting Up Threat Intelligence Feeds" time="15 min read" />
              <GuideLink title="Configuring OpenAEV for Your Environment" time="20 min read" />
              <GuideLink title="Best Practices for Threat Management" time="12 min read" />
              <GuideLink title="Integrating with Existing Security Tools" time="18 min read" />
              <GuideLink title="Advanced Analytics and Reporting" time="25 min read" />
            </div>
          </section>

          {/* Events & Webinars */}
          <section id="events" className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan mb-3">Live &amp; On-demand</p>
              <h2 className="text-4xl font-bold mb-4">Events &amp; Webinars</h2>
              <p className="text-foreground/70">
                See what events Filigran is participating in or hosting near you, and access our past webinars on demand.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
              <div className="grid gap-6 sm:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <Card key={event.title} className="p-6 card-glass flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan">{event.category}</p>
                    <h3 className="text-2xl font-semibold leading-snug">{event.title}</h3>
                    <p className="text-sm text-foreground/60">{event.location}</p>
                    <p className="text-sm text-foreground/60">{event.date}</p>
                    <a
                      href={event.ctaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan text-sm font-semibold hover:text-cyan-glow"
                    >
                      {event.ctaLabel} →
                    </a>
                  </Card>
                ))}
              </div>

              {onDemandSpotlight && (
                <Card className="p-8 card-glass flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan mb-3">On-demand</p>
                    <h3 className="text-3xl font-semibold leading-snug mb-3">{onDemandSpotlight.title}</h3>
                    <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">{onDemandSpotlight.location}</p>
                    <p className="text-base text-foreground/70">
                      {onDemandSpotlight.statusLabel ?? onDemandSpotlight.date}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href={onDemandSpotlight.ctaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-background hover:bg-cyan-glow transition-colors"
                    >
                      {onDemandSpotlight.ctaLabel} →
                    </a>
                    <Link
                      to="/events-webinars"
                      className="inline-flex items-center justify-center rounded-lg border border-cyan px-6 py-3 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
                    >
                      View the full calendar
                    </Link>
                  </div>
                </Card>
              )}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/events-webinars"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan-glow"
              >
                Explore all events &amp; webinars →
              </Link>
            </div>
          </section>

          {/* CTA */}
          <Card className="p-16 text-center card-glass">
            <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you succeed with your security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-demo"
                className="inline-block px-8 py-4 bg-cyan hover:bg-cyan-glow text-background font-semibold rounded-lg transition-all duration-300 hover-lift"
              >
                Book a Demo
              </a>
              <a 
                href="#"
                className="inline-block px-8 py-4 border-2 border-cyan text-cyan hover:bg-cyan/10 font-semibold rounded-lg transition-all duration-300 hover-lift"
              >
                Contact Support
              </a>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const GuideLink = ({ title, time }: { title: string; time: string }) => (
  <a 
    href="#" 
    className="flex items-center justify-between p-6 rounded-xl border border-border/50 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300 group"
  >
    <div>
      <h4 className="font-semibold mb-1 group-hover:text-cyan transition-colors">{title}</h4>
      <p className="text-sm text-foreground/60">{time}</p>
    </div>
    <BookOpen className="w-5 h-5 text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default Resources;
