import useAllBanner from "./useAllBanner";

const useSingleBanner = () => {
    const {allBanner} = useAllBanner()

    const activeBanner = allBanner?.find(banner => banner.isActive === "true")
    // console.log(activeBanner);
    
    return activeBanner
};

export default useSingleBanner;