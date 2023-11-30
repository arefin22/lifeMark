import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/MainSection/Main";
import Home from "../pages/MainSection/HomePage/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/MainSection/AuthPages/Register";
import Login from "../pages/MainSection/AuthPages/Login";
import AdminDashboard from "../pages/DashBoard/Admin/AdminDashboard";
import Dashboard from "../pages/DashBoard/Dashboard";
import Profile from "../components/Dashboard/Profile";
import AddTest from "../pages/DashBoard/Admin/AddATest/AddTest";
import TestReport from "../pages/DashBoard/Admin/AddATest/TestReport";
import CreateBanner from "../pages/DashBoard/Admin/Banners/CreateBanner";
import AllUsers from "../pages/DashBoard/Admin/Users/AllUsers";
import AllTest from "../pages/DashBoard/Admin/AllTests/AllTest";
import AllBanners from "../pages/DashBoard/Admin/Banners/AllBanners";
import Tests from "../pages/MainSection/HomePage/Tests";
import SingleTestDetails from "../pages/MainSection/HomePage/SingleTestDetails";
import TestResult from "../pages/DashBoard/User/UserTestResult/TestResult";
import Appointment from "../pages/DashBoard/User/UserAppointment/Appointment";
import PrivateRoute from "../components/auth/PrivateRoute";
import AboutUs from "../pages/MainSection/ExtraPages/AboutUs";
import ContuctUs from "../pages/MainSection/ExtraPages/ContuctUs";
import News from "../pages/MainSection/ExtraPages/News";


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
            },
            {
                path: '/tests',
                element: <Tests />
            },
            {
                path: '/tests/:id',
                element: <PrivateRoute><SingleTestDetails /></PrivateRoute>
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contuctus',
                element: <ContuctUs />
            },
            {
                path: '/news',
                element: <News />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/dashboard/testresult',
                element: <PrivateRoute><TestResult /></PrivateRoute>
            },
            {
                path: '/dashboard/appointment',
                element: <PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path: "/dashboard/admin",
                element: <PrivateRoute><AdminDashboard /></PrivateRoute>
            },
            {
                path: "/dashboard/addtest",
                element: <PrivateRoute><AddTest /></PrivateRoute>
            },
            {
                path: "/dashboard/testreport",
                element: <PrivateRoute><TestReport /></PrivateRoute>
            },
            {
                path: "/dashboard/createbannar",
                element: <PrivateRoute><CreateBanner /></PrivateRoute>
            },
            {
                path: "/dashboard/alluser",
                element: <PrivateRoute><AllUsers /></PrivateRoute>
            },
            {
                path: '/dashboard/alltest',
                element: <PrivateRoute><AllTest /></PrivateRoute>
            },
            {
                path: '/dashboard/banner',
                element: <PrivateRoute><AllBanners /></PrivateRoute>
            }
        ]
    }
]);


export default router