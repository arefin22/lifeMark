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
                    : <>
                        <img src={singleUser[0]?.avatar} alt="" className="w-44 h-44 rounded-full" />
                        <p>Name : {singleUser[0]?.name} ({singleUser[0]?.status})</p>
                        <p>Email : {singleUser[0]?.email}</p>
                        <p>Blood Group : {singleUser[0]?.bloodGroup}</p>
                        <p>Address : {singleUser[0]?.upazila}, {singleUser[0]?.district}.</p>
                    </>
            }

        </div>
    );
};

export default Profile;