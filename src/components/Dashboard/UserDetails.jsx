
const UserDetails = user => {
    console.log(user.user.children);
    const { name, email, avatar, bloodGroup, district, upazila, role, status } = user.user.children;
    const handleUserUpdate = e => {
        e.preventDefault()
        const form = e.target
        const newRole = form.role.value
        const newStatus = form.status.value

        const updatedUser = {newRole , newStatus}
        console.log(updatedUser);
    }
    return (
        <div>
            <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>See Details</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <img src={avatar} className="w-10 h-10 mx-auto rounded-full" />
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{email}</p>
                    <p>BloodGroup : {bloodGroup}</p>
                    <p>Address : {upazila}, {district}</p>
                    {
                        email != email
                            ? <>
                                <form className="flex flex-col justify-center text-left" onSubmit={handleUserUpdate}>
                                    <label htmlFor="">Role</label>
                                    <select name="role" defaultValue={role}>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                    <label htmlFor="">Status</label>
                                    <select name="status" defaultValue={status}>
                                        <option value="active">Active</option>
                                        <option value="blocked">Blocked</option>
                                    </select>
                                    <input type="submit" className="btn btn-ghost btn-outline mt-2" value="Update Profile" />
                                </form>
                            </>
                            : <>
                                <p>Role : {role}</p>
                                <p>Status : {status}</p>
                            </>
                    }

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default UserDetails;