import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DashboardNavBar = () => {
    return (
        <div className="flex flex-col">
            <NavLink to={'/'} className="flex items-center gap-4"><FaArrowLeft /> Back To Home</NavLink>
            <NavLink to={'/dashboard/alluser'}>All Users</NavLink>
            <NavLink to={'/dashboard/alltest'}>All Tests</NavLink>
            <NavLink to={'/dashboard/addtest'}>Add A Test</NavLink>
            <NavLink to={'/dashboard/testreport'}>Test Report</NavLink>
            <NavLink to={'/dashboard/createbannar'}>Create Banner</NavLink>
        </div>
    );
};

export default DashboardNavBar;