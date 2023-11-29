import { useParams } from "react-router-dom";
import useSingleTest from "../../../hooks/TestHook/useSingleTest";
import Loading from "../../../components/shared/loading/Loading";


const SingleTestPage = () => {
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
                        <img className="w-1/2 mt-3" src={singleTest?.testImgUrl} alt={singleTest?.testName} />
                        <h3>{singleTest?.testName}</h3>
                        <p>Date: {singleTest?.testDate}</p>
                        <p>Slots available: {singleTest?.testSlots}</p>
                        <p>Price: {singleTest?.testPrice}</p>
                        <button onClick={() => handleAppointment(id)}>Make Appointment</button>
                    </div>
            }
        </div>
    );
};

export default SingleTestPage;