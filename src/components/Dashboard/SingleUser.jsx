import UserDetails from "./UserDetails";

const SingleUser = user => {
    const { name, email, avatar, bloodGroup, district, upazila, role, status } = user.children;
    return (
        <tr className="drop-shadow-xl pb-6 mt-6 grid grid-cols-11 items-center text-center mx-auto justify-center gap-3">
            <td className="col-span-1"><img src={avatar} className="w-10 h-10 mx-auto rounded-full" /></td>
            <td className="col-span-2">{name}</td>
            <td className="col-span-2">{email}</td>
            <td className="col-span-1">{bloodGroup}</td>
            <td className="col-span-1">{district}</td>
            <td className="col-span-1">{upazila}</td>
            <td className="col-span-1">{role}</td>
            <td className="col-span-1">{status}</td>
            <td className="col-span-1"><UserDetails user={user}></UserDetails></td>
        </tr>
    );
};

export default SingleUser;