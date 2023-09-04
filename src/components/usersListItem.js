import {GoTrash} from 'react-icons/go'
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './expandablePanel';
import AlbumsList from './albumsList';

const UsersListItem = ({user}) => {

    const [doRemoveUser,isLoading,error] = useThunk(removeUser)
    const handleClick=()=>{
        doRemoveUser(user)
    }
    const header= 
    <>
        <Button className='bg-gradient-to-bl from-blue-500 to-red-500 mr-3'  onClick={handleClick} loading={isLoading}>
            <GoTrash  />
        </Button>
        {error&& <div>Error Deleting User...</div> }
        {user.name}
    </>

    return (  
        <ExpandablePanel  header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
                    
    )
}
 
export default UsersListItem;