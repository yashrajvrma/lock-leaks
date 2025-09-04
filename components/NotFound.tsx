'use client';
import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">OOOPS ! PAGE NOT FOUND</h2>
        <p className="notfound-text">
          Sorry the page you are looking for does not exist, if you think<br />
          something is broken, report a problem
        </p>
      </div>

      <div className="notfound-dots-container">
        <div className="notfound-dot" style={{ top: '90%', left: '5%', animationDelay: '0s' }}></div>
        <div className="notfound-dot" style={{ top: '80%', left: '30%', animationDelay: '1s' }}></div>
        <div className="notfound-dot" style={{ top: '95%', left: '55%', animationDelay: '2.5s' }}></div>
        <div className="notfound-dot" style={{ top: '85%', left: '75%', animationDelay: '3.2s' }}></div>
        <div className="notfound-dot" style={{ top: '92%', left: '88%', animationDelay: '4s' }}></div>
        <div className="notfound-dot" style={{ top: '98%', left: '20%', animationDelay: '1.8s' }}></div>
      </div>
    </div>
  );
}
