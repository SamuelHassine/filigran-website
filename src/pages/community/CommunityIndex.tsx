import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HubspotForm } from "@/components/HubspotForm";
import { ArrowUpRight, CalendarDays, MessageCircle, Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/utils";

import collageOne from "@/assets/community/community-collage-1.jpeg";
import collageTwo from "@/assets/community/community-collage-2.jpg";
import collageThree from "@/assets/community/community-collage-3.jpeg";
import collageFour from "@/assets/community/community-collage-4.jpeg";
import collageFive from "@/assets/community/community-collage-5.jpg";
import communityCollaborate from "@/assets/community/community-collaborate.svg";
import communityLoop from "@/assets/community/community-loop.svg";
import communityConnect from "@/assets/community/community-connect.svg";
import eventParis from "@/assets/community/community-event-paris.svg";
import eventLondon from "@/assets/community/community-event-london.svg";
import eventLyon from "@/assets/community/community-event-lyon.svg";
import eventOpenbas from "@/assets/community/community-event-openbas.svg";
import ambassadorVisual from "@/assets/community/community-ambassador.svg";
import contributionBlog from "@/assets/community/community-blog.svg";
import contributionShowTell from "@/assets/community/community-show-tell.svg";
import contributionFeedback from "@/assets/community/community-feedback.svg";
import contributionIdeas from "@/assets/community/community-ideas.svg";

const heroStats = [
  { label: "Members worldwide", value: "6,000+" },
  { label: "Active countries", value: "70+" },
  { label: "Slack channels", value: "20+" },
];

const foundations = [
  {
    icon: communityCollaborate,
    title: "Collaborate and learn",
    description:
      "Whether you are just getting started or diving deep, our Slack channels are the best place to ask questions, share use cases and get real answers from the Filigran team and peers alike.",
  },
  {
    icon: communityLoop,
    title: "Stay in the loop",
    description:
      "Be the first to know about product releases, company updates and upcoming events. Dedicated channels keep you informed without the noise.",
  },
  {
    icon: communityConnect,
    title: "Connect and grow",
    description:
      "Join our community calls and meetups to see live demos, exchange feedback and build relationships with other security professionals across the world.",
  },
];

const collageImages = [
  { src: collageOne, span: "md:col-span-4 md:row-span-2", alt: "Community session" },
  { src: collageTwo, span: "md:col-span-8 md:row-span-2", alt: "Meetup keynote" },
  { src: collageThree, span: "md:col-span-7 md:row-span-2", alt: "Hands-on workshop" },
  { src: collageFour, span: "md:col-span-3", alt: "Live demo moment" },
  { src: collageFive, span: "md:col-span-2", alt: "Meetup networking" },
];

const slackChannels = [
  {
    title: "#newbies",
    intro: "Getting started?",
    copy:
      "This channel is dedicated to installation-related questions, setup support, and guidance for new users.",
  },
  {
    title: "#product-usage",
    intro: "Already using our platforms everyday?",
    copy: "Share how you use them day-to-day, exchange tips, or learn from others.",
  },
  {
    title: "#events",
    intro: "Where will we be?",
    copy:
      "Get updates on Filigran meetups, community calls, and external events like conferences and trade shows.",
  },
  {
    title: "#announcements",
    intro: "Want to know the latest?",
    copy: "Follow announcements about company news, product vision, and strategic updates.",
  },
  {
    title: "#product-general",
    intro: "What are the product updates and new releases?",
    copy: "This is the spot for all things OpenCTI and OpenBAS.",
  },
  {
    title: "#troubleshooting",
    intro: "Hit a snag?",
    copy:
      "Seek help and collaborate with others to resolve platform-related challenges quickly and effectively.",
  },
];

const events = [
  {
    tag: "Community Meetup",
    month: "March 2025",
    title: "OpenCTI Meetup in Paris",
    kicker: "Paris 2025",
    summary:
      "Thanks to everyone who joined us for an evening full of demos, inspiring stories, and meaningful conversations.",
    image: eventParis,
  },
  {
    tag: "Community Meetup",
    month: "June 2025",
    title: "OpenCTI Meetup in London",
    kicker: "London 2025",
    summary:
      "The evening before Infosecurity Europe, we gathered with the community in London for a casual meetup.",
    image: eventLondon,
  },
  {
    tag: "Community Meetup",
    month: "December 2024",
    title: "OpenCTI Meetup in Lyon",
    kicker: "Lyon 2024",
    summary:
      "We gathered in Lyon for a dynamic evening of product demos, discussions, and shared experiences.",
    image: eventLyon,
  },
  {
    tag: "Community Call",
    month: "October 2024",
    title: "Filigran Community Call",
    kicker: "Navigating OpenBAS",
    summary:
      "In this session, our team answers community questions and shares insights about OpenBAS, covering core features, upcoming developments, and more.",
    image: eventOpenbas,
  },
];

const ambassadorBenefits = [
  {
    title: "Be at the table",
    copy:
      "Help shape Filigran’s future! Share feedback directly with us, get early insights into our roadmap, and contribute to product evolution.",
  },
  {
    title: "Get exclusive access",
    copy:
      "Enjoy special perks like a private Slack channel, sneak peeks at upcoming features, exclusive invites to community calls and co-host discussions.",
  },
  {
    title: "Earn recognition and rewards",
    copy:
      "Exclusive Filigran swag, thank-you gifts, and recognition for your contributions… As an ambassador, your involvement won’t go unnoticed!",
  },
];

const contributions = [
  {
    icon: contributionBlog,
    title: "Co-write a blog post",
    copy: "Partner with Filigran and share your insights with the wider community team.",
  },
  {
    icon: contributionShowTell,
    title: "Show and tell",
    copy: "Present your project during a meetup and connect directly with other group members.",
  },
  {
    icon: contributionFeedback,
    title: "Give feedback",
    copy: "Help us improve and shape future activities by telling us your thoughts on past events.",
  },
  {
    icon: contributionIdeas,
    title: "Pitch new ideas",
    copy: "Want different kinds of events, content or community projects? Let us know!",
  },
];

const testimonials = [
  {
    icon: Users,
    title: "Meetup in Paris 2024",
    quote:
      "“The Filigran Community Meetup was well organized, and the refreshments made it easy to connect with others. It was a great experience, and I’ll definitely come again.”",
  },
  {
    icon: CalendarDays,
    title: "Community Call – Navigating OpenBAS",
    quote:
      "“Thank you very much for the live product demonstration during the community call! It’s great to see the platform in action rather than just hearing about it through slides.”",
  },
];

const Community = () => (
  <div className="min-h-screen bg-background text-white">
    <Navigation />

    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
          <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
        </div>

        <div className="container mx-auto relative z-10 px-4 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-cyan" />
            Filigran Community
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to the Filigran Community
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
            Join over 6,000 CTI practitioners like you, learn how we support each other and grow together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <a href="https://community.filigran.io/" target="_blank" rel="noreferrer">
                Join Slack
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="px-8 bg-white/10 hover:bg-white/20">
              <a href="#ambassador-program">Explore Ambassador Program</a>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
            {heroStats.map((stat) => (
              <Card key={stat.label} className="bg-white/5 border-white/10 text-left p-6">
                <p className="text-cyan text-sm uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">The XTM Community</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The eXtended Threat Management Community</h2>
          <p className="text-white/70">
            Your space to connect, learn, and grow together through product tips, events, and real-world collaboration.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {foundations.map((foundation) => (
            <Card key={foundation.title} className="p-8 bg-white/5 border-white/10 card-glass">
              <img src={foundation.icon} alt="" className="w-14 h-14 mb-6" loading="lazy" />
              <h3 className="text-2xl font-semibold mb-3">{foundation.title}</h3>
              <p className="text-white/70">{foundation.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid gap-4 md:grid-cols-12 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[220px]">
          {collageImages.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={cn("overflow-hidden rounded-3xl border border-white/10", item.span)}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="community-channels" className="bg-white/2 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Join the conversation where it matters
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Channels made for instant collaboration</h2>
            <p className="text-white/70">
              Connect with thousands of Filigran users to learn, share insights, and enhance your skills, whether you’re
              new or actively using OpenCTI and OpenBAS in daily operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {slackChannels.map((channel) => (
              <Card key={channel.title} className="p-6 bg-white/5 border-white/10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{channel.title}</h3>
                  <MessageCircle className="w-5 h-5 text-cyan" />
                </div>
                <p className="text-white font-semibold">{channel.intro}</p>
                <p className="text-white/70 mt-2">{channel.copy}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-cyan text-cyan hover:bg-cyan/10">
              <a href="https://community.filigran.io/" target="_blank" rel="noreferrer">
                Join Filigran’s Slack Community
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              Live experiences
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect live with Filigran Community</h2>
            <p className="text-white/70 max-w-2xl">
              Learn, share and grow together through regular meetups and interactive community calls.
            </p>
          </div>
          <Button asChild variant="secondary" className="bg-white/5 border-white/20 hover:bg-white/10">
            <Link to="/events-webinars">View all events</Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <Card
              key={event.title}
              className="overflow-hidden bg-white/5 border-white/10 flex flex-col hover:border-cyan/40 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-cyan/80 text-background px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
                  {event.month}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">{event.tag}</p>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div>
                    <p className="text-sm text-white/60">{event.title}</p>
                    <h3 className="text-2xl font-semibold">{event.kicker}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cyan" />
                </div>
                <p className="text-white/70 flex-1">{event.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="ambassador-program" className="bg-white/2 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-stretch">
            <img
              src={ambassadorVisual}
              alt="Filigran ambassador meetup"
              className="w-full h-full object-cover rounded-3xl border border-white/10"
              loading="lazy"
            />
            <div className="space-y-6">
              <p className="text-cyan text-sm font-semibold uppercase tracking-[0.3em]">Ambassador program</p>
              <h2 className="text-3xl md:text-5xl font-bold">Lead the movement in your region</h2>
              <div className="grid gap-4">
                {ambassadorBenefits.map((benefit) => (
                  <Card key={benefit.title} className="p-6 bg-white/5 border-white/10">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.copy}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-3">Community contributions</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Thrive together with other cybersecurity practitioners</h2>
          <p className="text-white/70">
            Are you ready to share your expertise, ideas, or experiences? The floor is yours, and we offer numerous ways
            for you to get involved.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {contributions.map((contribution) => (
            <Card key={contribution.title} className="p-6 bg-white/5 border-white/10 flex items-start gap-4">
              <img src={contribution.icon} alt="" className="w-12 h-12" loading="lazy" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{contribution.title}</h3>
                <p className="text-white/70">{contribution.copy}</p>
              </div>
            </Card>
          ))}
          <Card className="p-6 bg-gradient-to-r from-cyan/30 to-blue-500/30 border-white/20 md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-white/70 uppercase tracking-[0.3em] mb-2">Ready to contribute?</p>
              <h3 className="text-2xl font-semibold text-white">
                Tell us your thoughts and how we can support you
              </h3>
            </div>
            <Button asChild size="lg" className="bg-white text-background hover:bg-white/90 text-base font-semibold">
              <a href="#community-form">Share feedback</a>
            </Button>
          </Card>
        </div>
      </section>

      <section id="community-form" className="bg-white/2 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Card className="p-8 bg-white/5 border-white/10">
              <h2 className="text-3xl font-bold mb-4">Get involved today!</h2>
              <p className="text-white/70 mb-8">
                Community has always been part of our core. Share your thoughts with us and let’s build the future of
                eXtended Threat Management together.
              </p>
              <HubspotForm portalId="26791207" formId="52594f9e-8616-4807-8471-60e9587c4d45" region="eu1" />
            </Card>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.title} className="p-6 bg-white/5 border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <testimonial.icon className="w-10 h-10 text-cyan" />
                    <h3 className="text-xl font-semibold">{testimonial.title}</h3>
                  </div>
                  <p className="text-white/80">{testimonial.quote}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Community;

