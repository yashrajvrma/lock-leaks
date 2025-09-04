// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../public/images/lockleaks.svg";
// import bellIcon from "../public/icons/Animated GIF BG.gif";
// import trafficIcon from "../public/images/megaphone-icon.svg";
// import "../styles/Newheader.css";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const messages = [
//     {
//       icon: bellIcon,
//       width: 50,
//       height: 30,
//       content: (
//         <>
//           <strong>Get 20% OFF:</strong>{" "}
//           <span className="top-bar-underline">
//             Follow us on Twitter(X) (
//             <a
//               href="https://twitter.com/lock_leaks"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               @lock_leaks
//             </a>
//             ) and leave a review — get 20% discount on your next service.
//           </span>
//         </>
//       ),
//     },
//     {
//       icon: trafficIcon,
//       width: 20,
//       height: 30,
//       content: (
//         <>
//           <strong>Game-Changer:</strong>{" "}
//           <span className="top-bar-underline">
//             <Link
//               href="/services"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               Boost Your Traffic – Recover Lost Subscribers from Pirated Sites!
//             </Link>
//           </span>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once on load

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Notification Bar */}
//       <div className="top-bar-custom">
//         <div className="top-bar-content">
//           <Image
//             src={messages[currentIndex].icon}
//             alt="notification icon"
//             width={messages[currentIndex].width}
//             height={messages[currentIndex].height}
//             className={`top-bar-icon ${
//               currentIndex !== 0 ? "bell-animate" : ""
//             }`}
//           />
//           <div className="top-bar-text-wrap">
//             {messages[currentIndex].content}
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className={`header-custom ${isScrolled ? "scrolled" : ""}`}>
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Logo */}
//             <div className="col-6 col-md-4">
//               <Link href="/">
//                 <div className="logo-hover-effect">
//                   <Image src={logo} alt="Logo" width={185} height={50} />
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <nav className="menu-wrapper d-none d-md-flex col-md-4 justify-content-center">
//               <Link href="/services" className="nav-link-custom">
//                 Services
//               </Link>
//               <Link href="/pricing" className="nav-link-custom">
//                 Pricing
//               </Link>
//               <Link href="/agencies" className="nav-link-custom">
//                 Agencies
//               </Link>
//               <Link href="/blogs" className="nav-link-custom">
//                 Blog
//               </Link>
//             </nav>

//             {/* Buttons + Hamburger */}
//             <div className="col-6 col-md-4 d-flex justify-content-end align-items-center gap-2">
//               <div className="d-none d-md-flex gap-2">
//                 <Link href="/login" className="btn-login">
//                   Log in
//                 </Link>
//                 <Link href="/start-free" className="btn-start">
//                   Start Free
//                 </Link>
//               </div>
//               <div className="d-md-none">
//                 <button
//                   className="hamburger-btn"
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   aria-label="Toggle menu"
//                 >
//                   ☰
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Nav */}
//           {mobileMenuOpen && (
//             <div className="mobile-nav d-flex flex-column align-items-end pe-3 mt-2">
//               <Link href="/services" className="nav-link-custom mb-1">
//                 Services
//               </Link>
//               <Link href="/pricing" className="nav-link-custom mb-1">
//                 Pricing
//               </Link>
//               <Link href="/agencies" className="nav-link-custom mb-1">
//                 Agencies
//               </Link>
//               <Link href="/blogs" className="nav-link-custom">
//                 Blog
//               </Link>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// }

// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import logo from "../public/images/lockleaks.svg";
import bellIcon from "../public/icons/Animated GIF BG.gif";
import trafficIcon from "../public/images/megaphone-icon.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.getIsAuthenticated());

  const messages = [
    {
      icon: bellIcon,
      width: 50,
      height: 30,
      content: (
        <>
          <strong>Get 20% OFF:</strong>{" "}
          <span className="top-bar-underline">
            Follow us on Twitter(X) (
            <a
              href="https://twitter.com/lock_leaks"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              @lock_leaks
            </a>
            ) and leave a review — get 20% discount on your next service.
          </span>
        </>
      ),
    },
    {
      icon: trafficIcon,
      width: 20,
      height: 30,
      content: (
        <>
          <strong>Game-Changer:</strong>{" "}
          <span className="top-bar-underline">
            <Link
              href="/services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Boost Your Traffic – Recover Lost Subscribers from Pirated Sites!
            </Link>
          </span>
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Placeholder to prevent content jump when header becomes fixed */}
      {isFixed && <div style={{ height: "70px" }} />}

      {/* Top Notification Bar */}
      <div className="top-bar-custom">
        <div className="top-bar-content">
          <Image
            src={messages[currentIndex].icon}
            alt="notification icon"
            width={messages[currentIndex].width}
            height={messages[currentIndex].height}
            className={`top-bar-icon ${
              currentIndex !== 0 ? "bell-animate" : ""
            }`}
          />
          <div className="top-bar-text-wrap">
            {messages[currentIndex].content}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header-custom ${isFixed ? "fixed" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-md-4">
              <Link href="/">
                <div className="logo-hover-effect">
                  <Image src={logo} alt="Logo" width={185} height={50} />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="menu-wrapper d-none d-md-flex col-md-4 justify-content-center">
              <Link href="/services" className="nav-link-custom">
                Services
              </Link>
              <Link href="/pricing" className="nav-link-custom">
                Pricing
              </Link>
              <Link href="/agencies" className="nav-link-custom">
                Agencies
              </Link>
              <Link href="/blogs" className="nav-link-custom">
                Blog
              </Link>
            </nav>

            {/* Buttons + Hamburger */}
            <div className="col-6 col-md-4 d-flex justify-content-end align-items-center gap-2">
              <div className="d-none d-md-flex gap-2">
                {isAuthenticated ? (
                  <button
                    className="btn-start"
                    onClick={() => router.push("/dashboard")}
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      className="btn-login"
                      onClick={() => router.push("/login")}
                    >
                      Log in
                    </button>
                    <button
                      className="btn-start"
                      onClick={() => router.push("/start-free")}
                    >
                      Start Free
                    </button>
                  </>
                )}
              </div>
              <div className="d-md-none">
                <button
                  className="hamburger-btn"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="mobile-nav d-flex flex-column align-items-end pe-3 mt-2">
              <Link href="/services" className="nav-link-custom mb-1">
                Services
              </Link>
              <Link href="/pricing" className="nav-link-custom mb-1">
                Pricing
              </Link>
              <Link href="/agencies" className="nav-link-custom mb-1">
                Agencies
              </Link>
              <Link href="/blogs" className="nav-link-custom">
                Blog
              </Link>
              {isAuthenticated ? (
                <button
                  className="btn-start mt-2"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <>
                  <button
                    className="btn-login mt-2"
                    onClick={() => router.push("/login")}
                  >
                    Log in
                  </button>
                  <button
                    className="btn-start mt-2"
                    onClick={() => router.push("/signup")}
                  >
                    Start Free
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
