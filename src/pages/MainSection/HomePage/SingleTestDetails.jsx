import { useParams } from "react-router-dom";
import useSingleTest from "../../../hooks/TestHook/useSingleTest";
import Loading from "../../../components/shared/loading/Loading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../components/auth/AuthProvider";



const SingleTestDetails = () => {
    const { id } = useParams()
    const { singleTest, loading } = useSingleTest(id)
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    console.log(singleTest);
    console.log(user);
    const handleAppointment = () => {
        const currentDate = new Date();
        const appointmentDate = new Date(singleTest?.testDate);
        if (appointmentDate < currentDate && singleTest?.testSlots <= 0 ) {
            toast('Appointment date has already passed or No available slots for this appointment.');
            return;
        }
        document.getElementById('my_modal_2').showModal()

    }
    const handleAppointmentConfirm = () => {
        const postid = singleTest?._id
        const test = singleTest
        const date = singleTest?.testDate
        const email = user?.email
        const appointmentdata = {postid, test, date, email}
        console.log(appointmentdata);
        axiosPublic.post('/appointment', appointmentdata)
            .then(res => { console.log(res.data)
                if (res.data._id) {
                    toast('Appointment Successful');
                }
            })
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
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">

                    <button className="btn btn-ghost" onClick={handleAppointmentConfirm}>Make Payment</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default SingleTestDetails;