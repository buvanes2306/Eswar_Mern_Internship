import React, { useState } from "react";
import './main.css';
import { useDispatch } from 'react-redux';
import { addUser } from './slices/userslice'; 

const Home = () => {
    const [formdata, setformdata] = useState({
        name: "",
        age: ""
    });

    const dispatch = useDispatch(); 

    function handlechange(event) {
        const { name, value } = event.target;
        setformdata((curr) => {
            return {
                ...curr,
                [name]: value
            };
        });
    }

    const add = (event) => {
        event.preventDefault();
        dispatch(addUser(formdata));
    }

    return (
        <div>
            <h2>Home</h2>
            <form>
                <label>name:</label>
                <br />
                <input name="name" type="text" value={formdata.name} onChange={handlechange} />
                <br />
                <label>age:</label>
                <br />
                <input name="age" type="number" value={formdata.age} onChange={handlechange} />
                <br />
                <button onClick={add}>ADD</button>
            </form>
        </div>
    )
}
export default Home;

