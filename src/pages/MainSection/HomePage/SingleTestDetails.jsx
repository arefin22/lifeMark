import { useParams } from "react-router-dom";
import useSingleTest from "../../../hooks/TestHook/useSingleTest";
import Loading from "../../../components/shared/loading/Loading";


const SingleTestDetails = () => {
    const { id } = useParams()
    const { singleTest, loading } = useSingleTest(id)

    const handleAppointment = () => {

    }
    // const { _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots } = test.children;
    return (
        <div className="mx-auto w-full">
            {
                loading ? <Loading />
                    :
                    <div>
                        <div>
                            <img className="h-96 mx-auto rounded-xl mt-4" src={singleTest?.testImgUrl} alt={singleTest?.testName} />
                        </div>
                        <div className="flex flex-col my-4 justify-center text-center">
                            <h3 className="text-4xl font-bold">{singleTest?.testName}</h3>
                            <hr className="m-10" />
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                <div className="border-r">
                                    <p>Details : </p>
                                    <p>{singleTest?.testDetails}</p>
                                </div>
                                <div>
                                    <p>Date: {singleTest?.testDate}</p>
                                    <p>Slots available: {singleTest?.testSlots}</p>
                                    <p>Price: {singleTest?.testPrice}</p>
                                    <button className="btn btn-outline" onClick={() => handleAppointment(id)}>Make Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleTestDetails;