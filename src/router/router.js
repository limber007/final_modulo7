import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import LoginForm from '../LoginForm';
import LandingPage from '../screens/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginForm />,
      },
      {
        path: '/landing',
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ],
  },
]);

export default router;
