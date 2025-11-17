import { Link, useParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowUpRight, Download, MapPin, Users } from 'lucide-react';
import { customerStories, StoryBlock } from '@/data/customerStories';
import NotFound from '../NotFound';

const renderBlock = (block: StoryBlock, index: number) => {
  if (block.type === 'quote') {
    return (
      <blockquote
        key={`quote-${index}`}
        className="rounded-2xl border border-border/60 bg-card/60 p-8 text-lg font-medium leading-relaxed text-foreground/80 shadow-md shadow-cyan/5"
      >
        <p className="mb-4 text-cyan">{block.text}</p>
        <div className="text-sm text-foreground/60">
          <div className="font-semibold text-foreground">{block.author}</div>
          <div>{block.role}</div>
        </div>
      </blockquote>
    );
  }

  if (block.type === 'image') {
    return (
      <figure key={`image-${index}`} className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg shadow-cyan/5">
        <img src={block.src} alt={block.alt} className="w-full object-cover" loading="lazy" />
        {block.caption && (
          <figcaption className="px-6 py-4 text-sm text-foreground/70">{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <section key={`section-${index}`} className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan/70">{block.title}</p>
      </div>
      {block.paragraphs?.map((paragraph, idx) => (
        <p key={`section-${index}-p-${idx}`} className="text-lg leading-relaxed text-foreground/80">
          {paragraph}
        </p>
      ))}
      {block.subsections && (
        <div className="space-y-6">
          {block.subsections.map((subsection, subsectionIdx) => (
            <div key={`section-${index}-sub-${subsectionIdx}`} className="space-y-3 rounded-2xl border border-border/60 bg-card/40 p-5">
              <h4 className="text-lg font-semibold text-foreground">{subsection.title}</h4>
              {subsection.paragraphs.map((paragraph, paragraphIdx) => (
                <p key={`section-${index}-sub-${subsectionIdx}-p-${paragraphIdx}`} className="text-base leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const CustomerStoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = customerStories.find((item) => item.slug === slug);

  if (!story) {
    return <NotFound />;
  }

  const hasStoryMeta = [story.location, story.size].some(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <Link
            to="/customers"
            className="mb-10 inline-flex items-center text-sm font-semibold text-foreground/70 transition-colors hover:text-cyan"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to customers
          </Link>

          <section className="grid gap-10 lg:grid-cols-[1.6fr,1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
                {story.heroLabel}
              </div>
              <h1 className="text-4xl font-bold leading-snug text-foreground lg:text-5xl">{story.title}</h1>
              <p className="text-lg leading-relaxed text-foreground/80">{story.summary}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {story.stats.map((stat) => (
                  <Card key={stat.value} className="border-border/60 bg-card/50 p-5 shadow-md shadow-cyan/5">
                    <div className="text-2xl font-bold text-cyan">{stat.value}</div>
                    <p className="text-sm text-foreground/70">{stat.label}</p>
                  </Card>
                ))}
              </div>
              {story.useCases && (
                <div className="flex flex-wrap gap-2">
                  {story.useCases.map((useCase) => (
                    <Badge key={useCase} variant="outline" className="border-cyan/30 text-xs text-foreground/70">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl shadow-cyan/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <img src={story.heroImage} alt={story.heroImageAlt} className="h-full w-full object-cover" loading="lazy" />
              {story.logo && (
                <div className="absolute bottom-6 left-6 flex items-center rounded-2xl bg-background/80 px-4 py-2 shadow-lg backdrop-blur">
                  <img src={story.logo} alt={`${story.client} logo`} className="h-10 w-auto" />
                </div>
              )}
            </div>
          </section>

          <section className="mt-12 grid gap-10 lg:grid-cols-[1.6fr,1fr]">
            <div className="space-y-12">{story.blocks.map((block, index) => renderBlock(block, index))}</div>
            <aside className="space-y-6">
              <Card className="border-border/60 bg-card/70 p-6 shadow-lg shadow-cyan/5">
                <div className="space-y-6">
                  {story.info.map((item) => {
                    const isProductMeta = item.label.toLowerCase().includes('product');
                    return (
                      <div key={item.label} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                          {item.label}
                        </p>
                        {isProductMeta && story.products?.length ? (
                          <div className="mt-3 flex flex-wrap gap-3">
                            {story.products.map((product) => {
                              const buttonClasses =
                                'inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/5 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan/10';
                              const content = (
                                <>
                                  {product.name}
                                  <ArrowUpRight className="h-4 w-4" />
                                </>
                              );
                              return product.href.startsWith('/') ? (
                                <Link key={product.name} to={product.href} className={buttonClasses}>
                                  {content}
                                </Link>
                              ) : (
                                <a
                                  key={product.name}
                                  href={product.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={buttonClasses}
                                >
                                  {content}
                                </a>
                              );
                            })}
                          </div>
                        ) : item.href ? (
                          item.href.startsWith('/') ? (
                            <Link
                              to={item.href}
                              className="mt-2 inline-flex items-center text-sm font-semibold text-cyan hover:text-cyan/80"
                            >
                              {item.value}
                              <ArrowUpRight className="ml-1 h-4 w-4" />
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2 inline-flex items-center text-sm font-semibold text-cyan hover:text-cyan/80"
                            >
                              {item.value}
                              <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                          )
                        ) : (
                          <p className="mt-2 text-base text-foreground">{item.value}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {hasStoryMeta && (
                  <div className="mt-6 space-y-4 border-t border-border/50 pt-4">
                    {story.location && (
                      <div className="flex items-center text-sm text-foreground/70">
                        <MapPin className="mr-2 h-4 w-4 text-cyan" />
                        {story.location}
                      </div>
                    )}
                    {story.size && (
                      <div className="flex items-center text-sm text-foreground/70">
                        <Users className="mr-2 h-4 w-4 text-cyan" />
                        {story.size}
                      </div>
                    )}
                  </div>
                )}
                {story.pdfUrl && (
                  <a
                    href={story.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/20"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                )}
              </Card>
            </aside>
          </section>

          {story.relatedResources && story.relatedResources.length > 0 && (
            <section className="mt-16 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan/70">Discover more resources</p>
                <h2 className="text-3xl font-bold text-foreground">Continue exploring</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {story.relatedResources.map((resource) => (
                  <Card
                    key={resource.href}
                    className="flex flex-col justify-between border-border/50 bg-card/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/10"
                  >
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">{resource.label}</p>
                      <h3 className="text-xl font-semibold text-foreground">{resource.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/70">{resource.description}</p>
                    </div>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center text-sm font-semibold text-cyan"
                    >
                      Read more
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStoryPage;

