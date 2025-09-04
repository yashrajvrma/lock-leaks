// @ts-nocheck
// "use client";
// import dynamic from "next/dynamic";
// import Footer from "@/components/footer";
// import Newheader from "@/components/newheader";
// import Dailogs from "@/components/dailogs";

// // const Dailogs = dynamic(() => import("@/components/dailogs"), { ssr: false });

// export default function LoginPage() {
//   return (
//     <section style={{ backgroundColor: "#0F0B15", minHeight: "100vh" }}>
//       <Newheader />
//       <Dailogs />
//       <Footer />
//     </section>
//   );
// }

// login.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import Footer from "@/components/footer";
import Newheader from "@/components/newheader";
import Dailogs from "@/components/dailogs";

export default function LoginPage() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.getIsAuthenticated());

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/"); // redirect if logged in
    }
  }, [isAuthenticated, router]);

  return (
    <section style={{ backgroundColor: "#0F0B15", minHeight: "100vh" }}>
      <Newheader />
      <Dailogs />
      <Footer />
    </section>
  );
}
