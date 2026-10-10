import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/LayOut/LayOut';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Notfound from '../pages/Notfound/Notfound';
const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
    
      { path: '*', element: <Notfound /> },
    ],
  },
]);
export default routes;
