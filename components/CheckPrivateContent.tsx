"use client";
import React, { useMemo, useState } from "react";
import "../styles/CheckPrivateContent.css";
import "../styles/Newheader.css";
import Images from "next/image";

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

const CheckPrivateContent: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  // Step 1 selections
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<PlatformKey>>(
    new Set()
  );

  // Step 2 URLs
  const [accountUrls, setAccountUrls] = useState<string[]>([""]);
  const [verificationMethod, setVerificationMethod] = useState<
    "email" | "dns" | "file" | "none"
  >("email");

  const togglePlatform = (p: PlatformKey) => {
    setSelectedPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const addUrlField = () => setAccountUrls((u) => [...u, ""]);
  const removeUrlField = (idx: number) =>
    setAccountUrls((u) => u.filter((_, i) => i !== idx));
  const updateUrl = (idx: number, val: string) =>
    setAccountUrls((u) => u.map((v, i) => (i === idx ? val : v)));

  const resetWizard = () => {
    setStep(1);
    setSelectedPlatforms(new Set());
    setAccountUrls([""]);
    setVerificationMethod("email");
  };

  const nextStep = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleFinish = () => {
    const el = document.getElementById("closePlatformModalBtn");
    el?.click();
  };

  const StepHeader = () => <></>;

  const StepFooter = () => (
    <div className="d-flex justify-content-end align-items-center mt-4">
      <div className="d-flex gap-2">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={prevStep}
          disabled={step === 1}
        >
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button type="button" className="btn btn-pink px-4" onClick={nextStep}>
            Next
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
  );

  const Step1Platforms = () => (
    <>
      <h6 className="platform-heading">Subscription Platforms</h6>
      <div className="platform-grid">
        {subscriptionPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${
              selectedPlatforms.has(platform) ? "active" : ""
            }`}
            onClick={() => togglePlatform(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Streaming Platforms</h6>
      <div className="platform-grid">
        {streamingPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${
              selectedPlatforms.has(platform) ? "active" : ""
            }`}
            onClick={() => togglePlatform(platform)}
          >
            {["LiveJasmin", "BongaCams", "CAM4", "CamSoda"].includes(platform) ? (
              <Images
                src={
                  platform === "LiveJasmin"
                    ? "/images/Livejasmin.svg"
                    : platform === "BongaCams"
                    ? "/images/bomgacom.svg"
                    : platform === "CAM4"
                    ? "/images/cam4.svg"
                    : "/images/cams.svg"
                }
                alt={platform}
                width={90}
                height={40}
              />
            ) : (
              platform
            )}
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Social Media Platforms</h6>
      <div className="platform-grid">
        {socialPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${
              selectedPlatforms.has(platform) ? "active" : ""
            }`}
            onClick={() => togglePlatform(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Other Platforms</h6>
      <div className="platform-grid">
        <button
          type="button"
          className={`platform-btn ${
            selectedPlatforms.has("Custom") ? "active" : ""
          }`}
          onClick={() => togglePlatform("Custom")}
        >
          + Add Custom Platform
        </button>
      </div>
    </>
  );

  const Step2Urls = () => (
    <div>
      <div className="input-group mb-3">
        <input
          type="url"
          className="form-control"
          placeholder="https://onlyfans.com/@username"
          value={accountUrls[0]}
          onChange={(e) => updateUrl(0, e.target.value)}
        />
        <button
          type="button"
          className="btn btn-pink"
          onClick={() => console.log("Save clicked")}
        >
          Save
        </button>
      </div>

      <div className="input-group mb-3">
        <input
          type="url"
          className="form-control"
          placeholder="https://onlyfans.com/@username"
          value={accountUrls[1] || ""}
          onChange={(e) => updateUrl(1, e.target.value)}
        />
        <button
          type="button"
          className="btn btn-pink"
          onClick={() => console.log("Add clicked")}
        >
          Add
        </button>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="btn btn-link text-pink p-0"
          onClick={addUrlField}
        >
          Add Account from Another Platform
        </button>
      </div>
    </div>
  );

  const Step3Verify = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validate = () => {
      const newErrors = { email: "", password: "" };
      if (!email.includes("@")) newErrors.email = "Please enter a valid email address";
      if (password.length < 6) newErrors.password = "Don't forget to set your password!";
      setErrors(newErrors);
      return !newErrors.email && !newErrors.password;
    };

    const handleNextStep = () => {
      if (validate()) nextStep();
    };

    return (
      <div className="step3-container">
        <p className="text-muted text-center mb-4">
          Enter your email and set a password for your free scan account.
        </p>

        <div className="d-flex gap-3 mb-2">
          <div className="flex-fill">
            <label>Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="flex-fill">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
        </div>

        <p className="text-center text-muted mb-3">
          Note: (Required for scan updates and account creation.)
        </p>

        <h6 className="text-center mb-2">Select Your Preferred Contact Method</h6>
        <div className="list-group mb-3">
          <label className="list-group-item">
            <input
              type="radio"
              name="verify"
              className="me-2"
              checked={verificationMethod === "email"}
              onChange={() => setVerificationMethod("email")}
            />
            Your WhatsApp Number
          </label>
          <label className="list-group-item">
            <input
              type="radio"
              name="verify"
              className="me-2"
              checked={verificationMethod === "dns"}
              onChange={() => setVerificationMethod("dns")}
            />
            Phone Number
          </label>
          <label className="list-group-item">
            <input
              type="radio"
              name="verify"
              className="me-2"
              checked={verificationMethod === "file"}
              onChange={() => setVerificationMethod("file")}
            />
            Live Chat
          </label>
          <label className="list-group-item">
            <input
              type="radio"
              name="verify"
              className="me-2"
              checked={verificationMethod === "none"}
              onChange={() => setVerificationMethod("none")}
            />
            Email Only
          </label>
        </div>
      </div>
    );
  };

  const Step4Review = ({ selectedPlan = "Starter Plan" }) => {
    const [agreed, setAgreed] = useState(false);

    return (
      <div className="step4-container">
        <p className="selected-plan">You’ve selected the {selectedPlan}</p>
        <p>By proceeding, you confirm your subscription to Lock Leaks Premium.</p>

        <div className="step4-terms">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <span className="custom-check"></span>
            You agree to our <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </label>
        </div>

        <button className="step4-btn" disabled={!agreed}>
          Buy {selectedPlan}
        </button>
      </div>
    );
  };

  const Step5Done = ({ selectedPlan = "Starter Plan" }) => {
  const [agreed, setAgreed] = useState(false);
  const [annualAccepted, setAnnualAccepted] = useState(false);

  return (
    <div className="step5-container text-center py-4">
      {/* Step 5 main content */}    
      <p className="selected-plan">You’ve selected the {selectedPlan}</p>
      <p>By proceeding, you confirm your subscription to Lock Leaks Premium.</p>
      <div className="step4-terms">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span className="custom-check"></span>
          You agree to our <a href="#">Terms and Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </label>
      </div>

      {/* New Annual Subscription Terms checkbox */}
      <div className="step4-terms mt-3">
       <label className="checkbox-label">
  <input
    type="checkbox"
    checked={annualAccepted}
    onChange={() => setAnnualAccepted(!annualAccepted)}
  />
  <span className="custom-check"></span>
  I accept the <a href="#">[Annual Subscription Terms]</a>, including Traffic Redirection and Content Use policies.
</label>

      </div>

      <button
        className="step4-btn mt-3"
        disabled={!agreed || !annualAccepted} // button enabled only if both checkboxes are checked
      >
        Buy {selectedPlan}
      </button>
    </div>
  );
};
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
        {/* Left Column */}
        <div className="col-md-6 platform-login-box text-center">
          <div className="check-header">Check if your private content has been leaked</div>
          <div className="check-sub">Free & Secure</div>
          <p className="check-instruction">
            Please provide the URLs of your primary accounts across all platforms you use, even if they are{" "}
            <strong>no longer active</strong>. This helps ensure comprehensive protection.
          </p>

          <div
            className="add-account-box"
            data-bs-toggle="modal"
            data-bs-target="#platformModal"
            onClick={resetWizard}
          >
            <span>Add Your Accounts</span>
            <Images src="/images/accountfinger.svg" width={24} height={24} alt="account" />
          </div>
        </div>

        {/* Right Column with Slider */}
        <div className="col-md-6 dailogs-info-box p-0">
          <div
            id="dailogsCarousel"
            className="carousel slide h-100"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#dailogsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#dailogsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#dailogsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100 d-flex align-items-center">
              <div className="carousel-item active text-center px-4">
                <h4>Think You're Protected? Think Again.</h4>
                <p>Competitors remove surface leaks. We eliminate them deep.</p>
                <Images src="/images/card.png" className="img-fluid" style={{ maxWidth: "85%" }} width={500} height={300} alt="Slide 1" />
              </div>
              <div className="carousel-item text-center px-4">
                <h4>Your Content Deserves the Best Protection.</h4>
                <p>We’re not just a leak removal service. Lock Leaks is a cybersecurity powerhouse...</p>
                <Images src="/images/1card.png" className="img-fluid" style={{ maxWidth: "85%" }} width={500} height={300} alt="Slide 2" />
              </div>
              <div className="carousel-item text-center px-4">
                <h4>24/7 Protection</h4>
                <p>Sleep easy knowing your brand is always guarded.</p>
                <Images src="/images/card3.png" className="img-fluid" style={{ maxWidth: "85%" }} width={500} height={300} alt="Slide 3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Modal */}
      <div className="modal fade" id="platformModal" tabIndex={-1} aria-labelledby="platformModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content custom-popup text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center" id="platformModalLabel">
                {step === 1 && "Select your platform"}
                {step === 2 && "Add your OnlyFans account"}
                {step === 3 && "Add your contact information"}
                {step === 4 && "Ready to Protect Your Content?"}
                {step === 5 && "Ready to Protect Your Content?"}
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
              <StepHeader />

              {/* Step Content */}
              {step === 1 && <Step1Platforms />}
              {step === 2 && <Step2Urls />}
              {step === 3 && <Step3Verify />}
              {step === 4 && <Step4Review />}
              {step === 5 && <Step5Done />}

              <StepFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPrivateContent;
