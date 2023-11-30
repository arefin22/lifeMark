import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const NavLinks = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <NavLink to={'/'} className="block py-2 px-3 dark:text-white text-blue-500" >
                Home
            </NavLink>
            <NavLink to={'/tests'} className="block py-2 px-3 dark:text-white text-blue-500" >
                All Tests
            </NavLink>
            <NavLink to={'/news'} className="block py-2 px-3 dark:text-white text-blue-500" >
                News
            </NavLink>
            <NavLink to={'/about'} className="block py-2 px-3 dark:text-white text-blue-500" >
                About Us
            </NavLink>
            <NavLink to={'/contuctus'} className="block py-2 px-3 dark:text-white text-blue-500" >
                Contact Us
            </NavLink>

            {
                user ? <>
                    <NavLink to={'/dashboard'} className="block py-2 px-3 dark:text-white text-blue-500" >
                        Dashboard
                    </NavLink>
                </>
                    :
                    <></>
            }

        </>
    );
};

export default NavLinks;