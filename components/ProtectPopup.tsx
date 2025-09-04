"use client";

import React, { useState } from "react";
import Image from "next/image";
import '../styles/ProtectPopup.css';
import proimg from '../public/images/pro.png';
import identify from '../public/images/identify.png';
import photoid from '../public/images/photoid.svg';
import Facial from '../public/images/Facial.svg';
import IDcard from '../public/icons/ID card.svg';
import cnicimg from '../public/images/cnic.png';
import facialImage from '../public/images/facial-recognition.png'; // New image for step 6

const ProtectPopup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [show, setShow] = useState(false);

  const handleNext = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
    else setShow(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Content protected and enforced by lockleaks.com.");
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Failed to copy: " + err);
    }
  };

  return (
    <section className="protect-content-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-col d-flex flex-column justify-content-center">
            <button className="show-popup-btn" onClick={() => { setShow(true); setCurrentStep(1); }}>
              Show Protection Popup
            </button>
          </div>
          <div className="col-md-6 right-col"></div>
        </div>
      </div>

      {show && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup" onClick={() => setShow(false)}>&times;</span>

            {/* Step 1 */}
            <div className={`step ${currentStep === 1 ? "active" : ""}`}>
              <h3 className="text-center popup-heading">Protect Your Content</h3>
              <p className="popup-description text-center">
                To ensure your content is protected and enforced, add the following line to your profile description:
              </p>
              <p className="popup-instruction text-center">
                Just copy the text above and paste it into your profile description on OnlyFans or any other platform.
              </p>
              <input
                type="text"
                className="input-field gradient-text"
                readOnly
                value="Content protected and enforced by lockleaks.com."
              />
              <div className="text-start mb-4">
                <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleCopy}>
                  Copy to Clipboard
                </button>
              </div>
              <h5 className="profile-preview-heading text-center">How It Should Look on Your Profile:</h5>
              <Image src={proimg} alt="Example Preview" className="popup-image mb-3 d-block mx-auto" />
            </div>

            {/* Step 2 */}
            <div className={`step ${currentStep === 2 ? "active" : ""}`}>
              <h3 className="popup-heading text-center">Identity Verification</h3>
              <p className="popup-description text-center">To proceed, please upload a valid form of identification.</p>
              <Image src={identify} width={200} height={120} alt="Verification" className="popup-image my-4 d-block mx-auto" />
              <div className="identity-box mx-auto p-4" style={{ opacity: 0.95 }}>
                <p className="text-white mb-3">We accept the following documents:</p>
                <ul className="list-unstyled text-start text-white ps-3">
                  <li className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <Image src={IDcard} alt="National ID" width={20} height={20} className="me-2" />
                      National ID card
                    </div>
                    <Image src="/icons/Checkmark.svg" alt="Done" width={16} height={16} />
                  </li>
                  <hr className="border-secondary my-2" />
                  <li className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <Image src="/icons/PassportIcon.svg" alt="Passport" width={20} height={20} className="me-2" />
                      Passport
                    </div>
                    <Image src="/icons/Checkmark.svg" alt="Done" width={16} height={16} />
                  </li>
                  <hr className="border-secondary my-2" />
                  <li className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Image src="/icons/License.svg" alt="License" width={20} height={20} className="me-2" />
                      Driver’s license
                    </div>
                    <Image src="/icons/Checkmark.svg" alt="Done" width={16} height={16} />
                  </li>
                </ul>
              </div>
              <div className="text-center mt-4">
                <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>
                  Start Verification
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`step ${currentStep === 3 ? "active" : ""}`}>
              <h3 className="text-center fw-bold mb-3">Let's get started!</h3>
              <p className="text-center mb-4">To ensure the security of your account and protect against fraud, we require you to complete our identity verification process</p>
              <div className="text-start mx-auto" style={{ maxWidth: 400 }}>
                <div className="d-flex align-items-start mb-3">
                  <Image src={photoid} width={40} height={40} className="me-3" alt="Photo ID" />
                  <div>
                    <strong>Photo ID</strong>
                    <div className="text-white-50 small">ID card, passport, driver license supported</div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <Image src={Facial} width={40} height={40} className="me-3" alt="Facial" />
                  <div>
                    <strong>Facial recognition</strong>
                    <div className="text-white-50 small">Confirm that the portrait matches the picture on the identification document.</div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>
                  Continue
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`step step-verification-checklist ${currentStep === 4 ? "active" : ""}`}>
              <h3 className="step4-heading fw-bold mb-4">Before upload your passport photo, please make sure that</h3>
              <ul className="text-white mb-4 checklist-points">
                <li>Your ID isn’t expired</li>
                <li>Take a clear photo</li>
                <li>Capture your entire ID</li>
              </ul>
              <div className="id-icon-row d-flex align-items-center gap-3 text-start mx-auto">
                <Image src={IDcard} width={60} height={60} alt="ID Card" />
                <p className="text-white mt-2">ID card</p>
              </div>
              <div className="text-start mx-auto" style={{ maxWidth: '500px' }}>
                <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>
                  Upload ID Photo
                </button>
              </div>
            </div>

            {/* Step 5 */}
            <div className={`step ${currentStep === 5 ? "active" : ""}`}>
              <Image src={cnicimg} alt="ID Preview" width={360} height={200} className="cnic-preview-image" />
              <h5 className="text-white text-start mb-3" style={{ maxWidth: '500px', margin: '0 auto' }}>ID Upload Guidelines</h5>
              <ul className="text-white-50 mb-4 checklist-points text-start mx-auto">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Readable, clear and not blurry</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Well-lit, not reflective, not too dark</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> ID occupies most of the image</li>
              </ul>
              <h6 className="text-white text-start mb-2 mx-auto" style={{ maxWidth: '500px' }}>Please confirm that</h6>
              <ul className="text-white-50 checklist-points text-start mx-auto">
                <li><i className="bi bi-dot text-white-50 me-2"></i> ID is not expired</li>
              </ul>
              <div className="text-start mx-auto mt-4" style={{ maxWidth: '500px' }}>
                <button className="btn btn-primary me-3 px-4" style={{ backgroundColor: "#CF3CA6", border: "none" }} onClick={handleNext}>Confirm</button>
                <button className="btn btn-outline-light px-4" onClick={() => setCurrentStep(4)}>Back</button>
              </div>
            </div>
              {/* Step 6 */}
              <div className={`step ${currentStep === 6 ? "active" : ""}`}>
                <h3 className="text-center fw-bold mb-3">Facial Recognition</h3>

                {/* Centered Facial Image */}
                <div className="text-center mb-4">
                  <Image src={facialImage} width={150} height={150} alt="Facial Recognition" className="rounded-circle" />
                </div>

                <p className="text-center mb-4">In order to improve the success rate of face recognition,<br/>please follow these requirements below:</p>

                <div className="d-flex justify-content-between mx-auto" style={{ maxWidth: '500px' }}>
                  <div className="text-center">
                    <Image src="/icons/phone-up-right.svg" width={50} height={50} alt="Hold phone upright" />
                    <p className="text-custom">Hold phone upright</p>
                  </div>
                  <div className="text-center">
                    <Image src="/icons/well-lit.svg" width={50} height={50} alt="Well-lit" />
                    <p className="text-custom">Well-lit</p>
                  </div>
                  <div className="text-center">
                    <Image src="/icons/no-occlusion.svg" width={50} height={50} alt="Don’t occlude face" />
                    <p className="text-custom">Don’t occlude face</p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>Upload Selfie</button>
                </div>
              </div>

                {/* Step 7 */}
                <div className={`step ${currentStep === 7 ? "active" : ""}`}>
                  <h3 className="text-center fw-bold mb-3">Identity Verified</h3>

                  {/* Image for Confirmation */}
                  <div className="text-center mb-4">
                  <Image src="/icons/verified1122.svg" alt="Verified" width={150} height={150} />
                  </div>

                  <p className="text-center">
                    You now have full access to all LockLeaks features,<br /> 
                    priority enforcement, and elevated protection limits.<br /> 
                    Thank you for completing the verification process.
                  </p>

                  {/* Button for further action */}
                  <div className="text-center mt-4">
                    <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>
                      Proceed
                    </button>
                  </div>
                </div>

            <div className="popup-footer">
              {currentStep === 1 && <p className="mb-0">Content protected and enforced by lockleaks.com.</p>}
              {currentStep === 1 && (
                <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleNext}>
                  Done!
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProtectPopup;
