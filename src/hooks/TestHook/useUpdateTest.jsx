import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useUpdateTest = (id, updatedSlots) => {
    const [updateTest, setUpdateTest] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const updatedSlot = async (id, updatedSlots) => {
            setLoading(true)
            try {
                const updatedTest = await axiosPublic.patch(`/tests/${id}`, { testSlots: updatedSlots });
                setUpdateTest(updatedTest.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        if (updatedSlots !== null) {
            updatedSlot();
        }
    }, [axiosPublic, id, updatedSlots]);
    return { updateTest, loading }
};

export default useUpdateTest;