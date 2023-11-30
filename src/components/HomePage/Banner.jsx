import { Link } from "react-router-dom";
import useSingleBanner from "../../hooks/BannerHook/useSingleBanner";

const Banner = () => {

    const activeBanner = useSingleBanner()
    const bannerImg = activeBanner?.bannerImg;
    // console.log(activeBanner);
    
    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-4xl md:text-8xl text-white font-bold">{activeBanner?.bannerTitle}</h1>
                    <p className="my-10 text-lg text-white">{activeBanner?.bannerDescription}</p>
                    <div className="flex justify-center items-center text-lg">
                        <p className="bg-slate-800 text-white p-3 pr-0 rounded-lg">Promo Code : <span className="font-bold bg-slate-600 p-3 rounded-lg">{activeBanner?.couponCodeName}</span></p>
                        <p className="text-xl bg-yellow-400 p-3 rounded-lg text-black ml-5">{activeBanner?.couponRate} % Off</p>
                    </div>
                    <Link to={'/tests'} className="btn btn-outline mt-10">Visit All Tests</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;