import TermsContent from '../components/TermsConditions';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/global.css';
import '../styles/termsConditions.css';
import Footer from '@/components/footer';
import Newheader from '@/components/newheader';


export default function Contact() {
  return (
    <> 
      {/* <Header />  */}
      <Newheader/>
      <TermsContent />
      <Footer />
      
    </>
  );
}

