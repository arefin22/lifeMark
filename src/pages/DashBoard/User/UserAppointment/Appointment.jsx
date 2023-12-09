import { useContext } from "react";
import useAllAppointment from "../../../../hooks/Appointment/useAllAppointment";
import Loading from "../../../../components/shared/loading/Loading";
import { AuthContext } from "../../../../components/auth/AuthProvider";
import AppointmentRowData from "./AppointmentRowData";

const Appointment = () => {
    const { allAppointment, loading } = useAllAppointment()
    const { user } = useContext(AuthContext)


    // console.log(allAppointment);
    const filteredAppointments = allAppointment?.filter(singleAppointment => user?.email === singleAppointment.email)
    
    
    



    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <table className="w-full mx-auto">
                        <thead>
                            <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-10 justify-between gap-3">
                                <th className="col-span-1">Test Name</th>
                                <th className="col-span-1">Test Date</th>
                                <th className="col-span-2">Test Details</th>
                                <th className="col-span-2">Test Price</th>
                            </tr>
                        </thead>
                        {
                            <tbody>
                                {
                                    filteredAppointments?.map(appointment => <AppointmentRowData key={appointment._id} appointment={appointment}></AppointmentRowData>)
                                }
                            </tbody>
                        }
                    </table>
            }
        </div>
    );
};

export default Appointment;