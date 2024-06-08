import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/error/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
