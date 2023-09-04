import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./expandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./photosList";


const AlbumsListItem = ({album}) => {
    const [removeAlbum,results]=useRemoveAlbumMutation()
    const handleAlbumDelete=()=>{
        removeAlbum(album)
    }


    const header= <>
        <Button className='bg-gradient-to-bl from-blue-500 to-cyan-500' loading={results.isLoading} onClick={handleAlbumDelete}>
            <GoTrash/>
        </Button>
        {album.title}
    </>







    return ( <ExpandablePanel key={album.id} header={header} >
        <PhotosList album={album} />
    </ExpandablePanel>
    )




}
 
export default AlbumsListItem;