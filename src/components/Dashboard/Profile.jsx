import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Profile = () => {

    // const [userData, setUserData] = useState(null)

    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const loggedInUser = user?.email
    console.log(loggedInUser);

    useEffect(() => {
        const singleUserData = async () => {
            try {
                axiosPublic.get(`/user/${loggedInUser}`)
                    .then(res => console.log(res))
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle the error gracefully, show an error message, or perform other actions as needed
            }
        };
        singleUserData()
    }, [axiosPublic, loggedInUser])



    return (
        <div>
            This Is The Profile Section
        </div>
    );
};

export default Profile;