import TestRowData from "../../../../components/Dashboard/TestRowData";
import Loading from "../../../../components/shared/loading/Loading";
import useAllTest from "../../../../hooks/TestHook/useAllTest";

const AllTest = () => {
    const { allTests, loading } = useAllTest()

    return (
        <table className="w-full mx-auto">
            <thead>
                <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-11 justify-between gap-3">
                    <th className="col-span-1">Test Photo</th>
                    <th className="col-span-2">Test Name</th>
                    <th className="col-span-2">Details</th>
                    <th className="col-span-1">Test Date</th>
                    <th className="col-span-1">Price</th>
                    <th className="col-span-1">Slots</th>
                    <th className="col-span-1">Update / Delete</th>
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
                            allTests?.map(test => <TestRowData key={test._id}>{test}</TestRowData> )
                        }
                    </tbody>
            }
        </table>
    );
};

export default AllTest;