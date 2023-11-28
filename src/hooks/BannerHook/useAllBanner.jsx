import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useAllBanner = () => {

    const [allBanner, setAllBanner] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const allUserData = async () => {
            setLoading(true)
            try {
                await axiosPublic.get('/banners')
                    .then(res => setAllBanner(res.data))
                setLoading(false)

            } catch (error) {
                console.log(error);
            }
        }
        allUserData()
    }, [axiosPublic])

    return { allBanner, loading }
};

export default useAllBanner;