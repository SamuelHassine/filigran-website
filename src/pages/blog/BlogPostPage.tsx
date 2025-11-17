import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { ArrowLeft } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { LIVE_DEMO_PATH } from "@/lib/routes";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((entry) => entry.slug === slug);

  const sanitizedContent = useMemo(() => {
    if (!post) {
      return "";
    }
    return DOMPurify.sanitize(post.content);
  }, [post]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="gap-2 border-white/10 text-foreground/70 hover:text-cyan hover:border-cyan"
            >
              <Link to="/blog" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4" />
                Back to blog
              </Link>
            </Button>
          </div>

          {!post && (
            <Card className="p-8 text-center border border-red-500/40 bg-red-500/5">
              <p className="text-foreground/70 mb-4">
                We can&apos;t find that article right now. It may have been moved or renamed.
              </p>
              <Button asChild>
                <Link to="/blog">Browse more stories</Link>
              </Button>
            </Card>
          )}

          {post && (
            <article>
              <div className="space-y-3 mb-10">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={`${post.slug}-${category}`}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan/10 text-cyan border border-cyan/20"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>
                <p className="text-foreground/60 text-sm">
                  Published{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {post.featuredImage && (
                <div className="mb-12">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full rounded-3xl border border-border/40 shadow-lg"
                    loading="lazy"
                  />
                </div>
              )}

              <div
                className="wp-content prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />

              <div className="mt-16">
                <Card className="p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-cyan font-semibold">
                      Keep exploring
                    </p>
                    <h3 className="text-2xl font-bold">Ready to see Filigran in action?</h3>
                    <p className="text-foreground/60">
                      Book a tailored walkthrough or access the live demo workspace.
                    </p>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <Button asChild variant="cta">
                      <Link to="/book-demo">Book a demo</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to={LIVE_DEMO_PATH}>
                        Try live demo
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

