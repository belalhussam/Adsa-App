import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ScrollToTop from '../Scroll/ScrollToTop';
export default function Layout() {
  return (
    <div>
      <div className="flex flex-col">
        <ScrollToTop />
        <NavBar />
        <main className="pt-20">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
