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

// const CheckPrivateContent: React.FC = () => {
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
"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import proimg from "../public/images/pro.png";
import "../styles/CheckPrivateContent.css";
import "../styles/Newheader.css";

type PlatformKey =
  | "OnlyFans"
  | "Fansly"
  | "Fanvue"
  | "My.Club"
  | "Patreon"
  | "Manyvids"
  | "Just For Fans"
  | "Fancentro"
  | "iFans"
  | "LoyalFans"
  | "Chaturbate"
  | "MFC"
  | "Stripchat"
  | "Streamate"
  | "LiveJasmin"
  | "BongaCams"
  | "CAM4"
  | "CamSoda"
  | "Jerkmate"
  | "Twitter(X)"
  | "TikTok"
  | "Instagram"
  | "Reddit"
  | "Facebook"
  | "Custom";

type ContactMethod = "whatsapp" | "phone" | "email" | "livechat";

const subscriptionPlatforms: PlatformKey[] = [
  "OnlyFans",
  "Fansly",
  "Fanvue",
  "My.Club",
  "Patreon",
  "Manyvids",
  "Just For Fans",
  "Fancentro",
  "iFans",
  "LoyalFans",
];

const streamingPlatforms: PlatformKey[] = [
  "Chaturbate",
  "MFC",
  "Stripchat",
  "Streamate",
  "LiveJasmin",
  "BongaCams",
  "CAM4",
  "CamSoda",
  "Jerkmate",
];

const socialPlatforms: PlatformKey[] = [
  "Twitter(X)",
  "TikTok",
  "Instagram",
  "Reddit",
  "Facebook",
];

const TOTAL_STEPS = 5;

