import useAllTest from "../../hooks/TestHook/useAllTest";
import SingleTestCard from "../Dashboard/SingleTestCard";
import Loading from "../shared/loading/Loading";

const FeaturedTests = () => {
    const { allTests, loading } = useAllTest()
    return (
        <div className="container text-center pb-6 pt-20 mx-auto">
            <span>------------------------------</span>
            <h1 className="text-4xl font-bold"> Featured Tests </h1>
            <span>------------------------------</span>
            {
                loading ? <Loading />
                    :
                    <div className="container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {
                            allTests?.map(test => <SingleTestCard key={test._id}>{test}</SingleTestCard>)
                        }
                    </div>
            }

        </div>
    );
};

export default FeaturedTests;