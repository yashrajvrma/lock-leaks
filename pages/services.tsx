import { useState } from 'react';

import TcSection from '../components/TcSection';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/TcSection.css';
import dynamic from "next/dynamic";
import Footer from '@/components/footer';
import TrafficRecoverySection from '@/components/TrafficRecovery';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import CallToAction from '@/components/CallToAction';
import FaqSection from '@/components/faqs';
import Newheader from '@/components/newheader';

const ProtectPopup = dynamic(() => import("@/components/ProtectPopup"), { ssr: false });

export default function ServicesPage() {
  const serviceFaqs = [
    {
      question: "What is Lock Leaks and how can it help me?",
      answer:
        "Lock Leaks is a digital protection service that detects and removes unauthorized content leaks, redirects lost traffic to your verified profile, and offers 24/7 monitoring to prevent impersonation or content abuse.",
    },
    {
      question: "How does traffic recovery work?",
      answer:
        "By intercepting traffic from leak sites that post your content without permission, Lock Leaks redirects it to your official profile — turning stolen views into paying subscribers.",
    },
    {
      question: "What types of content can be protected?",
      answer:
        "Lock Leaks protects images, videos, and other media, especially content shared on social platforms, leak sites, or any high-risk sources of piracy.",
    },
    {
      question: "How fast does Lock Leaks respond?",
      answer:
        "The system uses AI for automatic detection and rapid takedowns, with real-time alerts. You won’t wait days for a response — every action is tracked, logged, and executed immediately.",
    },
  ];

  return (
    <>
      {/* <Header /> */}
       <Newheader/>
      <TcSection />
      <TrafficRecoverySection />
      
      <BeforeAfterSection
        beforeImage="/images/beforeimg1.webp"
        afterImage="/images/afterimg1.webp"
        headingPart1="Impersonator"
        headingPart2="Profiles Removal"
      />
      
      <BeforeAfterSection
        beforeImage="/images/beforeimg2.webp"
        afterImage="/images/aftereimg2.webp"
        headingPart1="Fake Account"
        headingPart2="Elimination"
      />
      
      <BeforeAfterSection
        beforeImage="/images/before1122.png"
        afterImage="/images/afterimg3.webp"
        headingPart1="Online Identity"
        headingPart2="Protection"    
        
      />
          <div className="d-none d-md-flex gap-2 text-center justify-content-center mb-5">
          <button className="btn-start">Start Free</button>
          </div>
      

      <ProtectPopup />
      
      <FaqSection faqs={serviceFaqs} heading="Frequently Asked Questions" />
      <CallToAction />
      <Footer />
    </>
  );
}
