import axios from "axios";
import { toast } from "react-toastify";

const AddTest = () => {

    const handleTestAdd = e => {
        e.preventDefault()

        const form = e.target;
        const testName = form.testName.value;
        const testImgUrl = form.imageUrl.value;
        const testPrice = form.price.value;
        const testDate = form.date.value;
        const testSlots = form.slots.value;
        const testDetails = form.details.value;
        const testData = { testName, testDate, testImgUrl, testPrice, testSlots, testDetails }

        axios.post('http://localhost:5000/tests', testData)
            .then(res => {
                if(res.data.insertedId){
                    toast('Test Added Successfully');
                }
            })
    }

    return (
        <div className="mx-auto w-full">
            <h2 className="text-3xl text-center">Add A Test</h2>
            <form onSubmit={handleTestAdd} className="flex flex-col justify-center gap-3">
                <input type="text" name="testName" placeholder="Test Name" />
                <input type="text" name="imageUrl" placeholder="Image Url..." />
                <input type="number" name="price" placeholder="Test Price" />
                <input type="date" name="date" />
                <input type="number" name="slots" placeholder="Available Test Number" />
                <textarea name="details" id="" placeholder="Write Test Details Here..." cols="30" rows="5"></textarea>
                <input type="submit" className="btn btn-outline" />
            </form>
        </div>
    );
};

export default AddTest;