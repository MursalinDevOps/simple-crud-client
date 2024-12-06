// import { useState } from "react";
const Root = () => {
// const [users, setUsers] = useState([]);

    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}
        console.log(user);

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Simple CRUD!</h1>
            <form style={{textAlign:'center'}} onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Name" id="" />
                <br />
                <br />
                <input type="email" name="email" placeholder="Email" id="" />
                <br />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Root;