import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../components/auth/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Login = () => {
    const location = useLocation();
    const { signInUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleLogin = async e => {
        try {
            e.preventDefault()
            const form = e.target
            const email = form.email.value;
            const password = form.password.value;
            // const loginData = { email, password };
            // console.log(loginData);



            const result = await signInUser(email, password);
            const loggedInUser = result.user
            console.log(loggedInUser);
            navigate(location?.state ? location?.state : '/')
            // toast('Log In Successful')
            const loggedUser = { email }
            const res = await axiosPublic.post('/jwt', loggedUser)
            toast('Log In Successful', res);
            console.log(res);

        }
        catch (err) { console.log('Invalid Email or Password', err) }
    }

    // console.log(user);

    return (
        <div className="lg:mt-48 md:mt-16 mt-16">
            <div className="max-w-md mx-auto dark:bg-white rounded-xl p-10">
                <h3 className="text-2xl text-center font-black mb-4 text-blue-900 dark:text-gray-950">Log In Now</h3>
                <form onSubmit={handleLogin} >
                    <div className="mb-5">
                        <label htmlFor="email" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Email</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <MdOutlineMarkEmailRead />
                            </span>
                            <input type="email  " id="email" name="email" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Password</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RiLockPasswordFill />
                            </span>
                            <input type="password" id="password" name="password" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Password" />
                        </div>
                    </div>
                    {/* <button type="submit" >
                        Log In
                    </button> */}
                    <input type="submit" className="btn btn-outline mt-6 w-full text-black font-bold " value="Log In" />
                </form>
                <p className="mt-4 ml-1">Are You New? <NavLink to={'/register'} className="text-blue-800">Register Now</NavLink></p>
            </div>
        </div>
    );
};

export default Login;