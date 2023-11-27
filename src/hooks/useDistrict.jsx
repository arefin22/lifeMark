import axios from "axios";
import { useEffect, useState } from "react";

const useDistrict = () => {
    const [districts, setDistricts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('districts.json');
            const data = response.data;
            const districtData = data;
            // console.log(districtData);
            setDistricts(districtData);}
            fetchData();
        }, []);
    return { districts };
};

export default useDistrict;