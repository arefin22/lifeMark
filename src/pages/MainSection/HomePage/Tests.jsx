import { Helmet } from "react-helmet-async";
import SingleTestCard from "../../../components/Dashboard/SingleTestCard";
import Loading from "../../../components/shared/loading/Loading";
import useAllTest from "../../../hooks/TestHook/useAllTest";
import { useState } from "react";

const Tests = () => {

    const { allTests, loading } = useAllTest()
    // const { _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots } = test.children;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8

    const totalPages = Math.ceil(allTests?.length / itemsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container text-center pb-6 pt-20 mx-auto">
            <Helmet>
                <title>Tests - LifeMark</title>
            </Helmet>
            <div className="mt-5">
                <div className="text-center">
                    <span>----------------------</span>
                    <h3 className="text-5xl font-semibold">All Test</h3>
                    <span>----------------------</span>
                </div>

            </div>
            {
                loading ? <Loading />
                    :
                    <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {
                            allTests?.map(test => <SingleTestCard key={test._id}>{test}</SingleTestCard>)
                        }
                    </div>
            }

            <div className="pagination mx-auto p-7 text-center">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePaginationClick(pageNumber)}
                        className={pageNumber === currentPage ? 'active btn btn-outline bg-white dark:bg-slate-900' : 'btn btn-outline'}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Tests;