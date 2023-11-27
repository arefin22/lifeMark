import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const NavBar = () => {
    const [theme, setTheme] = useState('light');

    const { user , signOutFromSite} = useContext(AuthContext);

    useEffect(() => {
        // Get the initial theme from local storage or media query
        const initialTheme = localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        // Set the theme state and the document class accordingly
        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    // Handle the click event on the button
    const handleClick = () => {
        // Toggle the theme state and the document class
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
        // Store the new theme in local storage
        localStorage.setItem('color-theme', newTheme);
    };



    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 drop-shadow-lg top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="LifeMark Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LifeMark</span> */}
                    {
                        theme === "light"
                            ? <>
                                <img className="w-44" src="https://i.ibb.co/hH017JT/Blue-Logo.png" alt="LifeMark Logo" />
                            </>
                            : <>
                                <img className="w-44" src="https://i.ibb.co/CbmMyPz/White-Logo.png" alt="LifeMark" />
                            </>
                    }
                </NavLink>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Theme toggle Btn */}
                    <button id="theme-toggle" type="button" onClick={handleClick} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-lg lg:mr-7 text-sm p-2.5">
                        {
                            theme === "light"
                                ? <>
                                    <FiSun />
                                </>
                                : <>
                                    <FaMoon />
                                </>
                        }
                    </button>


                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                        {
                            user
                            ? 
                            <>
                            <div>
                                <span onClick={signOutFromSite}>Log Out</span>
                            </div>
                            </>
                            :
                            <>
                            <NavLink to={'/login'}>Log In</NavLink>
                            </>
                        }
                    </button>


                    {/* Burger Button */}
                    <button data-collapse-toggle="NavBar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="NavBar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>



                {/* NavLink Section */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="NavBar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;