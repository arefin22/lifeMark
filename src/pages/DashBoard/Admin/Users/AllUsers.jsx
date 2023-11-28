import SingleUser from "../../../../components/Dashboard/singleUser";
import Loading from "../../../../components/shared/loading/Loading";
import useGetAllUser from "../../../../hooks/User Hook/useGetAllUser";


const AllUsers = () => {

    const { allUser, loading } = useGetAllUser()


    // console.log(allUser);


    return (
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
                loading ? <>
                    <td>
                        <Loading />
                    </td>
                </>
                    :
                    <tbody>
                        {
                            allUser?.map(user => <SingleUser key={user._id} >{user}</SingleUser>)
                        }
                    </tbody>
            }
        </table>
    );
};

export default AllUsers;