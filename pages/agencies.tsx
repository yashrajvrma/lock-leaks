import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/global.css';
import '../styles/termsConditions.css';
import '../styles/AgenciesVideo.css';
import '../styles/faqs.css';
import '../styles/TcSection.css';
// import Header from '@/components/header';
import AgenciesSection from '@/components/AgenciesSection';
import AgenciesVideo from '@/components/AgenciesVideo';
import HowItWorks from '@/components/HowItWorks';
import FaqSection from '@/components/faqs'; // ✅ updated
import Footer from '@/components/footer';
import SimpleComparison from '@/components/SimpleComparison';
import TestiScrol from '@/components/TestiScrol';
import CompareSection from '@/components/CompareSection';
import CompareLeakSection from '@/components/CompareLeakSection';
import SpotlightScroller from '@/components/SpotlightScroller';
import CallToAction from '@/components/CallToAction';
import Newheader from '@/components/newheader';

export default function Contact() {
 const agencyFaqs = [
  {
    question: "How many creators can I manage under one agency account?",
    answer:
      "There’s no limit. You can protect and monitor as many creators as needed from a single dashboard.",
  },
  {
    question: "How fast are leaks detected and removed?",
    answer:
      "Our system scans 24/7. Most leaks are detected within minutes and takedown requests are initiated automatically.",
  },
  {
    question: "Can I track results and traffic recovery for each model?",
    answer:
      "Yes. You’ll get detailed reports per creator, including takedown history, traffic redirection, and recovery impact.",
  },
  {
    question: "Do you offer onboarding or support for agencies?",
    answer:
      "Absolutely. Agencies receive priority onboarding, live support, and a dedicated success manager to help you scale.",
  },
];


  return (
    <>
      {/* <Header /> */}
    <Newheader/>
      <AgenciesSection />
      <AgenciesVideo />
      <HowItWorks />
      <SimpleComparison />
      <CompareLeakSection />
      <SpotlightScroller />
      <CompareSection />
      <TestiScrol />
      <FaqSection faqs={agencyFaqs} heading="Frequently Asked Questions" /> 
      <CallToAction/>

      <Footer />
    </>
  );
}
