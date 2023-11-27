
const SingleUser = user => {
    const {name, email, avatar, bloodGroup, district, upazila, role, status} = user.children;
    return (
        <tr className="drop-shadow-xl pb-6  grid grid-cols-8 justify-between gap-3">
            <td><img src={avatar} className="w-10 h-10 rounded-full" /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{bloodGroup}</td>
            <td>{district}</td>
            <td>{upazila}</td>
            <td>{role}</td>
            <td>{status}</td>
        </tr>
    );
};

export default SingleUser;