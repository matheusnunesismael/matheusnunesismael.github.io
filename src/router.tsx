import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <div>404</div>,
  },
]);
