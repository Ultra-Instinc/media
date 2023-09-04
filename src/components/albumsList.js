import { useFetchAlbumsQuery ,useAddAlbumMutation } from "../store";
import Skeleton from "./skeleton";
// import ExpandablePanel from "./expandablePanel";
import Button from "./Button";
import AlbumsListItem from "./albumsListItem";

const AlbumsList = ({user}) => {
    const {data,error,isFetching} = useFetchAlbumsQuery(user)
    const [addAlbum,results] =useAddAlbumMutation()
    
    const handleAddAlbum= () => {
        addAlbum(user)
    }
    
    let content
    if(isFetching){
        content = <Skeleton className='h-10 w-full' times={3} />
    }else if(error){
        content = <div>Error Loading Albums..</div>
    }else {
        content = data.map (album=>{
           return <AlbumsListItem key={album.id}  album={album}/>
        })
    }

    return ( 
    <div className="">
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-white bg-gradient-to-r from-blue-500 to-purple-500   font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2  ">Albums For {user.name}</h3>
            <Button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2' loading={results.isLoading} onClick={handleAddAlbum} >
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
        
    </div> 
    );
}
 
export default AlbumsList;