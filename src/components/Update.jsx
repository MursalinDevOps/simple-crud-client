import { useLoaderData } from "react-router-dom";

const Update = () => {
    const userData = useLoaderData();
    console.log(userData)
    return (
        <div style={{textAlign:'center', border:'1px solid'}}>
            <p>ID : {userData._id}</p>
            <h3>Name : {userData.name}</h3>
            <h3>Email : {userData.email}</h3>
        </div>
    );
};

export default Update;