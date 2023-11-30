import { Helmet } from "react-helmet-async";
import Banner from "../../../components/HomePage/Banner";
import FeaturedTests from "../../../components/HomePage/FeaturedTests";
import HealthTips from "../../../components/HomePage/HealthTips";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - LifeMark</title>
            </Helmet>
            <Banner />
            <FeaturedTests />
            <HealthTips />
        </div>
    );
};

export default Home;