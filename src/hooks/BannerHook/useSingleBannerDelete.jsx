import useAllBanner from "./useAllBanner";

const useSingleBannerDelete = () => {
    const { allBanner } = useAllBanner()

    const activeBanner = allBanner?.find(banner => banner.isActive === "true")
    console.log(activeBanner);
};

export default useSingleBannerDelete;