const CheckPrivateContentFree: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [customPlatform, setCustomPlatform] = useState<string>("");
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
  const [contactValue, setContactValue] = useState<string>("");
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const resetWizard = useCallback(() => {
    setStep(1);
    setSelectedPlatform("");
    setCustomPlatform("");
    setShowCustomInput(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setContactMethod("whatsapp");
    setContactValue("");
    setAgreedToTerms(false);
    setErrors({});
  }, []);

  const getContactPlaceholder = useCallback(() => {
    switch (contactMethod) {
      case "whatsapp":
        return "+1234567890";
      case "phone":
        return "+1234567890";
      case "email":
        return "contact@email.com";
      case "livechat":
        return "Enter your live chat username";
      default:
        return "";
    }
  }, [contactMethod]);

  const getContactLabel = useCallback(() => {
    switch (contactMethod) {
      case "whatsapp":
        return "WhatsApp Number";
      case "phone":
        return "Phone Number";
      case "email":
        return "Email Address";
      case "livechat":
        return "Live Chat Username";
      default:
        return "Contact Information";
    }
  }, [contactMethod]);

  const validateStep = useCallback(
    (currentStep: number): boolean => {
      const newErrors: { [key: string]: string } = {};

      switch (currentStep) {
        case 1:
          if (!selectedPlatform) {
            newErrors.platform = "Please select a platform";
          }
          if (selectedPlatform === "Custom" && !customPlatform.trim()) {
            newErrors.customPlatform = "Please enter custom platform name";
          }
          break;

        case 2:
          if (!username.trim()) {
            newErrors.username = "Please enter your username";
          }
          break;

        case 3:
          if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
          }
          if (!password.trim() || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
          }
          if (!contactValue.trim()) {
            newErrors.contactValue = `Please enter your ${getContactLabel()}`;
          }
          // Validate phone numbers (WhatsApp and Phone)
          if (contactMethod === "phone" || contactMethod === "whatsapp") {
            const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
            const cleanNumber = contactValue.replace(/[\s\-\(\)]/g, "");
            if (!phoneRegex.test(cleanNumber)) {
              newErrors.contactValue =
                "Please enter a valid phone number with country code (e.g., +1234567890)";
            }
          }
          // Validate email format if email is selected as contact method
          if (
            contactMethod === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)
          ) {
            newErrors.contactValue = "Please enter a valid email address";
          }
          break;

        case 4:
          if (!agreedToTerms) {
            newErrors.terms = "Please agree to the terms and conditions";
          }
          break;
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [
      selectedPlatform,
      customPlatform,
      username,
      email,
      password,
      contactMethod,
      contactValue,
      agreedToTerms,
      getContactLabel,
    ]
  );

  const nextStep = useCallback(() => {
    if (validateStep(step)) {
      setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    }
  }, [step, validateStep]);

  const prevStep = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);

  const handlePlatformSelect = useCallback((platform: PlatformKey) => {
    if (platform === "Custom") {
      setShowCustomInput(true);
      setSelectedPlatform("Custom");
    } else {
      setShowCustomInput(false);
      setSelectedPlatform(platform);
      setCustomPlatform("");
    }
    // Clear platform error when selection is made
    setErrors((prev) => ({ ...prev, platform: "" }));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!validateStep(4)) return;

    setIsLoading(true);

    try {
      const platformName =
        selectedPlatform === "Custom" ? customPlatform : selectedPlatform;

      const requestBody: any = {
        pricingName: "FREE",
        billed: "MONTHLY",
        platform: platformName.toLowerCase(),
        username: username,
        email: email,
        password: password,
      };

      // Add contact method based on selection
      switch (contactMethod) {
        case "whatsapp":
          requestBody.contactWhatsappNumber = contactValue;
          break;
        case "phone":
          requestBody.contactPhoneNumber = contactValue;
          break;
        case "email":
          requestBody.contactEmail = contactValue;
          break;
        case "livechat":
          requestBody.contactLiveChat = contactValue;
          break;
      }

      const response = await axios.post(
        "http://localhost:8080/v1/api/auth/signup",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Account created successfully!");

        // Move to step 5 (scanning) instead of closing modal immediately
        setStep(5);

        // After 3 seconds, close modal and redirect
        setTimeout(() => {
          const closeButton = document.getElementById("closePlatformModalBtn");
          closeButton?.click();

          setTimeout(() => {
            router.push("/");
          }, 500);
        }, 3000);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [
    validateStep,
    selectedPlatform,
    customPlatform,
    username,
    email,
    password,
    contactMethod,
    contactValue,
    router,
  ]);

  const handleFinish = useCallback(() => {
    const el = document.getElementById("closePlatformModalBtn");
    el?.click();
    router.push("/");
  }, [router]);

  const handleContactMethodChange = useCallback((method: ContactMethod) => {
    setContactMethod(method);
    setContactValue("");
    setErrors((prev) => ({ ...prev, contactValue: "" }));
  }, []);

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleContactValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContactValue(e.target.value);
    },
    []
  );

  const handleCustomPlatformChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomPlatform(e.target.value);
    },
    []
  );

  const StepFooter = useMemo(
    () => (
      <div className="d-flex justify-content-end align-items-center mt-4">
        <div className="d-flex gap-2">
          {step < 5 && (
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={prevStep}
              disabled={step === 1}
            >
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              className="btn btn-pink px-4"
              onClick={nextStep}
            >
              Next
            </button>
          ) : step === 4 ? (
            <button
              type="button"
              className="btn btn-pink px-4"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Submit"}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-pink px-4"
              onClick={handleFinish}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    ),
    [step, prevStep, nextStep, handleSubmit, handleFinish, isLoading]
  );

  // Step 1 - Platform Selection
  const Step1Platforms = useMemo(
    () => (
      <>
        <h6 className="platform-heading text-white">Subscription Platforms</h6>
        <div className="platform-grid">
          {subscriptionPlatforms.map((platform, idx) => (
            <button
              key={idx}
              type="button"
              className={`platform-btn ${
                selectedPlatform === platform ? "active selected" : ""
              }`}
              onClick={() => handlePlatformSelect(platform)}
              style={{
                backgroundColor:
                  selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
                border:
                  selectedPlatform === platform
                    ? "2px solid #CF3CA6"
                    : "1px solid #555",
                color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
                transform:
                  selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
                boxShadow:
                  selectedPlatform === platform
                    ? "0 0 10px rgba(207, 60, 166, 0.3)"
                    : "none",
                transition: "all 0.2s ease",
              }}
            >
              {selectedPlatform === platform && <span className="me-2">✓</span>}
              {platform}
            </button>
          ))}
        </div>

        <h6 className="platform-heading mt-4 text-white">
          Streaming Platforms
        </h6>
        <div className="platform-grid">
          {streamingPlatforms.map((platform, idx) => (
            <button
              key={idx}
              type="button"
              className={`platform-btn ${
                selectedPlatform === platform ? "active selected" : ""
              }`}
              onClick={() => handlePlatformSelect(platform)}
              style={{
                backgroundColor:
                  selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
                border:
                  selectedPlatform === platform
                    ? "2px solid #CF3CA6"
                    : "1px solid #555",
                color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
                transform:
                  selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
                boxShadow:
                  selectedPlatform === platform
                    ? "0 0 10px rgba(207, 60, 166, 0.3)"
                    : "none",
                transition: "all 0.2s ease",
              }}
            >
              {selectedPlatform === platform && <span className="me-2">✓</span>}
              {platform}
            </button>
          ))}
        </div>

        <h6 className="platform-heading mt-4 text-white">
          Social Media Platforms
        </h6>
        <div className="platform-grid">
          {socialPlatforms.map((platform, idx) => (
            <button
              key={idx}
              type="button"
              className={`platform-btn ${
                selectedPlatform === platform ? "active selected" : ""
              }`}
              onClick={() => handlePlatformSelect(platform)}
              style={{
                backgroundColor:
                  selectedPlatform === platform ? "#CF3CA6" : "#2a2a2a",
                border:
                  selectedPlatform === platform
                    ? "2px solid #CF3CA6"
                    : "1px solid #555",
                color: selectedPlatform === platform ? "#ffffff" : "#cccccc",
                transform:
                  selectedPlatform === platform ? "scale(1.02)" : "scale(1)",
                boxShadow:
                  selectedPlatform === platform
                    ? "0 0 10px rgba(207, 60, 166, 0.3)"
                    : "none",
                transition: "all 0.2s ease",
              }}
            >
              {selectedPlatform === platform && <span className="me-2">✓</span>}
              {platform}
            </button>
          ))}
        </div>

        <h6 className="platform-heading mt-4 text-white">Other Platforms</h6>
        <div className="platform-grid">
          <button
            type="button"
            className={`platform-btn ${
              selectedPlatform === "Custom" ? "active selected" : ""
            }`}
            onClick={() => handlePlatformSelect("Custom")}
            style={{
              backgroundColor:
                selectedPlatform === "Custom" ? "#CF3CA6" : "#2a2a2a",
              border:
                selectedPlatform === "Custom"
                  ? "2px solid #CF3CA6"
                  : "1px solid #555",
              color: selectedPlatform === "Custom" ? "#ffffff" : "#cccccc",
              transform:
                selectedPlatform === "Custom" ? "scale(1.02)" : "scale(1)",
              boxShadow:
                selectedPlatform === "Custom"
                  ? "0 0 10px rgba(207, 60, 166, 0.3)"
                  : "none",
              transition: "all 0.2s ease",
            }}
          >
            {selectedPlatform === "Custom" && <span className="me-2">✓</span>}+
            Add Custom Platform
          </button>
        </div>

        {showCustomInput && (
          <div className="mt-3">
            <Input
              type="text"
              className={`${errors.customPlatform ? "border-red-500" : ""}`}
              placeholder="Enter custom platform name"
              value={customPlatform}
              onChange={handleCustomPlatformChange}
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #555",
                color: "#ffffff",
              }}
              autoFocus
              autoComplete="off"
            />
            {errors.customPlatform && (
              <small className="text-danger d-block mt-1">
                {errors.customPlatform}
              </small>
            )}
          </div>
        )}

        {errors.platform && (
          <div className="text-danger mt-2 text-center">{errors.platform}</div>
        )}
      </>
    ),
    [
      selectedPlatform,
      showCustomInput,
      customPlatform,
      errors,
      handlePlatformSelect,
      handleCustomPlatformChange,
    ]
  );

  // Step 2 - Username Input
  const Step2Username = useMemo(() => {
    const platformName =
      selectedPlatform === "Custom" ? customPlatform : selectedPlatform;

    return (
      <div>
        <div className="text-center my-3">
          <h5 className="form-heading text-white">
            Add your {platformName} account
          </h5>
          <p className="text-muted mb-3">Just enter your username</p>
          <div className="d-flex justify-content-center">
            <div className="w-75">
              <Input
                type="text"
                className={`${errors.username ? "border-red-500" : ""}`}
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #555",
                  color: "#ffffff",
                }}
                autoComplete="username"
              />
            </div>
          </div>
          {errors.username && (
            <small className="text-danger d-block mt-2">
              {errors.username}
            </small>
          )}
        </div>
      </div>
    );
  }, [
    selectedPlatform,
    customPlatform,
    username,
    errors.username,
    handleUsernameChange,
  ]);

  // Step 3 - Contact Information
  const Step3Contact = useMemo(
    () => (
      <div className="step3-container">
        <p className="text-muted text-center mb-4">
          Enter your email and set a password for your free scan account.
        </p>

        <div className="d-flex gap-3 mb-3">
          <div className="flex-fill">
            <label className="form-label text-white mb-2">Email Address</label>
            <Input
              type="email"
              className={`${errors.email ? "border-red-500" : ""}`}
              placeholder="your@email.com"
              value={email}
              onChange={handleEmailChange}
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #555",
                color: "#ffffff",
              }}
              autoComplete="email"
            />
            {errors.email && (
              <small className="text-danger d-block mt-1">{errors.email}</small>
            )}
          </div>

          <div className="flex-fill">
            <label className="form-label text-white mb-2">Password</label>
            <Input
              type="password"
              className={`${errors.password ? "border-red-500" : ""}`}
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #555",
                color: "#ffffff",
              }}
              autoComplete="new-password"
            />
            {errors.password && (
              <small className="text-danger d-block mt-1">
                {errors.password}
              </small>
            )}
          </div>
        </div>

        <p className="text-center text-muted mb-3">
          Note: (Required for scan updates and account creation.)
        </p>

        <h6 className="text-center mb-3 text-white">
          Select Your Preferred Contact Method
        </h6>
        <div className="list-group mb-3">
          <label
            className={`list-group-item d-flex align-items-center cursor-pointer ${
              contactMethod === "whatsapp" ? "selected-contact" : ""
            }`}
            style={{
              backgroundColor:
                contactMethod === "whatsapp" ? "#CF3CA6" : "#2a2a2a",
              border:
                contactMethod === "whatsapp"
                  ? "2px solid #CF3CA6"
                  : "1px solid #555",
              transition: "all 0.2s ease",
            }}
          >
            <input
              type="radio"
              name="contactMethod"
              className="me-2"
              checked={contactMethod === "whatsapp"}
              onChange={() => handleContactMethodChange("whatsapp")}
            />
            <span className="text-white">WhatsApp Number</span>
            {contactMethod === "whatsapp" && (
              <span className="ms-auto text-white">✓</span>
            )}
          </label>
          <label
            className={`list-group-item d-flex align-items-center cursor-pointer ${
              contactMethod === "phone" ? "selected-contact" : ""
            }`}
            style={{
              backgroundColor:
                contactMethod === "phone" ? "#CF3CA6" : "#2a2a2a",
              border:
                contactMethod === "phone"
                  ? "2px solid #CF3CA6"
                  : "1px solid #555",
              transition: "all 0.2s ease",
            }}
          >
            <input
              type="radio"
              name="contactMethod"
              className="me-2"
              checked={contactMethod === "phone"}
              onChange={() => handleContactMethodChange("phone")}
            />
            <span className="text-white">Phone Number</span>
            {contactMethod === "phone" && (
              <span className="ms-auto text-white">✓</span>
            )}
          </label>
          <label
            className={`list-group-item d-flex align-items-center cursor-pointer ${
              contactMethod === "livechat" ? "selected-contact" : ""
            }`}
            style={{
              backgroundColor:
                contactMethod === "livechat" ? "#CF3CA6" : "#2a2a2a",
              border:
                contactMethod === "livechat"
                  ? "2px solid #CF3CA6"
                  : "1px solid #555",
              transition: "all 0.2s ease",
            }}
          >
            <input
              type="radio"
              name="contactMethod"
              className="me-2"
              checked={contactMethod === "livechat"}
              onChange={() => handleContactMethodChange("livechat")}
            />
            <span className="text-white">Live Chat</span>
            {contactMethod === "livechat" && (
              <span className="ms-auto text-white">✓</span>
            )}
          </label>
          <label
            className={`list-group-item d-flex align-items-center cursor-pointer ${
              contactMethod === "email" ? "selected-contact" : ""
            }`}
            style={{
              backgroundColor:
                contactMethod === "email" ? "#CF3CA6" : "#2a2a2a",
              border:
                contactMethod === "email"
                  ? "2px solid #CF3CA6"
                  : "1px solid #555",
              transition: "all 0.2s ease",
            }}
          >
            <input
              type="radio"
              name="contactMethod"
              className="me-2"
              checked={contactMethod === "email"}
              onChange={() => handleContactMethodChange("email")}
            />
            <span className="text-white">Email Only</span>
            {contactMethod === "email" && (
              <span className="ms-auto text-white">✓</span>
            )}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label text-white mb-2">
            {getContactLabel()}
          </label>
          <Input
            type={
              contactMethod === "email"
                ? "email"
                : contactMethod === "phone" || contactMethod === "whatsapp"
                ? "tel"
                : "text"
            }
            className={`${errors.contactValue ? "border-red-500" : ""}`}
            placeholder={getContactPlaceholder()}
            value={contactValue}
            onChange={handleContactValueChange}
            style={{
              backgroundColor: "#2a2a2a",
              border: "1px solid #555",
              color: "#ffffff",
            }}
            autoComplete="off"
          />
          {errors.contactValue && (
            <small className="text-danger d-block mt-1">
              {errors.contactValue}
            </small>
          )}
        </div>
      </div>
    ),
    [
      email,
      password,
      contactMethod,
      contactValue,
      errors,
      handleEmailChange,
      handlePasswordChange,
      handleContactMethodChange,
      handleContactValueChange,
      getContactLabel,
      getContactPlaceholder,
    ]
  );

  // Step 4 - Terms and Submit
  const Step4Terms = useMemo(
    () => (
      <div className="step text-center">
        <h3 className="popup-heading text-white">
          Ready to Protect Your Content?
        </h3>
        <p className="popup-description">
          You've selected the Free Plan for{" "}
          {selectedPlatform === "Custom" ? customPlatform : selectedPlatform}
        </p>
        <p className="popup-instruction">
          By proceeding, you confirm your registration to Lock Leaks.
        </p>

        <div className="mb-4">
          <label className="d-flex align-items-center justify-content-center">
            <input
              type="checkbox"
              className={`me-2 ${errors.terms ? "is-invalid" : ""}`}
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-white">
              You agree to our{" "}
              <a href="#" className="text-pink">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.terms && (
            <small className="text-danger d-block mt-1">{errors.terms}</small>
          )}
        </div>
      </div>
    ),
    [selectedPlatform, customPlatform, agreedToTerms, errors.terms]
  );

  // Step 5 - Scanning
  const Step5Scanning = () => {
    const [progress, setProgress] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);
    const icons = [
      "/icons/folder.svg",
      "/icons/1download.svg",
      "/icons/11search.svg",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          let newVal = prev + Math.random() * 5;
          if (newVal > 100) newVal = 100;
          return parseFloat(newVal.toFixed(2));
        });
      }, 200);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const iconTimer = setInterval(() => {
        setIconIndex((prev) => (prev + 1) % icons.length);
      }, 1500);
      return () => clearInterval(iconTimer);
    }, []);

    return (
      <div className="step5-scanning text-center">
        <h3 className="popup-heading mb-3 text-white">
          Account Created Successfully!
        </h3>
        <p className="popup-description">
          Please note: The full scan and review may take between 12 to 24 hours.
          You will be contacted as soon as the results are ready.
        </p>
        <p className="popup-instruction mb-4">
          Stay tuned! We'll send you updates as soon as your scan is ready.
        </p>

        <div className="scanning-box">
          <div className="scanning-text gradient-loading">
            Initializing Scan...
          </div>
          <div className="scan-progress">{progress.toFixed(2)}%</div>
          <div className="scan-icons">
            <Image src={icons[iconIndex]} width={50} height={50} alt="icon" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
        {/* Left Column */}
        <div className="col-md-6 platform-login-box text-center">
          <div className="check-header">
            Check if your private content has been leaked
          </div>
          <div className="check-sub">Free & Secure</div>
          <p className="check-instruction">
            Please provide the URLs of your primary accounts across all
            platforms you use, even if they are{" "}
            <strong>no longer active</strong>. This helps ensure comprehensive
            protection.
          </p>

          <div
            className="add-account-box"
            data-bs-toggle="modal"
            data-bs-target="#platformModal"
            onClick={resetWizard}
          >
            <span>Add Your Accounts</span>
            <Image
              src="/icons/accountfinger.svg"
              width={24}
              height={24}
              alt="account"
            />
          </div>
        </div>

        {/* Right Column - keeping original carousel */}
        <div className="col-md-6 dailogs-info-box p-0">
          {/* Original carousel code here */}
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="platformModal"
        tabIndex={-1}
        aria-labelledby="platformModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content custom-popup text-white">
            <div className="modal-header border-0">
              <h5
                className="modal-title w-100 text-center"
                id="platformModalLabel"
              >
                {step === 1 && "Select your platform"}
                {step === 2 &&
                  `Add your ${
                    selectedPlatform === "Custom"
                      ? customPlatform
                      : selectedPlatform
                  } account`}
                {step === 3 && "Add your contact information"}
                {step === 4 && "Ready to Protect Your Content?"}
                {step === 5 && "Account Created Successfully!"}
              </h5>
              <button
                id="closePlatformModalBtn"
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {step === 1 && Step1Platforms}
              {step === 2 && Step2Username}
              {step === 3 && Step3Contact}
              {step === 4 && Step4Terms}
              {step === 5 && <Step5Scanning />}
              {step < 5 && StepFooter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPrivateContentFree;
