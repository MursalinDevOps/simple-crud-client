import { use } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    // console.log(users)
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('User has been deleted!');
                    const remainedUsers = users.filter(user => user._id !== id);
                    setUsers(remainedUsers);
                }else{
                    alert('Something went wrong! try again.')
                }
            })
    }
    return (
        <div>
            <h2>Total users - {users.length}</h2>
            <div>
                {
                    users.map(user => <div style={{ border: '1px solid', margin: '10px', padding: '20px' }} key={user._id}>
                        <p>UserId : {user._id}</p>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;