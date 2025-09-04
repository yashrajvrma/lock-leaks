'use client';
import Image from 'next/image';
import face from '../public/images/Face.png';   // Top-right face
import phone from '../public/images/Mobile.png'; // Middle phone
import hand from '../public/images/hand.png';   // Bottom hand

export default function ProtectWithVisual() {
  return (
    <section className="protect-visual-section py-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <span className="text-pink d-block mb-2">● Identity Protection</span>
            <h2 className="fw-bold text-purple">Prevent Identity Theft</h2>
            <p className="text-muted">
              Deepfake content and stolen identity visuals are a growing risk. Our system uses AI to detect and remove unauthorized use of your face, voice, and media across the web. Stay protected with automated surveillance and takedown tools.
            </p>
            <button className="btn btn-pink mt-3 px-4 py-2">Get Protected</button>
          </div>

          {/* Right visual animation */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="image-stack position-relative" style={{ width: '250px', height: '400px' }}>
              <Image src={face} alt="Face" className="positioned-img float1" width={180} />
              <Image src={phone} alt="Phone" className="positioned-img float2" width={100} />
              <Image src={hand} alt="Hand" className="positioned-img float3" width={160} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
