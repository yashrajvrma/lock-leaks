module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/zustand [external] (zustand, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("zustand");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/zustand/middleware [external] (zustand/middleware, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("zustand/middleware");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/store/auth-store.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// @ts-nocheck
__turbopack_context__.s({
    "useAuthStore": (()=>useAuthStore)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand$2f$middleware__$5b$external$5d$__$28$zustand$2f$middleware$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zustand/middleware [external] (zustand/middleware, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand$2f$middleware__$5b$external$5d$__$28$zustand$2f$middleware$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand$2f$middleware__$5b$external$5d$__$28$zustand$2f$middleware$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$29$__["create"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand$2f$middleware__$5b$external$5d$__$28$zustand$2f$middleware$2c$__esm_import$29$__["persist"])((set, get)=>({
        // State
        user: null,
        token: null,
        isAuthenticated: false,
        // Actions
        setUser: (user)=>set({
                user,
                isAuthenticated: !!user
            }),
        setToken: (token)=>set({
                token,
                isAuthenticated: !!token
            }),
        login: (user, token)=>set({
                user,
                token,
                isAuthenticated: true
            }),
        logout: ()=>set({
                user: null,
                token: null,
                isAuthenticated: false
            }),
        // Getters
        getToken: ()=>get().token,
        getUser: ()=>get().user,
        getIsAuthenticated: ()=>get().isAuthenticated
    }), {
    name: "auth-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand$2f$middleware__$5b$external$5d$__$28$zustand$2f$middleware$2c$__esm_import$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated
        })
}));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/public/images/lockleaks.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/lockleaks.49e5809e.svg");}}),
"[project]/public/images/lockleaks.svg.mjs { IMAGE => \"[project]/public/images/lockleaks.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/lockleaks.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 186,
    height: 51,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/icons/Animated GIF BG.gif (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Animated GIF BG.f0f7c30b.gif");}}),
"[project]/public/icons/Animated GIF BG.gif.mjs { IMAGE => \"[project]/public/icons/Animated GIF BG.gif (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/Animated GIF BG.gif (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$29$__["default"],
    width: 50,
    height: 30,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/megaphone-icon.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/megaphone-icon.575f38e1.svg");}}),
"[project]/public/images/megaphone-icon.svg.mjs { IMAGE => \"[project]/public/images/megaphone-icon.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/megaphone-icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 18,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/newheader.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
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
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/auth-store.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/lockleaks.svg.mjs { IMAGE => "[project]/public/images/lockleaks.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/Animated GIF BG.gif.mjs { IMAGE => "[project]/public/icons/Animated GIF BG.gif (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/megaphone-icon.svg.mjs { IMAGE => "[project]/public/images/megaphone-icon.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
"use client";
;
;
;
;
;
;
;
;
;
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isFixed, setIsFixed] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$auth$2d$store$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.getIsAuthenticated());
    const messages = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$Animated__GIF__BG$2e$gif__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            width: 50,
            height: 30,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                        children: "Get 20% OFF:"
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "top-bar-underline",
                        children: [
                            "Follow us on Twitter(X) (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com/lock_leaks",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "white",
                                    textDecoration: "none"
                                },
                                children: "@lock_leaks"
                            }, void 0, false, {
                                fileName: "[project]/components/newheader.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            ") and leave a review — get 20% discount on your next service."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$megaphone$2d$icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            width: 20,
            height: 30,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                        children: "Game-Changer:"
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "top-bar-underline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            style: {
                                color: "white",
                                textDecoration: "none"
                            },
                            children: "Boost Your Traffic – Recover Lost Subscribers from Pirated Sites!"
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/newheader.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % messages.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        messages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setIsFixed(window.scrollY > 0);
        };
        window.addEventListener("scroll", onScroll);
        onScroll(); // run once on mount
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            isFixed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    height: "70px"
                }
            }, void 0, false, {
                fileName: "[project]/components/newheader.tsx",
                lineNumber: 254,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "top-bar-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "top-bar-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: messages[currentIndex].icon,
                            alt: "notification icon",
                            width: messages[currentIndex].width,
                            height: messages[currentIndex].height,
                            className: `top-bar-icon ${currentIndex !== 0 ? "bell-animate" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "top-bar-text-wrap",
                            children: messages[currentIndex].content
                        }, void 0, false, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/newheader.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/newheader.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: `header-custom ${isFixed ? "fixed" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "col-6 col-md-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "logo-hover-effect",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "Logo",
                                                width: 185,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/components/newheader.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/newheader.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                    className: "menu-wrapper d-none d-md-flex col-md-4 justify-content-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "nav-link-custom",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "nav-link-custom",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/agencies",
                                            className: "nav-link-custom",
                                            children: "Agencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blogs",
                                            className: "nav-link-custom",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "col-6 col-md-4 d-flex justify-content-end align-items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "d-none d-md-flex gap-2",
                                            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "btn-start",
                                                onClick: ()=>router.push("/dashboard"),
                                                children: "Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/components/newheader.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        className: "btn-login",
                                                        onClick: ()=>router.push("/login"),
                                                        children: "Log in"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/newheader.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        className: "btn-start",
                                                        onClick: ()=>router.push("/start-free"),
                                                        children: "Start Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/newheader.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "d-md-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "hamburger-btn",
                                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                                "aria-label": "Toggle menu",
                                                children: "☰"
                                            }, void 0, false, {
                                                fileName: "[project]/components/newheader.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mobile-nav d-flex flex-column align-items-end pe-3 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    className: "nav-link-custom mb-1",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/pricing",
                                    className: "nav-link-custom mb-1",
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/agencies",
                                    className: "nav-link-custom mb-1",
                                    children: "Agencies"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blogs",
                                    className: "nav-link-custom",
                                    children: "Blog"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "btn-start mt-2",
                                    onClick: ()=>router.push("/dashboard"),
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/newheader.tsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "btn-login mt-2",
                                            onClick: ()=>router.push("/login"),
                                            children: "Log in"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 366,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "btn-start mt-2",
                                            onClick: ()=>router.push("/signup"),
                                            children: "Start Free"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newheader.tsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newheader.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/newheader.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/newheader.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/CheckPrivateContentFree.tsx [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import React, { useState, useEffect } from "react";
// import "../styles/CheckPrivateContent.css";
// import "../styles/Newheader.css";
// import Image from "next/image";
// import proimg from "../public/images/pro.png";
// type PlatformKey =
//   | "OnlyFans"
//   | "Fansly"
//   | "Fanvue"
//   | "My.Club"
//   | "Patreon"
//   | "Manyvids"
//   | "Just For Fans"
//   | "Fancentro"
//   | "iFans"
//   | "LoyalFans"
//   | "Chaturbate"
//   | "MFC"
//   | "Stripchat"
//   | "Streamate"
//   | "LiveJasmin"
//   | "BongaCams"
//   | "CAM4"
//   | "CamSoda"
//   | "Jerkmate"
//   | "Twitter(X)"
//   | "TikTok"
//   | "Instagram"
//   | "Reddit"
//   | "Facebook"
//   | "Custom";
// const subscriptionPlatforms: PlatformKey[] = [
//   "OnlyFans",
//   "Fansly",
//   "Fanvue",
//   "My.Club",
//   "Patreon",
//   "Manyvids",
//   "Just For Fans",
//   "Fancentro",
//   "iFans",
//   "LoyalFans",
// ];
// const streamingPlatforms: PlatformKey[] = [
//   "Chaturbate",
//   "MFC",
//   "Stripchat",
//   "Streamate",
//   "LiveJasmin",
//   "BongaCams",
//   "CAM4",
//   "CamSoda",
//   "Jerkmate",
// ];
// const socialPlatforms: PlatformKey[] = [
//   "Twitter(X)",
//   "TikTok",
//   "Instagram",
//   "Reddit",
//   "Facebook",
// ];
// const TOTAL_STEPS = 5; // Added Step 5
// const CheckPrivateContentFree: React.FC = () => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedPlatforms, setSelectedPlatforms] = useState<Set<PlatformKey>>(
//     new Set()
//   );
//   const [accountUrls, setAccountUrls] = useState<string[]>([""]);
//   const [verificationMethod, setVerificationMethod] = useState<
//     "email" | "dns" | "file" | "none"
//   >("email");
//   const togglePlatform = (p: PlatformKey) => {
//     setSelectedPlatforms((prev) => {
//       const next = new Set(prev);
//       if (next.has(p)) next.delete(p);
//       else next.add(p);
//       return next;
//     });
//   };
//   const addUrlField = () => setAccountUrls((u) => [...u, ""]);
//   const updateUrl = (idx: number, val: string) =>
//     setAccountUrls((u) => u.map((v, i) => (i === idx ? val : v)));
//   const resetWizard = () => {
//     setStep(1);
//     setSelectedPlatforms(new Set());
//     setAccountUrls([""]);
//     setVerificationMethod("email");
//   };
//   const nextStep = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
//   const prevStep = () => setStep((s) => Math.max(1, s - 1));
//   const handleFinish = () => {
//     const el = document.getElementById("closePlatformModalBtn");
//     el?.click();
//   };
//   const handleCopy = () => {
//     navigator.clipboard.writeText(
//       "Content protected and enforced by lockleaks.com."
//     );
//     alert("Copied to clipboard!");
//   };
//   const StepFooter = () => (
//     <div className="d-flex justify-content-end align-items-center mt-4">
//       <div className="d-flex gap-2">
//         <button
//           type="button"
//           className="btn btn-outline-light"
//           onClick={prevStep}
//           disabled={step === 1}
//         >
//           Back
//         </button>
//         {step < TOTAL_STEPS ? (
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={nextStep}
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={handleFinish}
//           >
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
//   // --------------------- STEP 1 ----------------------
//   const Step1Platforms = () => (
//     <>
//       <h6 className="platform-heading">Subscription Platforms</h6>
//       <div className="platform-grid">
//         {subscriptionPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Streaming Platforms</h6>
//       <div className="platform-grid">
//         {streamingPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Social Media Platforms</h6>
//       <div className="platform-grid">
//         {socialPlatforms.map((platform, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className={`platform-btn ${
//               selectedPlatforms.has(platform) ? "active" : ""
//             }`}
//             onClick={() => togglePlatform(platform)}
//           >
//             {platform}
//           </button>
//         ))}
//       </div>
//       <h6 className="platform-heading mt-4">Other Platforms</h6>
//       <div className="platform-grid">
//         <button
//           type="button"
//           className={`platform-btn ${
//             selectedPlatforms.has("Custom") ? "active" : ""
//           }`}
//           onClick={() => togglePlatform("Custom")}
//         >
//           + Add Custom Platform
//         </button>
//       </div>
//     </>
//   );
//   // --------------------- STEP 2 ----------------------
//   const Step2Urls = () => (
//     <div>
//       <div className="text-center my-3">
//         <h5 className="form-heading">Just enter your username</h5>
//         <div className="d-flex justify-content-center">
//           <div className="input-group mb-3 custom-input-group">
//             <input
//               type="url"
//               className="form-control custom-input"
//               placeholder="https://onlyfans.com/@username"
//               value={accountUrls[0]}
//               onChange={(e) => updateUrl(0, e.target.value)}
//             />
//             <button
//               type="button"
//               className="btn btn-pink"
//               onClick={() => console.log("Save clicked")}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3">
//         <button
//           type="button"
//           className="btn custom-btn-free p-0"
//           onClick={addUrlField}
//         >
//           Add Account from Another Platform
//         </button>
//       </div>
//     </div>
//   );
//   // --------------------- STEP 3 ----------------------
//   const Step3Verify = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({ email: "", password: "" });
//     const validate = () => {
//       const newErrors = { email: "", password: "" };
//       if (!email.includes("@"))
//         newErrors.email = "Please enter a valid email address";
//       if (password.length < 6)
//         newErrors.password = "Don't forget to set your password!";
//       setErrors(newErrors);
//       return !newErrors.email && !newErrors.password;
//     };
//     const handleNextStep = () => {
//       if (validate()) nextStep();
//     };
//     return (
//       <div className="step3-container">
//         <p className="text-muted text-center mb-4">
//           Enter your email and set a password for your free scan account.
//         </p>
//         <div className="d-flex gap-3 mb-2">
//           <div className="flex-fill">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               placeholder="your@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && (
//               <small className="text-danger">{errors.email}</small>
//             )}
//           </div>
//           <div className="flex-fill">
//             <label>Password</label>
//             <input
//               type="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <small className="text-danger">{errors.password}</small>
//             )}
//           </div>
//         </div>
//         <p className="text-center text-muted mb-3">
//           Note: (Required for scan updates and account creation.)
//         </p>
//         <h6 className="text-center mb-2">
//           Select Your Preferred Contact Method
//         </h6>
//         <div className="list-group mb-3">
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "email"}
//               onChange={() => setVerificationMethod("email")}
//             />
//             Your WhatsApp Number
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "dns"}
//               onChange={() => setVerificationMethod("dns")}
//             />
//             Phone Number
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "file"}
//               onChange={() => setVerificationMethod("file")}
//             />
//             Live Chat
//           </label>
//           <label className="list-group-item">
//             <input
//               type="radio"
//               name="verify"
//               className="me-2"
//               checked={verificationMethod === "none"}
//               onChange={() => setVerificationMethod("none")}
//             />
//             Email Only
//           </label>
//         </div>
//         <div className="text-center">
//           <button
//             type="button"
//             className="btn btn-pink px-4"
//             onClick={handleNextStep}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   };
//   // --------------------- STEP 4 ----------------------
//   const Step4Protect = () => (
//     <div className="step text-center">
//       <h3 className="popup-heading">Protect Your Content</h3>
//       <p className="popup-description">
//         To ensure your content is protected and enforced, add the following line
//         to your profile description:
//       </p>
//       <p className="popup-instruction">
//         Just copy the text above and paste it into your profile description on
//         OnlyFans or any other platform.
//       </p>
//       <input
//         type="text"
//         className="input-field gradient-text"
//         readOnly
//         value="Content protected and enforced by lockleaks.com."
//       />
//       <div className="text-start mb-4">
//         <button
//           className="btn text-white"
//           style={{ backgroundColor: "#CF3CA6" }}
//           onClick={handleCopy}
//         >
//           Copy to Clipboard
//         </button>
//       </div>
//       <h5 className="profile-preview-heading">
//         How It Should Look on Your Profile:
//       </h5>
//       <Image
//         src={proimg}
//         alt="Example Preview"
//         className="popup-image mb-3 d-block mx-auto"
//       />
//     </div>
//   );
//   // --------------------- STEP 5 (NEW) ----------------------
//   const Step5Scanning = () => {
//     const [progress, setProgress] = useState(0);
//     const [iconIndex, setIconIndex] = useState(0);
//     const icons = [
//       "/icons/folder.svg",
//       "/icons/1download.svg",
//       "/icons/11search.svg",
//     ]; // Replace with your actual icon paths
//     // Progress simulation
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setProgress((prev) => {
//           let newVal = prev + (Math.random() * 10 - 5);
//           if (newVal < 0) newVal = 0;
//           if (newVal > 100) newVal = 100;
//           return parseFloat(newVal.toFixed(2));
//         });
//       }, 800);
//       return () => clearInterval(interval);
//     }, []);
//     // Icon rotation
//     useEffect(() => {
//       const iconTimer = setInterval(() => {
//         setIconIndex((prev) => (prev + 1) % icons.length);
//       }, 1500);
//       return () => clearInterval(iconTimer);
//     }, []);
//     return (
//       <div className="step5-scanning text-center">
//         <h3 className="popup-heading mb-3">Scanning in Progress</h3>
//         <p className="popup-description">
//           Please note: The full scan and review may take between 12 to 24 hours.
//           You will be contacted as soon as the results are ready.
//         </p>
//         <p className="popup-instruction mb-4">
//           Stay tuned! We’ll send you updates as soon as your scan is ready.
//         </p>
//         <div className="scanning-box">
//           <div className="scanning-text gradient-loading">Scanning...</div>
//           <div className="scan-progress">{progress.toFixed(2)}%</div>
//           <div className="scan-icons">
//             <Image src={icons[iconIndex]} width={50} height={50} alt="icon" />
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
//         {/* Left Column */}
//         <div className="col-md-6 platform-login-box text-center">
//           <div className="check-header">
//             Check if your private content has been leaked
//           </div>
//           <div className="check-sub">Free & Secure</div>
//           <p className="check-instruction">
//             Please provide the URLs of your primary accounts across all
//             platforms you use, even if they are{" "}
//             <strong>no longer active</strong>. This helps ensure comprehensive
//             protection.
//           </p>
//           <div
//             className="add-account-box"
//             data-bs-toggle="modal"
//             data-bs-target="#platformModal"
//             onClick={resetWizard}
//           >
//             <span>Add Your Accounts</span>
//             <Image
//               src="/icons/accountfinger.svg"
//               width={24}
//               height={24}
//               alt="account"
//             />
//           </div>
//         </div>
//         {/* Right Column */}
//         <div className="col-md-6 dailogs-info-box p-0">
//           {/* carousel remains unchanged */}
//         </div>
//       </div>
//       {/* Modal */}
//       <div
//         className="modal fade"
//         id="platformModal"
//         tabIndex={-1}
//         aria-labelledby="platformModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
//           <div className="modal-content custom-popup text-white">
//             <div className="modal-header border-0">
//               <h5
//                 className="modal-title w-100 text-center"
//                 id="platformModalLabel"
//               >
//                 {step === 1 && "Select your platform"}
//                 {step === 2 && "Add your OnlyFans account"}
//                 {step === 3 && "Add your contact information"}
//                 {step === 4 && "Protect Your Content"}
//                 {step === 5 && "Scanning in Progress"}
//               </h5>
//               <button
//                 id="closePlatformModalBtn"
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {step === 1 && <Step1Platforms />}
//               {step === 2 && <Step2Urls />}
//               {step === 3 && <Step3Verify />}
//               {step === 4 && <Step4Protect />}
//               {step === 5 && <Step5Scanning />}
//               <StepFooter />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CheckPrivateContentFree
// "use client";
// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import proimg from "../public/images/pro.png";
// import "../styles/CheckPrivateContent.css";
// import "../styles/Newheader.css";
// type PlatformKey =
//   | "OnlyFans"
//   | "Fansly"
//   | "Fanvue"
//   | "My.Club"
//   | "Patreon"
//   | "Manyvids"
//   | "Just For Fans"
//   | "Fancentro"
//   | "iFans"
//   | "LoyalFans"
//   | "Chaturbate"
//   | "MFC"
//   | "Stripchat"
//   | "Streamate"
//   | "LiveJasmin"
//   | "BongaCams"
//   | "CAM4"
//   | "CamSoda"
//   | "Jerkmate"
//   | "Twitter(X)"
//   | "TikTok"
//   | "Instagram"
//   | "Reddit"
//   | "Facebook"
//   | "Custom";
// type ContactMethod = "whatsapp" | "phone" | "email" | "livechat";
// const subscriptionPlatforms: PlatformKey[] = [
//   "OnlyFans",
//   "Fansly",
//   "Fanvue",
//   "My.Club",
//   "Patreon",
//   "Manyvids",
//   "Just For Fans",
//   "Fancentro",
//   "iFans",
//   "LoyalFans",
// ];
// const streamingPlatforms: PlatformKey[] = [
//   "Chaturbate",
//   "MFC",
//   "Stripchat",
//   "Streamate",
//   "LiveJasmin",
//   "BongaCams",
//   "CAM4",
//   "CamSoda",
//   "Jerkmate",
// ];
// const socialPlatforms: PlatformKey[] = [
//   "Twitter(X)",
//   "TikTok",
//   "Instagram",
//   "Reddit",
//   "Facebook",
// ];
// const TOTAL_STEPS = 5;
// const CheckPrivateContentFree: React.FC = () => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedPlatform, setSelectedPlatform] = useState<string>("");
//   const [customPlatform, setCustomPlatform] = useState<string>("");
//   const [showCustomInput, setShowCustomInput] = useState<boolean>(false);
//   const [username, setUsername] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
//   const [contactValue, setContactValue] = useState<string>("");
//   const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const router = useRouter();
//   const resetWizard = useCallback(() => {
//     setStep(1);
//     setSelectedPlatform("");
//     setCustomPlatform("");
//     setShowCustomInput(false);
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     setContactMethod("whatsapp");
//     setContactValue("");
//     setAgreedToTerms(false);
//     setErrors({});
//   }, []);
//   const getContactPlaceholder = useCallback(() => {
//     switch (contactMethod) {
//       case "whatsapp":
//         return "+1234567890";
//       case "phone":
//         return "+1234567890";
//       case "email":
//         return "contact@email.com";
//       case "livechat":
//         return "Enter your live chat username";
//       default:
//         return "";
//     }
//   }, [contactMethod]);
//   const getContactLabel = useCallback(() => {
//     switch (contactMethod) {
//       case "whatsapp":
//         return "WhatsApp Number";
//       case "phone":
//         return "Phone Number";
//       case "email":
//         return "Email Address";
//       case "livechat":
//         return "Live Chat Username";
//       default:
//         return "Contact Information";
//     }
//   }, [contactMethod]);
//   const validateStep = useCallback(
//     (currentStep: number): boolean => {
//       const newErrors: { [key: string]: string } = {};
//       switch (currentStep) {
//         case 1:
//           if (!selectedPlatform) {
//             newErrors.platform = "Please select a platform";
//           }
//           if (selectedPlatform === "Custom" && !customPlatform.trim()) {
//             newErrors.customPlatform = "Please enter custom platform name";
//           }
//           break;
//         case 2:
//           if (!username.trim()) {
//             newErrors.username = "Please enter your username";
//           }
//           break;
//         case 3:
//           if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//             newErrors.email = "Please enter a valid email address";
//           }
//           if (!password.trim() || password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters";
//           }
//           if (!contactValue.trim()) {
//             newErrors.contactValue = `Please enter your ${getContactLabel()}`;
//           }
//           // Validate phone numbers (WhatsApp and Phone)
//           if (contactMethod === "phone" || contactMethod === "whatsapp") {
//             const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
//             const cleanNumber = contactValue.replace(/[\s\-\(\)]/g, "");
//             if (!phoneRegex.test(cleanNumber)) {
//               newErrors.contactValue =
//                 "Please enter a valid phone number with country code (e.g., +1234567890)";
//             }
//           }
//           // Validate email format if email is selected as contact method
//           if (
//             contactMethod === "email" &&
//             !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)
//           ) {
//             newErrors.contactValue = "Please enter a valid email address";
//           }
//           break;
//         case 4:
//           if (!agreedToTerms) {
//             newErrors.terms = "Please agree to the terms and conditions";
//           }
//           break;
//       }
//       setErrors(newErrors);
//       return Object.keys(newErrors).length === 0;
//     },
//     [
//       selectedPlatform,
//       customPlatform,
//       username,
//       email,
//       password,
//       contactMethod,
//       contactValue,
//       agreedToTerms,
//       getContactLabel,
//     ]
//   );
//   const nextStep = useCallback(() => {
//     if (validateStep(step)) {
//       setStep((s) => Math.min(TOTAL_STEPS, s + 1));
//     }
//   }, [step, validateStep]);
//   const prevStep = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);
//   const handlePlatformSelect = useCallback((platform: PlatformKey) => {
//     if (platform === "Custom") {
//       setShowCustomInput(true);
//       setSelectedPlatform("Custom");
//     } else {
//       setShowCustomInput(false);
//       setSelectedPlatform(platform);
//       setCustomPlatform("");
//     }
//     // Clear platform error when selection is made
//     setErrors((prev) => ({ ...prev, platform: "" }));
//   }, []);
//   const handleSubmit = useCallback(async () => {
//     if (!validateStep(4)) return;
//     setIsLoading(true);
//     try {
//       const platformName =
//         selectedPlatform === "Custom" ? customPlatform : selectedPlatform;
//       const requestBody: any = {
//         pricingName: "FREE",
//         billed: "MONTHLY",
//         platform: platformName.toLowerCase(),
//         username: username,
//         email: email,
//         password: password,
//       };
//       // Add contact method based on selection
//       switch (contactMethod) {
//         case "whatsapp":
//           requestBody.contactWhatsappNumber = contactValue;
//           break;
//         case "phone":
//           requestBody.contactPhoneNumber = contactValue;
//           break;
//         case "email":
//           requestBody.contactEmail = contactValue;
//           break;
//         case "livechat":
//           requestBody.contactLiveChat = contactValue;
//           break;
//       }
//       const response = await axios.post(
//         "http://localhost:8000/v1/api/auth/signup",
//         requestBody,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.data.success) {
//         toast.success("Account created successfully!");
//         // Move to step 5 (scanning) instead of closing modal immediately
//         setStep(5);
//         // After 3 seconds, close modal and redirect
//         setTimeout(() => {
//           const closeButton = document.getElementById("closePlatformModalBtn");
//           closeButton?.click();
//           setTimeout(() => {
//             router.push("/");
//           }, 500);
//         }, 3000);
//       }
//     } catch (error: any) {
//       const errorMessage =
//         error.response?.data?.message ||
//         "Registration failed. Please try again.";
//       toast.error(errorMessage);
//       console.error("Registration error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [
//     validateStep,
//     selectedPlatform,
//     customPlatform,
//     username,
//     email,
//     password,
//     contactMethod,
//     contactValue,
//     router,
//   ]);
//   const handleFinish = useCallback(() => {
//     const el = document.getElementById("closePlatformModalBtn");
//     el?.click();
//     router.push("/");
//   }, [router]);
//   const handleContactMethodChange = useCallback((method: ContactMethod) => {
//     setContactMethod(method);
//     setContactValue("");
//     setErrors((prev) => ({ ...prev, contactValue: "" }));
//   }, []);
//   const handleUsernameChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setUsername(e.target.value);
//     },
//     []
//   );
//   const handleEmailChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setEmail(e.target.value);
//     },
//     []
//   );
//   const handlePasswordChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setPassword(e.target.value);
//     },
//     []
//   );
//   const handleContactValueChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setContactValue(e.target.value);
//     },
//     []
//   );
//   const handleCustomPlatformChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setCustomPlatform(e.target.value);
//     },
//     []
//   );
//   const StepFooter = useMemo(
//     () => (
//       <div className="d-flex justify-content-end align-items-center mt-4">
//         <div className="d-flex gap-2">
//           {step < 5 && (
//             <button
//               type="button"
//               className="btn btn-outline-light"
//               onClick={prevStep}
//               disabled={step === 1}
//             >
//               Back
//             </button>
//           )}
//           {step < 4 ? (
//             <button
//               type="button"
//               className="btn btn-pink px-4"
//               onClick={nextStep}
//             >
//               Next
//             </button>
//           ) : step === 4 ? (
//             <button
//               type="button"
//               className="btn btn-pink px-4"
//               onClick={handleSubmit}
//               disabled={isLoading}
//             >
//               {isLoading ? "Creating Account..." : "Submit"}
//             </button>
//           ) : (
//             <button
//               type="button"
//               className="btn btn-pink px-4"
//               onClick={handleFinish}
//             >
//               Finish
//             </button>
//           )}
//         </div>
//       </div>
//     ),
//     [step, prevStep, nextStep, handleSubmit, handleFinish, isLoading]
//   );
//   // Step 1 - Platform Selection
//   const Step1Platforms = useMemo(
//     () => (
//       <>
//         <h6 className="platform-heading text-white">Subscription Platforms</h6>
//         <div className="platform-grid">
//           {subscriptionPlatforms.map((platform, idx) => (
//             <button
//               key={idx}
//               type="button"
//               className={`platform-btn ${
//                 selectedPlatform === platform ? "active selected" : ""
//               }`}
//               onClick={() => handlePlatformSelect(platform)}
//               style={{
//                 backgroundColor:
//                   selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
//                 border:
//                   selectedPlatform === platform
//                     ? "2px solid #CF3CA6"
//                     : "1px solid #555",
//                 color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
//                 transform:
//                   selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
//                 boxShadow:
//                   selectedPlatform === platform
//                     ? "0 0 10px rgba(207, 60, 166, 0.3)"
//                     : "none",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {selectedPlatform === platform && <span className="me-2">✓</span>}
//               {platform}
//             </button>
//           ))}
//         </div>
//         <h6 className="platform-heading mt-4 text-white">
//           Streaming Platforms
//         </h6>
//         <div className="platform-grid">
//           {streamingPlatforms.map((platform, idx) => (
//             <button
//               key={idx}
//               type="button"
//               className={`platform-btn ${
//                 selectedPlatform === platform ? "active selected" : ""
//               }`}
//               onClick={() => handlePlatformSelect(platform)}
//               style={{
//                 backgroundColor:
//                   selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
//                 border:
//                   selectedPlatform === platform
//                     ? "2px solid #CF3CA6"
//                     : "1px solid #555",
//                 color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
//                 transform:
//                   selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
//                 boxShadow:
//                   selectedPlatform === platform
//                     ? "0 0 10px rgba(207, 60, 166, 0.3)"
//                     : "none",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {selectedPlatform === platform && <span className="me-2">✓</span>}
//               {platform}
//             </button>
//           ))}
//         </div>
//         <h6 className="platform-heading mt-4 text-white">
//           Social Media Platforms
//         </h6>
//         <div className="platform-grid">
//           {socialPlatforms.map((platform, idx) => (
//             <button
//               key={idx}
//               type="button"
//               className={`platform-btn ${
//                 selectedPlatform === platform ? "active selected" : ""
//               }`}
//               onClick={() => handlePlatformSelect(platform)}
//               style={{
//                 backgroundColor:
//                   selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
//                 border:
//                   selectedPlatform === platform
//                     ? "2px solid #CF3CA6"
//                     : "1px solid #555",
//                 color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
//                 transform:
//                   selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
//                 boxShadow:
//                   selectedPlatform === platform
//                     ? "0 0 10px rgba(207, 60, 166, 0.3)"
//                     : "none",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {selectedPlatform === platform && <span className="me-2">✓</span>}
//               {platform}
//             </button>
//           ))}
//         </div>
//         <h6 className="platform-heading mt-4 text-white">Other Platforms</h6>
//         <div className="platform-grid">
//           <button
//             type="button"
//             className={`platform-btn ${
//               selectedPlatform === "Custom" ? "active selected" : ""
//             }`}
//             onClick={() => handlePlatformSelect("Custom")}
//             style={{
//               backgroundColor:
//                 selectedPlatform === "Custom" ? "#CF3CA6" : "#2a2a2a",
//               border:
//                 selectedPlatform === "Custom"
//                   ? "2px solid #CF3CA6"
//                   : "1px solid #555",
//               color: selectedPlatform === "Custom" ? "#ffffff" : "#cccccc",
//               transform:
//                 selectedPlatform === "Custom" ? "scale(1.02)" : "scale(1)",
//               boxShadow:
//                 selectedPlatform === "Custom"
//                   ? "0 0 10px rgba(207, 60, 166, 0.3)"
//                   : "none",
//               transition: "all 0.2s ease",
//             }}
//           >
//             {selectedPlatform === "Custom" && <span className="me-2">✓</span>}+
//             Add Custom Platform
//           </button>
//         </div>
//         {showCustomInput && (
//           <div className="mt-3">
//             <Input
//               type="text"
//               className={`${errors.customPlatform ? "border-red-500" : ""}`}
//               placeholder="Enter custom platform name"
//               value={customPlatform}
//               onChange={handleCustomPlatformChange}
//               style={{
//                 backgroundColor: "#2a2a2a",
//                 border: "1px solid #555",
//                 color: "#ffffff",
//               }}
//               autoFocus
//               autoComplete="off"
//             />
//             {errors.customPlatform && (
//               <small className="text-danger d-block mt-1">
//                 {errors.customPlatform}
//               </small>
//             )}
//           </div>
//         )}
//         {errors.platform && (
//           <div className="text-danger mt-2 text-center">{errors.platform}</div>
//         )}
//       </>
//     ),
//     [
//       selectedPlatform,
//       showCustomInput,
//       customPlatform,
//       errors,
//       handlePlatformSelect,
//       handleCustomPlatformChange,
//     ]
//   );
//   // Step 2 - Username Input
//   const Step2Username = useMemo(() => {
//     const platformName =
//       selectedPlatform === "Custom" ? customPlatform : selectedPlatform;
//     return (
//       <div>
//         <div className="text-center my-3">
//           <h5 className="form-heading text-white">
//             Add your {platformName} account
//           </h5>
//           <p className="text-muted mb-3">Just enter your username</p>
//           <div className="d-flex justify-content-center">
//             <div className="w-75">
//               <Input
//                 type="text"
//                 className={`${errors.username ? "border-red-500" : ""}`}
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 style={{
//                   backgroundColor: "#2a2a2a",
//                   border: "1px solid #555",
//                   color: "#ffffff",
//                 }}
//                 autoComplete="username"
//               />
//             </div>
//           </div>
//           {errors.username && (
//             <small className="text-danger d-block mt-2">
//               {errors.username}
//             </small>
//           )}
//         </div>
//       </div>
//     );
//   }, [
//     selectedPlatform,
//     customPlatform,
//     username,
//     errors.username,
//     handleUsernameChange,
//   ]);
//   // Step 3 - Contact Information
//   const Step3Contact = useMemo(
//     () => (
//       <div className="step3-container">
//         <p className="text-muted text-center mb-4">
//           Enter your email and set a password for your free scan account.
//         </p>
//         <div className="d-flex gap-3 mb-3">
//           <div className="flex-fill">
//             <label className="form-label text-white mb-2">Email Address</label>
//             <Input
//               type="email"
//               className={`${errors.email ? "border-red-500" : ""}`}
//               placeholder="your@email.com"
//               value={email}
//               onChange={handleEmailChange}
//               style={{
//                 backgroundColor: "#2a2a2a",
//                 border: "1px solid #555",
//                 color: "#ffffff",
//               }}
//               autoComplete="email"
//             />
//             {errors.email && (
//               <small className="text-danger d-block mt-1">{errors.email}</small>
//             )}
//           </div>
//           <div className="flex-fill">
//             <label className="form-label text-white mb-2">Password</label>
//             <Input
//               type="password"
//               className={`${errors.password ? "border-red-500" : ""}`}
//               placeholder="Enter password"
//               value={password}
//               onChange={handlePasswordChange}
//               style={{
//                 backgroundColor: "#2a2a2a",
//                 border: "1px solid #555",
//                 color: "#ffffff",
//               }}
//               autoComplete="new-password"
//             />
//             {errors.password && (
//               <small className="text-danger d-block mt-1">
//                 {errors.password}
//               </small>
//             )}
//           </div>
//         </div>
//         <p className="text-center text-muted mb-3">
//           Note: (Required for scan updates and account creation.)
//         </p>
//         <h6 className="text-center mb-3 text-white">
//           Select Your Preferred Contact Method
//         </h6>
//         <div className="list-group mb-3">
//           <label
//             className={`list-group-item d-flex align-items-center cursor-pointer ${
//               contactMethod === "whatsapp" ? "selected-contact" : ""
//             }`}
//             style={{
//               backgroundColor:
//                 contactMethod === "whatsapp" ? "#CF3CA6" : "#2a2a2a",
//               border:
//                 contactMethod === "whatsapp"
//                   ? "2px solid #CF3CA6"
//                   : "1px solid #555",
//               transition: "all 0.2s ease",
//             }}
//           >
//             <input
//               type="radio"
//               name="contactMethod"
//               className="me-2"
//               checked={contactMethod === "whatsapp"}
//               onChange={() => handleContactMethodChange("whatsapp")}
//             />
//             <span className="text-white">WhatsApp Number</span>
//             {contactMethod === "whatsapp" && (
//               <span className="ms-auto text-white">✓</span>
//             )}
//           </label>
//           <label
//             className={`list-group-item d-flex align-items-center cursor-pointer ${
//               contactMethod === "phone" ? "selected-contact" : ""
//             }`}
//             style={{
//               backgroundColor:
//                 contactMethod === "phone" ? "#CF3CA6" : "#2a2a2a",
//               border:
//                 contactMethod === "phone"
//                   ? "2px solid #CF3CA6"
//                   : "1px solid #555",
//               transition: "all 0.2s ease",
//             }}
//           >
//             <input
//               type="radio"
//               name="contactMethod"
//               className="me-2"
//               checked={contactMethod === "phone"}
//               onChange={() => handleContactMethodChange("phone")}
//             />
//             <span className="text-white">Phone Number</span>
//             {contactMethod === "phone" && (
//               <span className="ms-auto text-white">✓</span>
//             )}
//           </label>
//           <label
//             className={`list-group-item d-flex align-items-center cursor-pointer ${
//               contactMethod === "livechat" ? "selected-contact" : ""
//             }`}
//             style={{
//               backgroundColor:
//                 contactMethod === "livechat" ? "#CF3CA6" : "#2a2a2a",
//               border:
//                 contactMethod === "livechat"
//                   ? "2px solid #CF3CA6"
//                   : "1px solid #555",
//               transition: "all 0.2s ease",
//             }}
//           >
//             <input
//               type="radio"
//               name="contactMethod"
//               className="me-2"
//               checked={contactMethod === "livechat"}
//               onChange={() => handleContactMethodChange("livechat")}
//             />
//             <span className="text-white">Live Chat</span>
//             {contactMethod === "livechat" && (
//               <span className="ms-auto text-white">✓</span>
//             )}
//           </label>
//           <label
//             className={`list-group-item d-flex align-items-center cursor-pointer ${
//               contactMethod === "email" ? "selected-contact" : ""
//             }`}
//             style={{
//               backgroundColor:
//                 contactMethod === "email" ? "#CF3CA6" : "#2a2a2a",
//               border:
//                 contactMethod === "email"
//                   ? "2px solid #CF3CA6"
//                   : "1px solid #555",
//               transition: "all 0.2s ease",
//             }}
//           >
//             <input
//               type="radio"
//               name="contactMethod"
//               className="me-2"
//               checked={contactMethod === "email"}
//               onChange={() => handleContactMethodChange("email")}
//             />
//             <span className="text-white">Email Only</span>
//             {contactMethod === "email" && (
//               <span className="ms-auto text-white">✓</span>
//             )}
//           </label>
//         </div>
//         <div className="mb-3">
//           <label className="form-label text-white mb-2">
//             {getContactLabel()}
//           </label>
//           <Input
//             type={
//               contactMethod === "email"
//                 ? "email"
//                 : contactMethod === "phone" || contactMethod === "whatsapp"
//                 ? "tel"
//                 : "text"
//             }
//             className={`${errors.contactValue ? "border-red-500" : ""}`}
//             placeholder={getContactPlaceholder()}
//             value={contactValue}
//             onChange={handleContactValueChange}
//             style={{
//               backgroundColor: "#2a2a2a",
//               border: "1px solid #555",
//               color: "#ffffff",
//             }}
//             autoComplete="off"
//           />
//           {errors.contactValue && (
//             <small className="text-danger d-block mt-1">
//               {errors.contactValue}
//             </small>
//           )}
//         </div>
//       </div>
//     ),
//     [
//       email,
//       password,
//       contactMethod,
//       contactValue,
//       errors,
//       handleEmailChange,
//       handlePasswordChange,
//       handleContactMethodChange,
//       handleContactValueChange,
//       getContactLabel,
//       getContactPlaceholder,
//     ]
//   );
//   // Step 4 - Terms and Submit
//   const Step4Terms = useMemo(
//     () => (
//       <div className="step text-center">
//         <h3 className="popup-heading text-white">
//           Ready to Protect Your Content?
//         </h3>
//         <p className="popup-description">
//           You've selected the Free Plan for{" "}
//           {selectedPlatform === "Custom" ? customPlatform : selectedPlatform}
//         </p>
//         <p className="popup-instruction">
//           By proceeding, you confirm your registration to Lock Leaks.
//         </p>
//         <div className="mb-4">
//           <label className="d-flex align-items-center justify-content-center">
//             <input
//               type="checkbox"
//               className={`me-2 ${errors.terms ? "is-invalid" : ""}`}
//               checked={agreedToTerms}
//               onChange={(e) => setAgreedToTerms(e.target.checked)}
//             />
//             <span className="text-white">
//               You agree to our{" "}
//               <a href="#" className="text-pink">
//                 Terms and Conditions
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-pink">
//                 Privacy Policy
//               </a>
//               .
//             </span>
//           </label>
//           {errors.terms && (
//             <small className="text-danger d-block mt-1">{errors.terms}</small>
//           )}
//         </div>
//       </div>
//     ),
//     [selectedPlatform, customPlatform, agreedToTerms, errors.terms]
//   );
//   // Step 5 - Scanning
//   const Step5Scanning = () => {
//     const [progress, setProgress] = useState(0);
//     const [iconIndex, setIconIndex] = useState(0);
//     const icons = [
//       "/icons/folder.svg",
//       "/icons/1download.svg",
//       "/icons/11search.svg",
//     ];
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setProgress((prev) => {
//           let newVal = prev + Math.random() * 5;
//           if (newVal > 100) newVal = 100;
//           return parseFloat(newVal.toFixed(2));
//         });
//       }, 200);
//       return () => clearInterval(interval);
//     }, []);
//     useEffect(() => {
//       const iconTimer = setInterval(() => {
//         setIconIndex((prev) => (prev + 1) % icons.length);
//       }, 1500);
//       return () => clearInterval(iconTimer);
//     }, []);
//     return (
//       <div className="step5-scanning text-center">
//         <h3 className="popup-heading mb-3 text-white">
//           Account Created Successfully!
//         </h3>
//         <p className="popup-description">
//           Please note: The full scan and review may take between 12 to 24 hours.
//           You will be contacted as soon as the results are ready.
//         </p>
//         <p className="popup-instruction mb-4">
//           Stay tuned! We'll send you updates as soon as your scan is ready.
//         </p>
//         <div className="scanning-box">
//           <div className="scanning-text gradient-loading">
//             Initializing Scan...
//           </div>
//           <div className="scan-progress">{progress.toFixed(2)}%</div>
//           <div className="scan-icons">
//             <Image src={icons[iconIndex]} width={50} height={50} alt="icon" />
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
//         {/* Left Column */}
//         <div className="col-md-6 platform-login-box text-center">
//           <div className="check-header">
//             Check if your private content has been leaked
//           </div>
//           <div className="check-sub">Free & Secure</div>
//           <p className="check-instruction">
//             Please provide the URLs of your primary accounts across all
//             platforms you use, even if they are{" "}
//             <strong>no longer active</strong>. This helps ensure comprehensive
//             protection.
//           </p>
//           <div
//             className="add-account-box"
//             data-bs-toggle="modal"
//             data-bs-target="#platformModal"
//             onClick={resetWizard}
//           >
//             <span>Add Your Accounts</span>
//             <Image
//               src="/icons/accountfinger.svg"
//               width={24}
//               height={24}
//               alt="account"
//             />
//           </div>
//         </div>
//         {/* Right Column - keeping original carousel */}
//         <div className="col-md-6 dailogs-info-box p-0">
//           {/* Original carousel code here */}
//         </div>
//       </div>
//       {/* Modal */}
//       <div
//         className="modal fade"
//         id="platformModal"
//         tabIndex={-1}
//         aria-labelledby="platformModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
//           <div className="modal-content custom-popup text-white">
//             <div className="modal-header border-0">
//               <h5
//                 className="modal-title w-100 text-center"
//                 id="platformModalLabel"
//               >
//                 {step === 1 && "Select your platform"}
//                 {step === 2 &&
//                   `Add your ${
//                     selectedPlatform === "Custom"
//                       ? customPlatform
//                       : selectedPlatform
//                   } account`}
//                 {step === 3 && "Add your contact information"}
//                 {step === 4 && "Ready to Protect Your Content?"}
//                 {step === 5 && "Account Created Successfully!"}
//               </h5>
//               <button
//                 id="closePlatformModalBtn"
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {step === 1 && Step1Platforms}
//               {step === 2 && Step2Username}
//               {step === 3 && Step3Contact}
//               {step === 4 && Step4Terms}
//               {step === 5 && <Step5Scanning />}
//               {step < 5 && StepFooter}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CheckPrivateContentFree;
}}),
"[project]/public/icons/twitter.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/twitter.fb75b8c1.svg");}}),
"[project]/public/icons/twitter.svg.mjs { IMAGE => \"[project]/public/icons/twitter.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/twitter.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/icons/instagram.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/instagram.ec74aac7.svg");}}),
"[project]/public/icons/instagram.svg.mjs { IMAGE => \"[project]/public/icons/instagram.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/instagram.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/icons/tiktok.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tiktok.66934813.svg");}}),
"[project]/public/icons/tiktok.svg.mjs { IMAGE => \"[project]/public/icons/tiktok.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/tiktok.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/icons/reddit.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/reddit.b76a105c.svg");}}),
"[project]/public/icons/reddit.svg.mjs { IMAGE => \"[project]/public/icons/reddit.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/reddit.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 18,
    height: 20,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/icons/youtube.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/youtube.fabd2197.svg");}}),
