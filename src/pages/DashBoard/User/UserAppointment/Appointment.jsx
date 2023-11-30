import { useContext, useEffect, useState } from "react";
import useAllAppointment from "../../../../hooks/Appointment/useAllAppointment";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Loading from "../../../../components/shared/loading/Loading";
import AppointmentRowData from "./AppointmentRowData";
import { AuthContext } from "../../../../components/auth/AuthProvider";
import useSingleTest from "../../../../hooks/TestHook/useSingleTest";

const Appointment = () => {
    const { allAppointment, loading } = useAllAppointment()
    const { user } = useContext(AuthContext)
    const { singleTest } = useSingleTest(id)

    // console.log(allAppointment);
    const filteredAppointments = allAppointment?.filter(singleAppointment => user?.email === singleAppointment.email)
    // console.log(adata?.map(data => data.postid));
    const postIDs = filteredAppointments?.map(data => data.postid)

    console.log(singleTest);


    // const handleClick = async (id) => {
    //     const theData = allBanner?.filter(data => data._id !== id);
    //     await axiosPublic.delete(`appointment/${id}`)
    //         .then(res => {
    //             console.log(res);
    //             toast('Delete Successful', res)
    //         })
    //     setUpdatedBanner(theData)
    // }


    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <table className="w-full mx-auto">
                        <thead>
                            <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-10 justify-between gap-3">
                                <th className="col-span-1">Banner Photo</th>
                                <th className="col-span-1">Banner Name</th>
                                <th className="col-span-2">Banner Title</th>
                                <th className="col-span-2">Description</th>
                                <th className="col-span-1">Coupon Code</th>
                                <th className="col-span-1">Coupon Rate</th>
                                <th className="col-span-1">Update</th>
                                <th className="col-span-1">Delete</th>
                            </tr>
                        </thead>
                        {
                            // <tbody>
                            //     {
                            //         updatedAppointment?.map(appointment => <AppointmentRowData key={appointment._id} appointment={appointment}></AppointmentRowData>)
                            //     }
                            // </tbody>
                        }
                    </table>
            }
        </div>
    );
};

export default Appointment;