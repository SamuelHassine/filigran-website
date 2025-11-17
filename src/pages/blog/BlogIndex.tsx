import { useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = useMemo(
    () =>
      [...blogPosts]
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
        .slice(0, POSTS_PER_PAGE),
    [],
  );

  const categories = useMemo(() => {
    const base = new Set<string>();
    blogPosts.forEach((post) => {
      post.categories.forEach((category) => base.add(category));
    });
    return ["All", ...Array.from(base)];
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchTarget = `${post.title} ${post.excerpt}`.toLowerCase();
      const matchesSearch = searchTarget.includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, posts, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-cyan">Blog</span> & Insights
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Expert insights, product updates, and thought leadership in cybersecurity and threat management.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                className="pl-12 h-14 text-lg bg-card border-border/50"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); }}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  activeCategory === category
                    ? 'border-cyan bg-cyan/10 text-cyan'
                    : 'bg-card border-border/50 hover:border-cyan hover:bg-cyan/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full card-glass hover-lift overflow-hidden group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan/20 to-primary/30" />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan/90 text-background text-xs font-semibold rounded-full">
                        {post.categories[0] ?? "Filigran"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      {post.readTime && <span>{post.readTime}</span>}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-cyan text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {!filteredPosts.length && (
              <Card className="col-span-full p-8 text-center border-dashed border-border/60">
                <p className="text-foreground/60">No posts found for that filter. Try a different keyword.</p>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
