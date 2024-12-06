import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div>
            <h2>Total users - {users.length}</h2>
            <div>
                {
                    users.map(user => <div key={user._id}>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p> </div>)
                }
            </div>
        </div>
    );
};

export default Users;