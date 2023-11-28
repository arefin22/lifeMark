import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const TestRowData = test => {
    const { _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots } = test.children;

    const axiosPublic = useAxiosPublic()

    const handleDelete = async () => {
        await axiosPublic.delete(`tests/${_id}`)
            .then(res => console.log(res))
    }
    // const handleEdit = async () => {
    //     await axiosPublic.put(`tests/${_id}`)
    // }


    return (
        <tr className="drop-shadow-xl pb-6 mt-6 grid grid-cols-11 items-center text-center mx-auto justify-center gap-3">
            <td className="col-span-1"><img src={testImgUrl} className="w-10 h-10 mx-auto rounded-full" /></td>
            <td className="col-span-2">{testName}</td>
            <td className="col-span-2">{testDetails}</td>
            <td className="col-span-1">{testDate}</td>
            <td className="col-span-1">{testPrice}</td>
            <td className="col-span-1">{testSlots}</td>
            <td className="col-span-1 flex justify-around text-xl font-thin">
                <FaEdit></FaEdit>
                <MdOutlineDelete onClick={() => handleDelete(_id)}></MdOutlineDelete>
            </td>
        </tr>
    );
};

export default TestRowData;