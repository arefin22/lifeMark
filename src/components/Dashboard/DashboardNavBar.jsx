import { NavLink } from "react-router-dom";

const DashboardNavBar = () => {
    return (
        <div>
            <NavLink to={'/dashboard/addtest'}>Add A Test</NavLink>
        </div>
    );
};

export default DashboardNavBar;