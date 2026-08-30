import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Coverage from "../Pages/Coverage/Coverage.jsx";
import Loader from "../Components/Loader/Loader.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Pages/Auth/Login/Login.jsx";
import Registration from "../Pages/Auth/Registration/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Rider from "../Rider/Rider.jsx";
import SendPercel from "../Pages/SendPercel/SendPercel.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";
import MyPurcels from "../Pages/Dashboard/MyPurcels/MyPurcels.jsx";

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
            },
            {
                path: '/rider',
                element: <PrivateRoute>
                    <Rider></Rider>
                </PrivateRoute>
            },
            {
                path: '/send-percel',
                element: <PrivateRoute>
                    <SendPercel></SendPercel>
                </PrivateRoute>,
                loader: () => fetch('/warehouses.json').then(res => res.json()),
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component:Login
            },
            {
                path: '/registration',
                Component:Registration
            }
        ]
    },

    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: 'my-purcels',
                Component:MyPurcels
                
            }
        ]
    }

    
])


