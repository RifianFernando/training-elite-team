import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pert3 from './pert3';
import Shop from './pages/shop';
import ContactUs from './pages/contactUs';

function App() {
    const router = createBrowserRouter([
        {
            path: '/login',
            element: (
                <div>
                    <p>Halaman Login</p>
                    <form>
                        <input type="email" />
                    </form>
                </div>
            ),
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
    ]);

    return <RouterProvider router={router} />;
}

export default App;
