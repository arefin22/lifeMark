import axios from "axios";
import { useEffect, useState } from "react";

const useUpazila = (url) => {
    const [upazilas, setUpazilas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url)
            const data = res?.data;
            const upazilaData = data[2].data;
            setUpazilas(upazilaData)
        }
        fetchData()
    }, [url])
    return { upazilas };
};

export default useUpazila;