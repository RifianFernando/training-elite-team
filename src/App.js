import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pert3 from "./pert3";

function App() {
    const router = createBrowserRouter([
        {
            path: "/login",
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
            path: "/dashboard",
            element: (
                <div>
                    <p>Halaman Dashboard</p>
                </div>
            ),
        },
        {
            path: "/latihan",
            element: <Pert3 />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
