import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userslice';

const store = configureStore({
    reducer:{
        //userinfo is the key for reducers and useReducer is the name 
        //we give for reducer actions we get from user slice.js
        userinfo: userReducer,
    },
});
export default store;