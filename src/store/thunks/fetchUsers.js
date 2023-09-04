import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchusers = createAsyncThunk("users/fetch", async ()=>{
    const response = await axios.get("http://localhost:3005/users")
    
   //DEV ONLY @#@#!
    //await pause(1000)// the delay function stated at the end of the file
    return response.data
})

// DEV ONLY @!@@@
// this function slows the run alitle to be able to se the Loading... state a little bit
// const pause =(duration)=>{
//     return new Promise((resolve)=>{
//         setTimeout(resolve,duration)
//     })
// }


export {fetchusers}