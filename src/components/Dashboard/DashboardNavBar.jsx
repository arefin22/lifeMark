import { NavLink } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";

const DashboardNavBar = () => {
    return (
        <div className="flex flex-col">
            <NavLink to={'/'} className="flex pb-4 items-center gap-4">
                <img className="w-44" src="https://i.ibb.co/CbmMyPz/White-Logo.png" alt="LifeMark" />
            </NavLink>
            <hr className=" p-3" />

            <NavLink to={'/dashboard'} className="py-4 px-4 mb-1 hover:bg-slate-800 bg-slate-700 rounded-lg">Profile</NavLink>
            <NavLink to={'/dashboard/testresult'} className="py-4 px-4 mb-1 hover:bg-slate-800 bg-slate-700 rounded-lg">Test Result</NavLink>
            <NavLink to={'/dashboard/appointment'} className="py-4 px-4 mb-1 hover:bg-slate-800 bg-slate-700 rounded-lg">Upcoming Appointment</NavLink>
            
            
            
            
            <NavLink to={'/dashboard/alluser'} className="py-4 px-4 mb-1 hover:bg-slate-800 bg-slate-700 rounded-lg">All Users</NavLink>
            <NavLink to={'/dashboard/alltest'} className="py-4 px-4 bg-slate-700 rounded-lg mb-1 hover:bg-slate-800">All Tests</NavLink>
            <NavLink to={'/dashboard/banner'} className="py-4 px-4 bg-slate-700 rounded-lg mb-1 hover:bg-slate-800">All Banner</NavLink>
            <NavLink to={'/dashboard/addtest'} className="py-4 px-4 bg-slate-700 rounded-lg mb-1 hover:bg-slate-800">Add A Test</NavLink>
            <NavLink to={'/dashboard/testreport'} className="py-4 px-4 bg-slate-700 rounded-lg mb-1 hover:bg-slate-800">Test Report</NavLink>
            <NavLink to={'/dashboard/createbannar'} className="py-4 px-4 bg-slate-700 rounded-lg mb-1 hover:bg-slate-800">Create Banner</NavLink>
        </div>
    );
};

export default DashboardNavBar;