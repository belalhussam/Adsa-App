import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
        <main className="pt-20">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
