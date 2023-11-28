import { NavLink } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../components/auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import useDistrict from "../../../hooks/useDistrict";
import useUpazila from "../../../hooks/useUpazila";
import { imageUpload } from "../../../api/utils";

const Register = () => {

    const { registerUser } = useContext(AuthContext)

    // const isStrongPassword = (password) => {
    //     // const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]).{6,}$/;
    //     const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    //     return strongPassword.test(password);
    // };

    const { districts } = useDistrict();
    const { upazilas } = useUpazila('upazilas.json');

    const handleRegister = async e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const name = form.name.value;
        const image = await imageUpload(form.avatar.files[0]);
        const avatar = image?.data?.display_url
        console.log(avatar);
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const status = 'active';
        const role = 'user';
        const loginData = { email, name, avatar, bloodGroup, district, upazila, password, confirmPassword, status, role };

        await axios.post('http://localhost:5000/user', loginData)
            .then(res => {
                console.log(res);
            })
        // console.log(aPassword);
        // if (!isStrongPassword(password)) {
        //     toast('Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one number');
        //     return;
        // }
        // else
        if (confirmPassword !== password) {
            toast('Password Miss matched Please Check And Submit')
            return
        }
        registerUser(email, password)
            .then(res => toast('Congratulations! For Being A Member', res))
            .catch(err => toast('Try Again Please', err))


    }
    return (
        <div className="mt-16">
            <div className="max-w-5xl mx-auto dark:bg-white rounded-xl p-10">
                <h3 className="text-2xl text-center font-black mb-4 text-blue-900 dark:text-gray-950">Sign Up</h3>
                <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="">
                        <label htmlFor="name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Name</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <FaUserAlt />
                            </span>
                            <input required type="text" id="name" name="name" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" />
                        </div>
                    </div>
                    {/* email */}
                    <div className="">
                        <label htmlFor="email" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Email</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <MdOutlineMarkEmailRead />
                            </span>
                            <input required type="email" id="email" name="email" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" />
                        </div>
                    </div>
                    {/* Avatar */}
                    <div className="">
                        <label htmlFor="avatar" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Avatar</label>
                        <div className="flex">
                            <input name="avatar" required className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="avatar" type="file" accept="image/*" />
                        </div>
                    </div>
                    {/* Blood Group */}
                    <div className="">
                        <label htmlFor="bloodGroup" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Blood Group</label>
                        <div className="flex">
                            <select id="bloodGroup" required name="bloodGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >Select A Blood Group</option>
                                <option value="A+">A +</option>
                                <option value="A-">A -</option>
                                <option value="B+">B +</option>
                                <option value="B-">B -</option>
                                <option value="AB+">AB +</option>
                                <option value="AB-">AB -</option>
                                <option value="O+">O +</option>
                                <option value="O-">O -</option>
                            </select>
                        </div>
                    </div>
                    {/* district Group */}
                    <div className="">
                        <label htmlFor="district" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">District</label>
                        <div className="flex">
                            <select id="district" required name="district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    districts?.map((district) => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                    </div>
                    {/* upazila Group */}
                    <div className="">
                        <label htmlFor="upazila" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Upazila</label>
                        <div className="flex">
                            <select id="upazila" required name="upazila" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    upazilas.map(upazila => (
                                        <option key={upazila.id} value={upazila.name}> {upazila.name}</option>

                                    ))
                                }
                            </select>

                        </div>
                    </div>
                    {/* password */}
                    <div className="">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Password</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RiLockPasswordFill />
                            </span>
                            <input required type="password" id="password" name="password" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Password" />
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-950">Confirm Password</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RiLockPasswordFill />
                            </span>
                            <input required type="password" id="confirmPassword" name="confirmPassword" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <button type="submit" className="btn md:col-span-2 btn-outline mt-3 w-full text-black font-bold ">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 ml-1">Already Have An Account? <NavLink to={'/login'} className="text-blue-800">Log In</NavLink></p>
            </div>
        </div>
    );
};

export default Register;