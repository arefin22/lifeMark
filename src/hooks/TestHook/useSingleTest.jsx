import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useSingleTest = (id) => {
    const [singleTest, setSingleTest] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const allUserData = async () => {
            setLoading(true)
            try {
                await axiosPublic.get(`/tests/${id}`)
                    .then(res => setSingleTest(res.data))
                setLoading(false)

            } catch (error) {
                console.log(error);
            }
        }
        allUserData()
    }, [axiosPublic, id])
    return {singleTest, loading}
};

export default useSingleTest;