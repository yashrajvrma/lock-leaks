import { useEffect, useState } from 'react';
import LoaderPage from '../components/LoaderPage';
import '../styles/LoaderPage.css'; // global styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Bootstrap JS only on client
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        // optional: console.log('Bootstrap JS loaded');
      })
      .catch(err => console.error('Bootstrap JS load failed:', err));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoaderPage /> : <Component {...pageProps} />;
}
