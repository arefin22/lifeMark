import { Helmet } from "react-helmet-async";
import Banner from "../../../components/HomePage/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - LifeMark</title>
            </Helmet>
            <Banner />
        </div>
    );
};

export default Home;