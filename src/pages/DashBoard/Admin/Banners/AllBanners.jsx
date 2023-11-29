import { toast } from "react-toastify";
import Loading from "../../../../components/shared/loading/Loading";
import useAllBanner from "../../../../hooks/BannerHook/useAllBanner";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import BannerRowData from "./BannerRowData";
import { useEffect, useState } from "react";

const AllBanners = () => {
    const { allBanner, loading } = useAllBanner()
    const axiosPublic = useAxiosPublic()
    const [updatedBanner, setUpdatedBanner] = useState(allBanner)

    const handleClick = async(id) => {
        const theData = allBanner?.filter(data => data._id !== id);
        await axiosPublic.delete(`banner/${id}`)
        .then(res => {
            console.log(res);
            toast('Delete Successful', res)
        })
            setUpdatedBanner(theData)
    }
    console.log(updatedBanner);
    useEffect(() => {
        if (allBanner) {
            setUpdatedBanner(allBanner)
        }
    }, [allBanner])

    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <table className="w-full mx-auto">
                        <thead>
                            <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-10 justify-between gap-3">
                                <th className="col-span-1">Banner Photo</th>
                                <th className="col-span-1">Banner Name</th>
                                <th className="col-span-2">Banner Title</th>
                                <th className="col-span-2">Description</th>
                                <th className="col-span-1">Coupon Code</th>
                                <th className="col-span-1">Coupon Rate</th>
                                <th className="col-span-1">Update</th>
                                <th className="col-span-1">Delete</th>
                            </tr>
                        </thead>
                        {
                            <tbody>
                                {
                                    updatedBanner?.map(banner => <BannerRowData key={banner._id} handleClick={handleClick} banner={banner}></BannerRowData>)
                                }
                            </tbody>
                        }
                    </table>
            }
        </div>

    );
};

export default AllBanners;