"[project]/public/icons/youtube.svg.mjs { IMAGE => \"[project]/public/icons/youtube.svg (static in ecmascript)\" } [ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/youtube.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 26,
    height: 26,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/footer.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/lockleaks.svg.mjs { IMAGE => "[project]/public/images/lockleaks.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/twitter.svg.mjs { IMAGE => "[project]/public/icons/twitter.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/instagram.svg.mjs { IMAGE => "[project]/public/icons/instagram.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/tiktok.svg.mjs { IMAGE => "[project]/public/icons/tiktok.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/reddit.svg.mjs { IMAGE => "[project]/public/icons/reddit.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/youtube.svg.mjs { IMAGE => "[project]/public/icons/youtube.svg (static in ecmascript)" } [ssr] (structured image object, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
function Footer() {
    // Icon and link pairs
    const socialLinks = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$twitter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$twitter$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Twitter',
            url: 'https://x.com/lock_leaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$tiktok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'TikTok',
            url: 'https://www.tiktok.com/@lockleaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Instagram',
            url: 'https://www.instagram.com/lockleaks/'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$reddit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$reddit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Threads',
            url: 'https://www.threads.com/@lockleaks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$youtube$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$youtube$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: 'Youtube',
            url: 'https://www.youtube.com/@lockleaks'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "custom-footer text-white pt-5 pb-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "footer container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column flex-md-row justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center text-md-start mb-3 mb-md-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$lockleaks$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "Logo",
                                        width: 185,
                                        height: 50
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "d-flex gap-2",
                                        children: socialLinks.map(({ icon, alt, url }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "bg-white d-flex align-items-center justify-content-center",
                                                style: {
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '4px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: icon,
                                                    alt: alt,
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center mb-3 mb-md-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "list-unstyled d-flex gap-4 mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/agencies",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Agencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blogs",
                                            className: "text-white text-decoration-none nav-link-custom",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center text-md-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/start",
                                className: "btn btn-start-free px-4",
                                children: "Start Free"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                    className: "border-secondary my-4"
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column flex-md-row justify-content-between align-items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mb-2 mb-md-0",
                            children: "Copyright: © 2025 Lock Leaks. All Right Reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    className: "text-white text-decoration-none",
                                    children: "Terms Of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "text-white text-decoration-none",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}}),
"[project]/pages/start-free.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/newheader.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckPrivateContentFree$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CheckPrivateContentFree.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const Start = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$newheader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckPrivateContentFree$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/start-free.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Start;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e20e4733._.js.map