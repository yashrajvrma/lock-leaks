"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Newheader from "@/components/newheader";
import Dailogs from "@/components/dailogs";

// const Dailogs = dynamic(() => import("@/components/dailogs"), { ssr: false });

export default function LoginPage() {
  return (
    <section style={{ backgroundColor: "#0F0B15", minHeight: "100vh" }}>
      <Newheader />
      <Dailogs />
      <Footer />
    </section>
  );
}
