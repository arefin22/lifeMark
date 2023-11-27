import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllUser = () => {
    const [allUser, setAllUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const allUserData = async () => {
            setLoading(true)
            try {
                await axiosPublic.get('/user')
                    .then(res => setAllUser(res.data))
                setLoading(false)
                
            } catch (error) {
                console.log(error);
            }
        }
        allUserData()
    }, [axiosPublic])

    return {allUser, loading}
};

export default useGetAllUser;