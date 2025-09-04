import Header from '@/components/header';
import NotFound from '@/components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Newheader from '@/components/newheader';

export default function Custom404() {
  return (
    <>
      {/* <Header /> */}
      <Newheader/>
      <NotFound />
      
    </>
  );
}
