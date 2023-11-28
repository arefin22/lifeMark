import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useAllTest = () => {
    const [allTests, setAllTests] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const allUserData = async () => {
            setLoading(true)
            try {
                await axiosPublic.get('/tests')
                    .then(res => setAllTests(res.data))
                setLoading(false)

            } catch (error) {
                console.log(error);
            }
        }
        allUserData()
    }, [axiosPublic])

    return {allTests, loading}
};

export default useAllTest;