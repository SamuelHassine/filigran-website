import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export const BlogPostsSection = () => {
  const featuredPosts = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 3);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover our latest blog posts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-cyan/50 transition-all duration-300 hover-lift h-full flex flex-col">
                <div className="relative overflow-hidden">
                  {post.featuredImage ? (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-cyan/20 to-primary/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 3).map((category) => (
                      <span
                        key={`${post.slug}-${category}`}
                        className="text-xs px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-foreground/60 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border/50 text-sm text-foreground/60 flex items-center justify-between">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <div className="flex items-center gap-1 text-cyan">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground group"
          >
            <Link to="/blog">
              See our blog
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
