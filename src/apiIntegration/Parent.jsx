import React, { useState, useEffect } from "react";
import axios from "axios";
import Child from "./Child";
import "./api.css";



const Parent = () => {

    const [users, setUsers] = useState([]);
    // console.log(users, "this is Users");
    const URL = `https://random-data-api.com/api/v2/users?size=20&is_json=true`;

    useEffect(() => {
        getAllUsers();
    },[]);

    const getAllUsers = () => {
        axios.get(URL)
            .then((res =>
                // console.log(res.data, "This Response")
                setUsers(res.data)
            )).catch(error => {
                console.log("There Was an Error", error);
            });
    }

    return (
        <div>
            <Child users={users}/>
        </div>
    )


}
export default Parent;