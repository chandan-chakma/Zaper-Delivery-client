import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Coverage from "../Pages/Coverage/Coverage.jsx";
import Loader from "../Components/Loader/Loader.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component:Home
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json()),
                hydrateFallbackElement:<Loader></Loader>
            }
        ]
    }
])


