import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-white shadow flex flex-col justify-center items-center dark:bg-gray-800 min-h-screen mx-auto text-center">
            <h4 className="text-blue-950 dark:text-white text-center font-black text-9xl lg:text-[300px] xl:text-[500px]">404</h4>
            <h4 className="text-blue-950 dark:text-white text-center font-thin text-2xl">Not Found</h4>
            <NavLink to={'/'} className="">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Back To Home
                    </span>
                </button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;