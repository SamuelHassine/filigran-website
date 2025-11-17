import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { PlatformSection } from '@/components/PlatformSection';
import { AISection } from '@/components/AISection';
import { StatsSection } from '@/components/StatsSection';
import { OfferingsSection } from '@/components/OfferingsSection';
import { CommunityCarousel } from '@/components/CommunityCarousel';
import { BlogPostsSection } from '@/components/BlogPostsSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { GetStartedSection } from '@/components/GetStartedSection';
import { Footer } from '@/components/Footer';
import openctiLogo from '@/assets/opencti-logo.svg';
import openaevLogo from '@/assets/openaev-logo.svg';
import openctiDashboard from '@/assets/illustrations/opencti-dashboard.svg';
import openaevDashboard from '@/assets/illustrations/openaev-dashboard.svg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <PlatformSection
          logo={openctiLogo}
          title="Understand your threat landscape and act decisively"
          subtitle="Organize your cyber threat intelligence to enhance and disseminate actionable insights."
          description="Threat Intelligence Platform"
          detail="Get a holistic view of your threat environment and improved decision-making for faster incident response."
          image={openctiDashboard}
          link="/platforms/opencti"
        />
        
        <PlatformSection
          logo={openaevLogo}
          title="Exposure validation to improve security posture"
          subtitle="Utilize prioritized threat intelligence to simulate real-life attack scenarios and optimize your cyber defenses – tools, processes and people!"
          description="Adversarial Exposure Validation Platform"
          detail="Continuously emulate prioritized attack paths, validate readiness across teams, and accelerate remediation with guided automation."
          image={openaevDashboard}
          link="/platforms/openaev"
          reverse
        />
        
        <AISection />
        
        <StatsSection />
        
        <OfferingsSection />
        
        <CommunityCarousel />
        
        <BlogPostsSection />
        
        <IntegrationsSection />
        
        <GetStartedSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
