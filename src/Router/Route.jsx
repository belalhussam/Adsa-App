import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/LayOut/LayOut';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import BlogPostDetails from '../pages/Blog/BlogPostDetails';
import Home from '../pages/Home/Home';
import Notfound from '../pages/Notfound/Notfound';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogPostDetails /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);
export default routes;
