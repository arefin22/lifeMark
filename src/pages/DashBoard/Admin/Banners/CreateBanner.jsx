import axios from "axios";
import { toast } from "react-toastify";

const CreateBanner = () => {

    const handleBanner = e => {
        e.preventDefault()
        const form = e.target;
        const bannerName = form.bannerName.value;
        const bannerImg = form.bannerImg.value;
        const bannerTitle = form.bannerTitle.value;
        const couponCodeName = form.couponCodeName.value;
        const couponRate = form.couponRate.value;
        const isActive = form.isActive.value;
        const bannerDescription = form.description.value

        const bannerData = {bannerName, bannerImg, bannerTitle, couponCodeName, couponRate, isActive, bannerDescription}

        axios.post('http://localhost:5000/banners', bannerData)
            .then(res => {
                if(res.data.insertedId){
                    toast('Banner Added Successfully');
                }
            })
    }

    return (
        <div>

            <h2 className="text-3xl text-center mb-4">Create A Banner</h2>

            <form action="" onSubmit={handleBanner} className="flex flex-col gap-4">
                <input type="text" name="bannerName" id="" placeholder="Banner Name" />
                <input type="text" name="bannerImg" id="" placeholder="Image Url..." />
                <input type="text" name="bannerTitle" id="" placeholder="Banner Title" />
                <input type="text" name="couponCodeName" id="" placeholder="Coupon Code Name" />
                <input type="number" name="couponRate" id="" placeholder="Coupon Rate"/>
                <select name="isActive" id="">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <textarea name="description" id="" cols="30" rows="3" placeholder="Description"></textarea>
                <input type="submit" value="Add Banner" className="btn btn-outline" />
            </form>
        </div>
    );
};

export default CreateBanner;