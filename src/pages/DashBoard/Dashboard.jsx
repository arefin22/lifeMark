import { Outlet } from "react-router-dom";
import DashboardNavBar from "../../components/Dashboard/DashboardNavBar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-6 mx-auto">
            <Helmet>
                <title>DashBoard - LifeMark</title>
            </Helmet>
            <div className="col-span-1 bg-slate-600 dark:bg-sky-950 p-7 min-h-screen">
                <DashboardNavBar />
            </div>
            <div className="col-span-4 p-7">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;