import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, BookOpen, Building2, MapPin, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { customerStories } from '@/data/customerStories';

const toplineStats = [
  { value: '6,000+', label: 'Active organizations' },
  { value: '150+', label: 'Countries served' },
  { value: '98%', label: 'Customer satisfaction' }
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0 pb-20">
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: '#01091f',
                backgroundImage:
                  'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
              <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center text-white space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Customer stories</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Real teams, real{' '}
                <span className="bg-gradient-to-r from-cyan via-blue-400 to-blue-200 bg-clip-text text-transparent">
                  results
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-white/70">
                Dive into concrete examples of how intelligence-driven security programs are launched, scaled, and measured
                with Filigran's XTM platform.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {toplineStats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="border-white/10 bg-white/5 p-8 text-center text-white shadow-lg shadow-black/30 backdrop-blur"
                >
                  <div className="mb-3 flex items-center justify-center text-cyan">
                    {index === 0 && <Building2 className="h-6 w-6" />}
                    {index === 1 && <Shield className="h-6 w-6" />}
                    {index === 2 && <TrendingUp className="h-6 w-6" />}
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 mt-16">

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">Library</p>
              <h2 className="text-3xl font-bold text-foreground">Explore success stories</h2>
              <p className="text-sm text-foreground/60">
                From luxury maisons to government agencies, discover how teams operationalize intelligence across industries with Filigran.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {customerStories.map((story) => (
                <Link key={story.slug} to={story.path} className="group block h-full">
                  <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-card/70 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/40 group-hover:shadow-xl group-hover:shadow-cyan/10">
                    <div className="relative">
                      <img
                        src={story.cardImage ?? story.heroImage}
                        alt={story.heroImageAlt}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      {story.logo && (
                        <div className="absolute bottom-4 left-4 rounded-xl bg-background/80 px-3 py-2 shadow-md backdrop-blur">
                          <img src={story.logo} alt={`${story.client} logo`} className="h-8 w-auto" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                        <BookOpen className="h-4 w-4 text-cyan" />
                        {story.industry}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{story.client}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{story.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-foreground/60">
                        {story.location && (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-cyan" />
                            {story.location}
                          </span>
                        )}
                        {story.size && (
                          <span className="inline-flex items-center gap-1">
                            <Users className="h-4 w-4 text-cyan" />
                            {story.size}
                          </span>
                        )}
                      </div>
                      {story.useCases && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {story.useCases.slice(0, 3).map((useCase) => (
                            <Badge
                              key={`${story.slug}-${useCase}`}
                              variant="outline"
                              className="border-cyan/30 text-foreground/70"
                            >
                              {useCase}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="mt-6 inline-flex items-center text-sm font-semibold text-cyan transition-colors group-hover:text-cyan/80">
                        Read the story
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <section className="relative overflow-hidden py-32 px-4 mt-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#030c21',
              backgroundImage:
                'radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)',
            }}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/30 rounded-full blur-[120px] animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle, rgba(15,188,255,0.2) 1px, transparent 1px),
                  linear-gradient(60deg, rgba(15,188,255,0.12) 1px, transparent 1px),
                  linear-gradient(120deg, rgba(15,188,255,0.12) 1px, transparent 1px)
                `,
                backgroundSize: '70px 70px, 70px 70px, 70px 70px',
              }}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
              <h2 className="text-5xl md:text-6xl font-bold">
                Ready to become the next story?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mx-auto max-w-3xl">
                Whether you need to operationalize threat intelligence, accelerate breach simulations, or align risk with action,
                our team can share the XTM playbooks behind these customers' success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan/30 transition hover:bg-white/20"
                >
                  Talk with our team
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan px-8 py-3 text-sm font-semibold text-background shadow-lg shadow-cyan/30 transition hover:bg-cyan/90"
                >
                  Book a demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Customers;




