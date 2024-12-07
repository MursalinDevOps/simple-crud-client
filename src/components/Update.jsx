import { useLoaderData } from "react-router-dom";

const Update = () => {
    const userData = useLoaderData();
    console.log(userData)
    return (
        <div style={{textAlign:'center', border:'1px solid'}}>
            <h1>Update information of <u>{userData.name}</u></h1>
            {/* <p>ID : {userData._id}</p>
            <h3>Name : {userData.name}</h3>
            <h3>Email : {userData.email}</h3> */}
            <input type="text" name="name" placeholder="Name"/>
            <br />
            <br />
            <input type="email" name="email" placeholder="Email"/>
            <br />
            <br />
            <input type="submit" value="Update" style={{backgroundColor:'blue', color:'white', fontWeight:'bold', padding:'5px 20px', marginBottom:'20px'}} />
        </div>
    );
};

export default Update;