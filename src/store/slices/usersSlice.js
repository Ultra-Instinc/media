import { createSlice } from "@reduxjs/toolkit";
import { fetchusers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice=createSlice({
    name:"users",
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    extraReducers(builder){
        // watching for pending 
        builder.addCase(fetchusers.pending,(state,action)=>{
            //Update our state object however appropriate
            // to show user that we are loading data
            state.isLoading=true
        })
        // watching for fulfilled >>>> fetch successful
        builder.addCase(fetchusers.fulfilled,(state,action)=>{
            //data loaded successfully
            state.isLoading=false
            state.data=action.payload
        })
        // watching for rejected >>>> fetch failed
        builder.addCase(fetchusers.rejected,(state,action)=>{
            //fetching failed
            state.isLoading=false
            state.error=action.error
        })




        builder.addCase(addUser.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data.push(action.payload)
        })
        builder.addCase(addUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error
        })


        

        builder.addCase(removeUser.pending,(state,action)=>{
            state.isLoading=true   
        })
        builder.addCase(removeUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=state.data.filter((user)=>{
                return user.id!== action.payload.id
            })
            
        })
        builder.addCase(removeUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error
        })
    }
})

export const usersReducer = usersSlice.reducer
