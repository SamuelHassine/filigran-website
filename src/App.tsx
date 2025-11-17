import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/blog/BlogIndex";
import Customers from "./pages/customers/CustomersIndex";
import CustomerStoryPage from "./pages/customers/CustomerStoryPage";
import Resources from "./pages/resources/ResourcesIndex";
import ContentLibraryPage from "./pages/resources/ContentLibrary";
import EventsWebinarsPage from "./pages/resources/EventsWebinars";
import Offerings from "./pages/offerings/OfferingsIndex";
import OpenCTIEnterpriseEdition from "./pages/offerings/OpenCTIEnterpriseEdition";
import OpenAEVEnterpriseEdition from "./pages/offerings/OpenAEVEnterpriseEdition";
import ProfessionalSupportPackages from "./pages/offerings/ProfessionalSupportPackages";
import SoftwareAsAService from "./pages/offerings/SoftwareAsAService";
import FiligranAcademy from "./pages/offerings/FiligranAcademy";
import OpenGRCEnterpriseEdition from "./pages/offerings/OpenGRCEnterpriseEdition";
import DedicatedAgenticPlatform from "./pages/offerings/DedicatedAgenticPlatform";
import Partners from "./pages/partners/PartnersIndex";
import MsspPartners from "./pages/partners/MsspPartners";
import TechnologyAlliances from "./pages/partners/TechnologyAlliances";
import SolutionsProviders from "./pages/partners/SolutionsProviders";
import Marketplaces from "./pages/partners/Marketplaces";
import BecomeAPartner from "./pages/partners/BecomeAPartner";
import OpenCTI from "./pages/platforms/OpenCTI";
import OpenAEV from "./pages/platforms/OpenAEV";
import XTMSuite from "./pages/platforms/XTMSuite";
import XTMHubPage from "./pages/platforms/XTMHub";
import BookDemo from "./pages/BookDemo";
import FiligranAccountCreation from "./pages/FiligranAccountCreation";
import OurStory from "./pages/company/OurStory";
import Leadership from "./pages/company/Leadership";
import Investors from "./pages/company/Investors";
import Newsroom from "./pages/company/Newsroom";
import Contact from "./pages/company/Contact";
import Community from "./pages/community/CommunityIndex";
import CertificationPrograms from "./pages/ecosystem/CertificationPrograms";
import IntelligenceDefenseDisinformation from "./pages/use-cases/IntelligenceDefenseDisinformation";
import IntelligenceDrivenSOC from "./pages/use-cases/IntelligenceDrivenSOC";
import IncidentResponseInvestigation from "./pages/use-cases/IncidentResponseInvestigation";
import ThreatMonitoringHunting from "./pages/use-cases/ThreatMonitoringHunting";
import IntelligenceBreachSimulation from "./pages/use-cases/IntelligenceBreachSimulation";
import UseCaseLibrary from "./pages/use-cases/UseCaseLibrary";
import BlogPost from "./pages/blog/BlogPostPage";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import XTMOne from "./pages/platforms/XTMOne";
import OpenGRC from "./pages/platforms/OpenGRC";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfServices from "./pages/legal/TermsOfServices";
import Licenses from "./pages/legal/Licenses";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/company" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:slug" element={<CustomerStoryPage />} />
        <Route path="/customer-stories/:slug" element={<CustomerStoryPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/content-library" element={<ContentLibraryPage />} />
        <Route path="/events-webinars" element={<EventsWebinarsPage />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/offerings/professional-support-packages" element={<ProfessionalSupportPackages />} />
        <Route path="/offerings/software-as-a-service" element={<SoftwareAsAService />} />
        <Route path="/offerings/filigran-academy" element={<FiligranAcademy />} />
        <Route path="/offerings/opengrc-enterprise-edition" element={<OpenGRCEnterpriseEdition />} />
        <Route path="/offerings/dedicated-agentic-platform" element={<DedicatedAgenticPlatform />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/mssp-partners" element={<MsspPartners />} />
        <Route path="/partners/technology-alliances" element={<TechnologyAlliances />} />
        <Route path="/partners/solutions-providers" element={<SolutionsProviders />} />
        <Route path="/partners/marketplaces" element={<Marketplaces />} />
        <Route path="/become-a-partner" element={<BecomeAPartner />} />
        <Route path="/platforms/opencti" element={<OpenCTI />} />
        <Route path="/platforms/openaev" element={<OpenAEV />} />
        <Route path="/platforms/xtm-suite" element={<XTMSuite />} />
        <Route path="/platforms/xtm-hub" element={<XTMHubPage />} />
        <Route path="/platforms/opengrc" element={<OpenGRC />} />
        <Route path="/platforms/xtm-one" element={<XTMOne />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/filigran-account-creation" element={<FiligranAccountCreation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ecosystem/certifications" element={<CertificationPrograms />} />
        <Route path="/use-cases" element={<UseCaseLibrary />} />
        <Route path="/use-cases/intelligence-driven-defense-against-disinformation" element={<IntelligenceDefenseDisinformation />} />
        <Route path="/use-cases/intelligence-driven-soc" element={<IntelligenceDrivenSOC />} />
        <Route path="/use-cases/incident-response-and-investigation" element={<IncidentResponseInvestigation />} />
        <Route path="/use-cases/threat-monitoring-hunting" element={<ThreatMonitoringHunting />} />
        <Route path="/use-cases/intelligence-led-breach-attack-simulation" element={<IntelligenceBreachSimulation />} />
        <Route path="/about" element={<About />} />
        <Route path="/company/our-story" element={<OurStory />} />
        <Route path="/company/leadership" element={<Leadership />} />
        <Route path="/company/investors" element={<Investors />} />
        <Route path="/company/newsroom" element={<Newsroom />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/offerings/opencti-enterprise-edition" element={<OpenCTIEnterpriseEdition />} />
        <Route path="/offerings/openaev-enterprise-edition" element={<OpenAEVEnterpriseEdition />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
