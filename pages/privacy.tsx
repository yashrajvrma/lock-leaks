import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/global.css';
import '../styles/termsConditions.css';
import Footer from '@/components/footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Newheader from '@/components/newheader';


export default function Contact() {
  return (
    <> 
      {/* <Header />  */}
      <Newheader/>
      <PrivacyPolicy />
      <Footer />
      
    </>
  );
}

