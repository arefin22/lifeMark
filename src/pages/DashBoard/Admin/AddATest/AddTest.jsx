import { toast } from "react-toastify";
import { imageUpload } from "../../../../api/utils";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AddTest = () => {


    const {axiosPublic} = useAxiosPublic()

    const handleTestAdd = async e => {
        e.preventDefault()

        const form = e.target;
        const testName = form.testName.value;
        const image = await imageUpload(form.imageUrl.files[0]);
        const testImgUrl = image?.data?.display_url
        const testPrice = form.price.value;
        const testDate = form.date.value;
        const testSlots = form.slots.value;
        const testDetails = form.details.value;
        const testData = { testName, testDate, testImgUrl, testPrice, testSlots, testDetails }

        axiosPublic.post('/tests', testData)
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
                <input type="file" name="imageUrl" accept="image/*" placeholder="Image Url..." />
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