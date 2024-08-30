import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../screens/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      // Aquí puedes agregar más rutas si es necesario
    ],
  },
]);

export default router;
