(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/dailogs.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React from "react";
// import "../styles/Dailogs.css";
// import "../styles/DiscountBanner.css";
// const Dailogs = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100">
//       <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
//         {/* Left: Login Form */}
//         <div className="col-md-6 dailogs-login-box">
//           <button className="dailogs-btn-back">Back</button>
//           <h3 className="mb-4">Login</h3>
//           <form className="w-100" style={{ maxWidth: 350 }}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="form-control"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-control"
//                 placeholder="**********"
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn dailogs-btn-login mx-auto d-block"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//         {/* Right: Carousel */}
//         <div className="col-md-6 dailogs-info-box p-0">
//           <div
//             id="dailogsCarousel"
//             className="carousel slide h-100"
//             data-bs-ride="carousel"
//             data-bs-interval="3000"
//           >
//             <div className="carousel-indicators">
//               <button
//                 type="button"
//                 data-bs-target="#dailogsCarousel"
//                 data-bs-slide-to="0"
//                 className="active"
//                 aria-current="true"
//                 aria-label="Slide 1"
//               ></button>
//               <button
//                 type="button"
//                 data-bs-target="#dailogsCarousel"
//                 data-bs-slide-to="1"
//                 aria-label="Slide 2"
//               ></button>
//               <button
//                 type="button"
//                 data-bs-target="#dailogsCarousel"
//                 data-bs-slide-to="2"
//                 aria-label="Slide 3"
//               ></button>
//             </div>
//             <div className="carousel-inner h-100 d-flex align-items-center">
//               <div className="carousel-item active text-center px-4">
//                 <h4>Think You're Protected? Think Again.</h4>
//                 <p>Competitors remove surface leaks. We eliminate them deep.</p>
//                 <img
//                   src="/images/card.png"
//                   alt="Slide 1"
//                   className="img-fluid"
//                   style={{ maxWidth: "85%" }}
//                 />
//               </div>
//               <div className="carousel-item text-center px-4">
//                 <h4>Your Content Deserves the Best Protection.</h4>
//                 <p>
//                   We’re not just a leak removal service. Lock Leaks is a
//                   cybersecurity powerhouse, providing deep protection against
//                   leaks with continuous monitoring, real-time action, and
//                   proactive defense. We don’t stop at the surface — we secure
//                   your content everywhere.
//                 </p>
//                 <img
//                   src="/images/1card.png"
//                   alt="Slide 2"
//                   className="img-fluid"
//                   style={{ maxWidth: "85%", marginBottom: "30px" }}
//                 />
//                 <button className="chat-button">
//                   Buy Subscription
//                   <img
//                     src="/icons/Frame 122 1.svg"
//                     className="chat-pointer"
//                     alt="Pointer Icon"
//                   />
//                 </button>
//               </div>
//               <div className="carousel-item text-center px-4">
//                 <h4>Claim Your</h4>
//                 <p>
//                   Follow us on social media and get 20% OFF your first service.
//                   <br />
//                   Stay updated on takedowns, tools & insights.
//                 </p>
//                 <div
//                   className="d-flex flex-column align-items-start justify-content-center mx-auto"
//                   style={{ maxWidth: "220px" }}
//                 >
//                   {/* First social icon + handle */}
//                   <div className="d-flex align-items-center mb-3">
//                     <img
//                       src="icons/twittericons.svg"
//                       alt="X Icon"
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         marginRight: "10px",
//                       }}
//                     />
//                     <a
//                       href="https://x.com/lock_leaks"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ textDecoration: "underline", color: "#000" }}
//                     >
//                       @lock_leaks
//                     </a>
//                   </div>
//                   {/* Second social icon + handle */}
//                   <div className="d-flex align-items-center mb-3">
//                     <img
//                       src="icons/instagramlogin.svg"
//                       alt="Instagram Icon"
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         marginRight: "10px",
//                       }}
//                     />
//                     <a
//                       href="https://instagram.com/lockleaks"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ textDecoration: "underline", color: "#000" }}
//                     >
//                       @lockleaks
//                     </a>
//                   </div>
//                   {/* Third social icon + handle */}
//                   <div className="d-flex align-items-center mb-3">
//                     <img
//                       src="icons/tiktoklogin.svg"
//                       alt="TikTok Icon"
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         marginRight: "10px",
//                       }}
//                     />
//                     <a
//                       href="https://tiktok.com/@lockleaks"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ textDecoration: "underline", color: "#000" }}
//                     >
//                       @lockleaks
//                     </a>
//                   </div>
//                 </div>
//                 <p className="mt-4">
//                   Send proof via live chat to activate your discount.
//                 </p>
//                 <button className="chat-button">
//                   Live Chat
//                   <img
//                     src="/icons/Frame 122 1.svg"
//                     className="chat-pointer"
//                     alt="Pointer Icon"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dailogs;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../store/authStore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Dailogs = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setUser, setToken } = useAuthStore();
    const loginMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "Dailogs.useMutation[loginMutation]": async (credentials)=>{
                const response = await fetch("http://localhost:8080/v1/api/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                });
                if (!response.ok) {
                    throw new Error("Login failed");
                }
                return response.json();
            }
        }["Dailogs.useMutation[loginMutation]"],
        onSuccess: {
            "Dailogs.useMutation[loginMutation]": (data)=>{
                // Store token and email in Zustand store (which persists to localStorage)
                setToken(data.data.accessToken);
                setUser(data.data.email);
                // Show success toast
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success("Login successful!");
                // Redirect to home page
                router.push("/");
            }
        }["Dailogs.useMutation[loginMutation]"],
        onError: {
            "Dailogs.useMutation[loginMutation]": (error)=>{
                // Show error toast
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("Login failed. Please check your credentials.");
                console.error("Login error:", error);
            }
        }["Dailogs.useMutation[loginMutation]"]
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!formData.email || !formData.password) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all fields");
            return;
        }
        loginMutation.mutate(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex justify-content-center align-items-center min-vh-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dailogs-login-slider-section d-flex flex-md-row flex-column",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-6 dailogs-login-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "dailogs-btn-back",
                            onClick: ()=>router.back(),
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/components/dailogs.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-4",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/components/dailogs.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "w-100",
                            style: {
                                maxWidth: 350
                            },
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "form-label",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dailogs.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            id: "email",
                                            name: "email",
                                            className: "form-control",
                                            placeholder: "your@email.com",
                                            value: formData.email,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/dailogs.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dailogs.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "form-label",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dailogs.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            id: "password",
                                            name: "password",
                                            className: "form-control",
                                            placeholder: "**********",
                                            value: formData.password,
                                            onChange: handleInputChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/dailogs.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dailogs.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn dailogs-btn-login mx-auto d-block",
                                    disabled: loginMutation.isPending,
                                    children: loginMutation.isPending ? "Logging in..." : "Login"
                                }, void 0, false, {
                                    fileName: "[project]/components/dailogs.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dailogs.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dailogs.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-6 dailogs-info-box p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "dailogsCarousel",
                        className: "carousel slide h-100",
                        "data-bs-ride": "carousel",
                        "data-bs-interval": "3000",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carousel-indicators",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-bs-target": "#dailogsCarousel",
                                        "data-bs-slide-to": "0",
                                        className: "active",
                                        "aria-current": "true",
                                        "aria-label": "Slide 1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-bs-target": "#dailogsCarousel",
                                        "data-bs-slide-to": "1",
                                        "aria-label": "Slide 2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-bs-target": "#dailogsCarousel",
                                        "data-bs-slide-to": "2",
                                        "aria-label": "Slide 3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dailogs.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carousel-inner h-100 d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "carousel-item active text-center px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Think You're Protected? Think Again."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Competitors remove surface leaks. We eliminate them deep."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/card.png",
                                                alt: "Slide 1",
                                                className: "img-fluid",
                                                style: {
                                                    maxWidth: "85%"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 375,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "carousel-item text-center px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Your Content Deserves the Best Protection."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "We're not just a leak removal service. Lock Leaks is a cybersecurity powerhouse, providing deep protection against leaks with continuous monitoring, real-time action, and proactive defense. We don't stop at the surface — we secure your content everywhere."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/1card.png",
                                                alt: "Slide 2",
                                                className: "img-fluid",
                                                style: {
                                                    maxWidth: "85%",
                                                    marginBottom: "30px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "chat-button",
                                                children: [
                                                    "Buy Subscription",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/Frame 122 1.svg",
                                                        className: "chat-pointer",
                                                        alt: "Pointer Icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "carousel-item text-center px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Claim Your"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Follow us on social media and get 20% OFF your first service.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Stay updated on takedowns, tools & insights."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex flex-column align-items-start justify-content-center mx-auto",
                                                style: {
                                                    maxWidth: "220px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex align-items-center mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "icons/twittericons.svg",
                                                                alt: "X Icon",
                                                                style: {
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    borderRadius: "50%",
                                                                    marginRight: "10px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://x.com/lock_leaks",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    textDecoration: "underline",
                                                                    color: "#000"
                                                                },
                                                                children: "@lock_leaks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex align-items-center mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "icons/instagramlogin.svg",
                                                                alt: "Instagram Icon",
                                                                style: {
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    borderRadius: "50%",
                                                                    marginRight: "10px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://instagram.com/lockleaks",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    textDecoration: "underline",
                                                                    color: "#000"
                                                                },
                                                                children: "@lockleaks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex align-items-center mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "icons/tiktoklogin.svg",
                                                                alt: "TikTok Icon",
                                                                style: {
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    borderRadius: "50%",
                                                                    marginRight: "10px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://tiktok.com/@lockleaks",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    textDecoration: "underline",
                                                                    color: "#000"
                                                                },
                                                                children: "@lockleaks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dailogs.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4",
                                                children: "Send proof via live chat to activate your discount."
                                            }, void 0, false, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "chat-button",
                                                children: [
                                                    "Live Chat",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/Frame 122 1.svg",
                                                        className: "chat-pointer",
                                                        alt: "Pointer Icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dailogs.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dailogs.tsx",
                                                lineNumber: 490,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dailogs.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dailogs.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dailogs.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dailogs.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dailogs.tsx",
            lineNumber: 288,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dailogs.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
};
_s(Dailogs, "onpDyyu6MR4FQ0Io+AVgNe0XM2Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        useAuthStore,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = Dailogs;
const __TURBOPACK__default__export__ = Dailogs;
var _c;
__turbopack_context__.k.register(_c, "Dailogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/dailogs.tsx [client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/dailogs.tsx [client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=components_dailogs_tsx_b1c5bc58._.js.map