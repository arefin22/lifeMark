import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";


const useAllAppointment = () => {

        const [allAppointment, setAllAppointment] = useState(null);
        const [loading, setLoading] = useState(false);
        const axiosPublic = useAxiosPublic();
        useEffect(() => {
            const allUserData = async () => {
                setLoading(true)
                try {
                    await axiosPublic.get('/appointment')
                        .then(res => setAllAppointment(res.data))
                    setLoading(false)

                } catch (error) {
                    console.log(error);
                }
            }
            allUserData()
        }, [axiosPublic])

        return { allAppointment, loading }
};

export default useAllAppointment;