import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../pages/MainSection/Main";
import Home from "../pages/MainSection/HomePage/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/MainSection/AuthPages/Register";
import Login from "../pages/MainSection/AuthPages/Login";


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
]);


export default router