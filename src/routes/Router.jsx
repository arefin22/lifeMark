import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../pages/MainSection/Main";
import Home from "../pages/MainSection/HomePage/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/MainSection/AuthPages/Register";
import Login from "../pages/MainSection/AuthPages/Login";
import AdminDashboard from "../pages/DashBoard/Admin/AdminDashboard";
import Dashboard from "../pages/DashBoard/Dashboard";
import Profile from "../components/Dashboard/Profile";
import AddTest from "../pages/DashBoard/Admin/AddATest/AddTest";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Profile />
            },
            {
                path: "/dashboard/admin",
                element: <AdminDashboard />
            },
            {
                path: "/dashboard/addtest",
                element: <AddTest />
            }
        ]
    }
]);


export default router