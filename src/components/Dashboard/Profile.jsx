import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../shared/loading/Loading";

const Profile = () => {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const singleUser = (userData?.data[0]);
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()


    useEffect(() => {
        const singleUserData = async () => {
            try {
                setLoading(true)
                axiosPublic.get(`/user/${user?.email}`)
                    .then(res => {
                        setUserData(res)
                        setLoading(false)
                    })
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle the error gracefully, show an error message, or perform other actions as needed
            }
        };
        singleUserData()
    }, [axiosPublic, user])



    return (
        <div>
            {
                loading
                    ? <>
                        <Loading />
                    </>
                    : <>
                        <img src={singleUser?.avatar} alt="" className="w-44 h-44 rounded-full" />
                        <p>Name : {singleUser?.name} ({singleUser?.status})</p>
                        <p>Email : {singleUser?.email}</p>
                        <p>Blood Group : {singleUser?.bloodGroup}</p>
                        <p>Address : {singleUser?.upazila}, {singleUser?.district}.</p>
                    </>
            }

        </div>
    );
};

export default Profile;