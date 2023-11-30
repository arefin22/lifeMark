import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Loading from "../shared/loading/Loading";
import useSingleUser from "../../hooks/User Hook/useSingleUser";

const Profile = () => {
    const { user } = useContext(AuthContext)
    const { singleUser, loading } = useSingleUser(user?.email)

    return (
        <div>
            {
                loading
                    ? <>
                        <Loading />
                    </>
                    : <div className="flex flex-col mt-10 justify-start">
                        <img src={singleUser?.avatar} alt="" className="w-44 h-44 mb-4 rounded-full" />
                        <p className="text-lg font-medium"><span className="lg:text-3xl font-bold uppercase mx-4">{singleUser?.name}</span> ({singleUser?.status})</p>
                        <p className="text-lg font-medium">Email : <span className="text-xl font-bold mx-4">{singleUser?.email}</span></p>
                        <p className="text-lg font-medium">Blood Group : {singleUser?.bloodGroup}</p>
                        <p className="text-lg font-medium">Address : {singleUser?.upazila}, {singleUser?.district}.</p>
                    </div>
            }

        </div>
    );
};

export default Profile;