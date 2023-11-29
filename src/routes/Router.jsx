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
                element: <SingleTestDetails />
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
                path: '/dashboard/testresult',
                element: <TestResult />
            },
            {
                path: '/dashboard/appointment',
                element: <Appointment />
            },
            {
                path: "/dashboard/admin",
                element: <AdminDashboard />
            },
            {
                path: "/dashboard/addtest",
                element: <AddTest />
            },
            {
                path: "/dashboard/testreport",
                element: <TestReport />
            },
            {
                path: "/dashboard/createbannar",
                element: <CreateBanner />
            },
            {
                path: "/dashboard/alluser",
                element: <AllUsers />
            },
            {
                path: '/dashboard/alltest',
                element: <AllTest />
            },
            {
                path: '/dashboard/banner',
                element: <AllBanners />
            }
        ]
    }
]);


export default router