import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <NavLink to={'/'} className="block py-2 px-3 dark:text-white text-blue-500" >
                Home
            </NavLink>
            <NavLink to={'/dashboard'} className="block py-2 px-3 dark:text-white text-blue-500" >
                Dashboard
            </NavLink>
        </>
    );
};

export default NavLinks;