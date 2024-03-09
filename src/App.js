import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pert3 from './pert3';
import Shop from './pages/shop';
import ContactUs from './pages/contactUs';
import Login from './auth/login';
import Register from './auth/register';

function App() {
    const router = createBrowserRouter([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/dashboard',
            element: (
                <div>
                    <p>Halaman Dashboard</p>
                </div>
            ),
        },
        {
            path: '/latihan',
            element: <Pert3 />,
        },
        {
            path: '/',
            element: <Shop />,
        },
        {
            path: '/contact-us',
            element: <ContactUs />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
