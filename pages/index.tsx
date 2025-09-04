"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/faqs.css";
import "../styles/Newheader.css";
// import Header from '@/components/header';
import Orbit from "@/components/orbit";
import ProtectSection from "@/components/ProtectContentSection";
import Animationthird from "@/components/animationthird";
import Testimonial from "@/components/testimonial";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/footer";
import FaqSection from "@/components/faqs";
import DataPrivacySection from "@/components/DataPrivacySection";
import ParticlesBackground from "@/components/particlesbackground";
import DiscountBanner from "@/components/DiscountBanner";
import Newheader from "@/components/newheader";

export default function Home() {
  const homeFaqs = [
    {
      question: "Are removals guaranteed?",
      answer:
        "We combine advanced cybersecurity, specialized monitoring, and thorough takedown strategies for a superior success rate. While no service can promise 100% removal, we go well beyond basic DMCA methods, delivering unmatched results.",
    },
    {
      question: "How fast do you remove content?",
      answer:
        "Our real-time scanning and 24/7 team identify and address leaks quickly—often within hours. Actual removal times vary by platform, but we push for the fastest resolution possible.",
    },
    {
      question: "What about re-uploads or repeat infringers?",
      answer:
        "Our advanced AI flags duplicates and partial matches, so if removed content reappears, we spot it quickly. We stay ahead of persistent infringers using continuous monitoring and specialized cybersecurity tactics.",
    },
    {
      question:
        "Will my personal details be exposed during the takedown process?",
      answer:
        "No. Our company submits every notice in our own name, ensuring your identity remains confidential and shielding you from retaliation.",
    },
  ];

  return (
    <>
      <ParticlesBackground />
      <Newheader />
      <Orbit />
      <ProtectSection />
      <Animationthird />
      <DataPrivacySection />
      <DiscountBanner />
      <FaqSection faqs={homeFaqs} heading="Frequently Asked Questions" />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
