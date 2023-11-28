import Loading from "../../../../components/shared/loading/Loading";
import useAllBanner from "../../../../hooks/BannerHook/useAllBanner";
import BannerRowData from "./BannerRowData";

const AllBanners = () => {

    const { allBanner, loading } = useAllBanner()
    // {bannerName, bannerImg, bannerTitle, couponCodeName, couponRate, isActive, bannerDescription}

    return (
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
                loading ? <>
                    <td>
                        <Loading />
                    </td>
                </>
                    :
                    <tbody>
                        {
                            allBanner?.map(banner => <BannerRowData key={banner._id}>{banner}</BannerRowData>)
                        }
                    </tbody>
            }
        </table>
    );
};

export default AllBanners;