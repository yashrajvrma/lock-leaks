import React, { useRef, useState } from 'react';
import '../styles/AgenciesVideo.css';

const AgenciesVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="Agencies-video-section">
      <div className="Agencies-video-wrapper">

        {/* ✅ Fake macOS-style top bar */}
        <div className="Agencies-fake-topbar">
          <div className="top-bar-inside">
          <div className="top-bar-left">
            <img src="/images/apple.svg" alt="Apple" className="top-icon" />
            <span>Finder</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span>Window</span>
            <span>Help</span>
          </div>
          <div className="top-bar-right">
            <img
              src="/images/locck.svg"
              alt="Dropdown Trigger"
              className="top-icon"

            />
            <img src="/images/wifi.svg" alt="Wi-Fi" className="top-icon" />
            <img src="/images/battery.svg" alt="Battery" className="top-icon" />
            <img src="/images/settings.svg" alt="Settings" className="top-icon" />
            <span>Fri 2:55 PM</span>
          </div>
        </div>
        </div>

        <video
          ref={videoRef}
          className="Agencies-video-player"
          poster="https://via.placeholder.com/850x450"
          controls={isPlaying}
        >
          <source src="/videos/lock.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button className="Agencies-play-button" onClick={handlePlay}>
            <img src="/images/Component 1.svg" alt="Play" />
          </button>
        )}
      </div>
    </section>
  );
};

export default AgenciesVideo;
