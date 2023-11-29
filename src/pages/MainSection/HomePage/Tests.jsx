import SingleTestCard from "../../../components/Dashboard/SingleTestCard";
import Loading from "../../../components/shared/loading/Loading";
import useAllTest from "../../../hooks/TestHook/useAllTest";

const Tests = () => {

    const { allTests, loading } = useAllTest()
    // const { _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots } = test.children;

    return (
        <div className="container text-center pb-6 pt-20 mx-auto">
            <h1 className="text-4xl font-bold">All Tests</h1>
            {
                loading ? <Loading />
                    :
                    <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {
                            allTests?.map(test => <SingleTestCard key={test._id}>{test}</SingleTestCard>)
                        }
                    </div>
            }

        </div>
    );
};

export default Tests;