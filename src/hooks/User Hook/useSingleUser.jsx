import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useSingleUser = (email) => {
    const [singleUser, setSingleUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const singleUserData = async () => {
            setLoading(true)
            try {
                await axiosPublic.get(`/user/${email}`)
                    .then(res => setSingleUser(res.data))
                setLoading(false)

            } catch (error) {
                console.log(error);
            }
        }
        singleUserData()
    }, [axiosPublic, email])

    return { singleUser, loading }
};

export default useSingleUser;