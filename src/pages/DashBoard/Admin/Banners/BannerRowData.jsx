import { toast } from "react-toastify";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const BannerRowData = banner => {

    const {_id, bannerName, bannerImg, bannerTitle, couponCodeName, couponRate, isActive, bannerDescription } = banner.children

    const axiosPublic = useAxiosPublic()

    const handleDelete = async () => {
        await axiosPublic.delete(`banner/${_id}`)
            .then(res => {
                toast('Delete Successful', res)
            })
    }

    return (
        <tr className="drop-shadow-xl pb-6 mt-6 grid grid-cols-10 items-center text-center mx-auto justify-center gap-3">
            <td className="col-span-1"><img src={bannerImg} className="w-10 h-10 mx-auto rounded-full" /></td>
            <td className="col-span-1">{bannerName}</td>
            <td className="col-span-2">{bannerTitle}</td>
            <td className="col-span-2">{bannerDescription}</td>
            <td className="col-span-1">{couponCodeName}</td>
            <td className="col-span-1">{couponRate}</td>
            <td className="col-span-1">{isActive}</td>
            <td className="col-span-1">
                <button onClick={() => handleDelete(_id)} className="mx-10 btn btn-outline">X</button>
            </td>
            {/* <td className="col-span-1 flex justify-around text-xl font-thin">
                <FaEdit></FaEdit>
                <MdOutlineDelete onClick={() => handleDelete(_id)}></MdOutlineDelete>
            </td> */}
        </tr>
    );
};

export default BannerRowData;