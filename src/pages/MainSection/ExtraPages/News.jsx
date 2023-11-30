import { Helmet } from "react-helmet-async";

const News = () => {
    return (
        <div className="mt-5">
            <Helmet>
                <title>News - LifeMark</title>
            </Helmet>
            <div className="text-center">
                <span>----------------------</span>
                <h3 className="text-5xl font-semibold">Treatment News</h3>
                <span>----------------------</span>
            </div>

        </div>
    );
};

export default News;