import { useLoaderData } from "react-router-dom";

const Update = () => {
    const userData = useLoaderData();
    console.log(userData)
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUserInfo = { name, email };
        console.log(name, email)

        fetch(`http://localhost:5000/users/${userData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUserInfo)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 ) {
                alert('User info updated !')
                }
            })
    }

    return (
        <div style={{ textAlign: 'center', border: '1px solid' }}>
            <h1>Update information of <u>{userData.name}</u></h1>
            {/* <p>ID : {userData._id}</p>
            <h3>Name : {userData.name}</h3>
            <h3>Email : {userData.email}</h3> */}
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={userData?.name} />
                <br />
                <br />
                <input type="email" name="email" defaultValue={userData?.email} />
                <br />
                <br />
                <input type="submit" value="Update" style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '5px 20px', marginBottom: '20px' }} />
            </form>
        </div>
    );
};

export default Update;