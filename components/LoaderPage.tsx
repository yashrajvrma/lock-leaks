import Image from 'next/image';
import keyIcon from '../public/images/lock-icon.svg';

export default function LoaderPage() {
  return (
    <div className="loader">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="sprinkle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
      <div className="text">
        <span>L</span>
        <span className="circle-spin">
          <Image
            src={keyIcon}
            alt="Spinning O"
            width={50}
            height={50}
            className="image"
          />
        </span>
        <span>ck&nbsp;Leaks</span>
      </div>
    </div>
  );
}
