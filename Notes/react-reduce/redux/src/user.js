import React from "react";
import './main.css';
import { useSelector } from "react-redux";  
import Userdetail from './user'; // Corrected import statement

const UserDetailComponent = () => { // Renamed component to avoid conflict
    const users = useSelector ((state)=>state.userinfo.users);
    console.log(users)
    return(
        <div>
            <h2>
                Users
            </h2>
        </div>
    )
}
export default UserDetailComponent; // Updated export statement
