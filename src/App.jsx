import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import JoinWaitlist from "./components/JoinWaitlist";
import styles from "./style";
import InvestNow from "./pages/invest-now";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import HowGozyWorks from "./pages/HowGozyWorks";
import Careers from "./pages/Careers";
import HelpCenter from "./pages/HelpCenter";
import ReportIssue from "./pages/ReportIssue";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsServices from "./pages/TermsServices";
import OurPartners from "./pages/OurPartners";
import BecomePartner from "./pages/BecomePartner";

const Home = () => (
  <>
    <Hero />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonials />
    <Clients />
    <CTA />
    <div className="my-8 flex justify-center">
      <JoinWaitlist />
    </div>
  </>
);

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen flex flex-col">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} flex-1`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-gozy-works" element={<HowGozyWorks />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<HelpCenter />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsServices />} />
            <Route path="/partners" element={<OurPartners />} />
            <Route path="/our-partners" element={<OurPartners />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/invest-now" element={<InvestNow />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
