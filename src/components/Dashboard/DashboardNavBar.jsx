import { NavLink } from "react-router-dom";

const DashboardNavBar = () => {
    return (
        <div className="flex flex-col">
            <NavLink to={'/dashboard/addtest'}>Add A Test</NavLink>
            <NavLink to={'/dashboard/testreport'}>Test Report</NavLink>
            <NavLink to={'/dashboard/createbannar'}>Create Banner</NavLink>
            <NavLink to={'/dashboard/alluser'}>All Users</NavLink>
        </div>
    );
};

export default DashboardNavBar;