
const SingleTestCard = test => {
    const { testDate, testDetails, testImgUrl, testName, testPrice, testSlots } = test.children;
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={testImgUrl} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{testName}</h5>
                    <h5 className="tracking-tight text-left text-gray-900 dark:text-white">{testDetails}</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${testPrice}</span>
                    <div className="flex flex-col justify-center text-right">
                        <span className="text-gray-900 dark:text-white">Date : {testDate}</span>
                        <span className="text-gray-900 dark:text-white">Available Slots : {testSlots}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Make Reservation</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleTestCard;