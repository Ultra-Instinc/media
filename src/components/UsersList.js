import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { fetchusers, addUser } from "../store";
import Skeleton from "./skeleton";
import Button from './Button'
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./usersListItem";




const UsersList = () => {
    const [doFetchUsers,isLoadingUsers,loadingUsersError]=
        useThunk(fetchusers)
    const [doCreateUser,isCreatingUser,creatingUserError]=
        useThunk(addUser)    


   
    const { data } = useSelector((state)=>{
        return state.users  // {data:[] , isloading:false , error:null}
    })

    useEffect(()=>{
        doFetchUsers()
    },[doFetchUsers])

    const handleUserAdd=()=>{
       doCreateUser()
    }

    let content;
    if(isLoadingUsers){
        content = <Skeleton times={6} className='h-10 w-full'/>
    }else if(loadingUsersError){
        content= <div>Error fetching data</div>
    }else{
        content =data.map((user)=>{
            return <UsersListItem key={user.id}  user={user}/>
            
        })
    }
    


    return ( <div >
        <div className="flex flex-row justify-between items-center m-3">
            <div className="px-16 py-2.5 text-white bg-gradient-to-r from-green-400 to-green-600  font-bold rounded-lg text-sm  text-center mr-2 mb-2 ">Users</div>  
            <Button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' loading={isCreatingUser} onClick={handleUserAdd}>
                + Add User
            </Button>
            
            {creatingUserError&& 'Error Creating User'}      
        </div>
        {content}
    </div> );
}
 
export default UsersList;