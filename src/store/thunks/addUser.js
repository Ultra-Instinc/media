import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker"; // library used to create fake data


const addUser=createAsyncThunk('users/add', async ()=>{
    const response= await axios.post(`http://localhost:3005/users`,{
        name: faker.name.fullName()
    })
    return response.data
})

export {addUser}