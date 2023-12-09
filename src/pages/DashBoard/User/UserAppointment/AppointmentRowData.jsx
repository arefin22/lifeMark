
const AppointmentRowData = (appointment) => {
    const {test} = appointment.appointment
    const {testName, testDate, testDetails, testPrice} = test
    
    
    return (
        <tr className="drop-shadow-xl pb-6 border-b-2 grid grid-cols-10 justify-between gap-3">
            <th className="col-span-1">{testName}</th>
            <th className="col-span-1">{testDate}</th>
            <th className="col-span-2">{testDetails}</th>
            <th className="col-span-2">{testPrice}</th>
        </tr>
    );
};

export default AppointmentRowData;