import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ArrowRight, BookOpen, Users, Award, Clock, Target, Zap } from "lucide-react";

interface TrainingPath {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trainingPaths: TrainingPath[] = [
  {
    icon: <BookOpen className="h-6 w-6 text-cyan" />,
    title: "OpenCTI Fundamentals",
    description: "Master the essentials of threat intelligence management with OpenCTI. Learn to navigate the platform, manage entities, and understand core concepts.",
    duration: "4 hours",
    level: "Beginner"
  },
  {
    icon: <Target className="h-6 w-6 text-cyan" />,
    title: "OpenCTI Advanced Operations",
    description: "Deep dive into advanced features, custom dashboards, correlation rules, and complex threat analysis workflows.",
    duration: "8 hours",
    level: "Advanced"
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan" />,
    title: "OpenAEV Essentials",
    description: "Get started with adversarial exposure validation. Learn to create and run simulations, interpret results, and improve security posture.",
    duration: "3 hours",
    level: "Beginner"
  },
  {
    icon: <Users className="h-6 w-6 text-cyan" />,
    title: "OpenAEV Advanced Scenarios",
    description: "Build complex attack scenarios, customize simulations, and integrate OpenAEV with your security ecosystem.",
    duration: "6 hours",
    level: "Advanced"
  },
  {
    icon: <Award className="h-6 w-6 text-cyan" />,
    title: "XTM Suite Integration",
    description: "Learn how to leverage the full power of the XTM Suite by integrating OpenCTI and OpenAEV for comprehensive threat management.",
    duration: "5 hours",
    level: "Intermediate"
  }
];

const benefits: Benefit[] = [
  {
    icon: <BookOpen className="h-8 w-8 text-cyan" />,
    title: "Expert-Led Content",
    description: "Learn from Filigran's product experts and cybersecurity professionals with real-world experience"
  },
  {
    icon: <Users className="h-8 w-8 text-cyan" />,
    title: "Hands-On Labs",
    description: "Practice in realistic environments with guided exercises and real-world scenarios"
  },
  {
    icon: <Clock className="h-8 w-8 text-cyan" />,
    title: "Self-Paced Learning",
    description: "Learn at your own pace with 24/7 access to all course materials and resources"
  },
  {
    icon: <Award className="h-8 w-8 text-cyan" />,
    title: "Certification Ready",
    description: "Prepare for Filigran certifications and validate your expertise with official credentials"
  }
];

const FiligranAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-0 h-[480px] w-[480px] rounded-full bg-cyan/20 blur-[180px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[210px]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
                <Award className="h-4 w-4 text-cyan" />
                <span className="text-sm font-semibold text-cyan">Official Training by Filigran</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Filigran Academy</h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                Master Filigran solutions and enhance your cybersecurity skills with engaging, 
                hands-on learning paths designed for every level.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="cta" className="px-8">
                  <a href="https://academy.filigran.io" target="_blank" rel="noopener noreferrer">
                    Start Learning
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <Link to="/company/contact">Contact Training Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Accelerate Your Expertise
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Whether you're just starting or looking to advance your skills, Filigran Academy 
                provides the training you need to succeed with our XTM Suite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 border-white/10 bg-card/80 backdrop-blur-xl text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Paths */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.3
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Training Paths
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Structured learning paths designed to take you from fundamentals to advanced expertise 
                across the entire XTM Suite.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {trainingPaths.map((path) => (
                <Card key={path.title} className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      {path.icon}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{path.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-cyan/10 text-cyan font-semibold">
                          {path.level}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">{path.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-foreground/60">
                          <Clock className="h-4 w-4" />
                          <span>{path.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" variant="cta" className="px-8">
                <a href="https://academy.filigran.io" target="_blank" rel="noopener noreferrer">
                  Explore All Courses
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Filigran Academy provides a complete learning experience with all the tools and resources 
                you need to master our platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Interactive Courses</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Engaging video content, interactive exercises, and real-world scenarios to reinforce learning
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Live Workshops</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Regular live sessions with experts for deep dives, Q&A, and advanced topics
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Practice Labs</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Hands-on environments to practice skills safely with real-world data and scenarios
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Validate your expertise with official Filigran certifications recognized by the industry
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Lifetime Access</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Once enrolled, enjoy lifetime access to course materials with regular updates
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Join a vibrant community of learners and experts for ongoing support and networking
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="relative overflow-hidden bg-gradient-to-br from-cyan/20 via-transparent to-blue-500/20 p-12 text-center max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-blue-500/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Ready to Level Up Your Skills?
                </h2>
                <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of cybersecurity professionals who have enhanced their expertise 
                  with Filigran Academy.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" variant="cta" className="px-8">
                    <a href="https://academy.filigran.io" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="px-8">
                    <Link to="/company/contact">
                      Request Team Training
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Other Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Explore other offerings</h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Discover Filigran's value-added services designed to ensure you maximize the value of your journey with Filigran products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/offerings/software-as-a-service" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Software as a Service
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Filigran provides fully hosted and managed cloud private instances for all product available in the XTM Suite.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/professional-support-packages" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Support and Services
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Filigran's XTM Suite Support and Services provides organizations with professional assistance along their integration and usage of the platforms.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/opencti-enterprise-edition" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-cyan/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                    Enterprise Edition
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Our Enterprise Edition provides highly demanding organizations with additional and powerful features for advanced use cases.
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default FiligranAcademy;
