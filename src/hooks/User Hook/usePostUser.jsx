import useAxiosPublic from "../useAxiosPublic";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../components/auth/AuthProvider";

const usePostUser = (loginData) => {
    const axiosPublic = useAxiosPublic()
    const {registerUser} = useContext(AuthContext)

    const postUser = async () => {
        await axiosPublic.post('/user', loginData)
            .then(res => {
                console.log(res);
            })
    }
    if (loginData?.confirmPassword !== loginData?.password) {
        toast('Password Miss matched Please Check And Submit')
        return
    }
    registerUser(loginData?.email, loginData?.password)
        .then(res => toast('Congratulations! For Being A Member', res))
        .catch(err => toast('Try Again Please', err))

    return postUser
};

export default usePostUser;