
import Login from './components/Login';
import Register from './components/Register';

const authRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];


export default authRoutes;
