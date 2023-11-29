import { useState } from "react";
import SingleUser from "../../../../components/Dashboard/singleUser";
import Loading from "../../../../components/shared/loading/Loading";
import useGetAllUser from "../../../../hooks/User Hook/useGetAllUser";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AllUsers = () => {

    const { allUser, loading } = useGetAllUser()
    const [user, setUser] = useState([])
    const axiosPublic = useAxiosPublic()

    const handleShowModal = (id) => {
        setUser(allUser[id]);
        document.getElementById('my_modal_2').showModal()
    }
    const handleUserUpdate = async(e) => {
        e.preventDefault()
    }

    return (
        <div>


            {
                loading ? <Loading /> :
                    <table className="w-full mx-auto">
                        <thead>
                            <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-11 justify-between gap-3">
                                <th className="col-span-1">Profile Photo</th>
                                <th className="col-span-2">Name</th>
                                <th className="col-span-2">Email</th>
                                <th className="col-span-1">Blood Group</th>
                                <th className="col-span-1">District</th>
                                <th className="col-span-1">Upazila</th>
                                <th className="col-span-1">Role</th>
                                <th className="col-span-1">Status</th>
                                <th className="col-span-1">Details</th>
                            </tr>
                        </thead>
                        {
                            <tbody>
                                {
                                    allUser?.map((user, index) => (
                                        <SingleUser key={user._id} index={index} user={user} handleShowModal={handleShowModal} />
                                    ))
                                }
                            </tbody>
                        }
                    </table>
            }

            <div>
                {/* <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>See Details</button> */}
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <img src={user?.avatar} className="w-10 h-10 mx-auto rounded-full" />
                        <h3 className="font-bold text-lg">{user?.name}</h3>
                        <p className="py-4">{user?.email}</p>
                        <p>BloodGroup : {user?.bloodGroup}</p>
                        <p>Address : {user?.upazila}, {user?.district}</p>
                        <form className="flex flex-col justify-center text-left" onSubmit={handleUserUpdate}>
                            <label htmlFor="">Role</label>
                            <select name="role" defaultValue={user?.role}>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            <label htmlFor="">Status</label>
                            <select name="status" defaultValue={user?.status}>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                            </select>
                            <input type="submit" className="btn btn-ghost btn-outline mt-2" value="Update Profile" />
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>

        </div>
    );
};

export default AllUsers;