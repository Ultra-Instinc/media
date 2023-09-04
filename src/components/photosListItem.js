import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";
const PhotosListItem = ({photo}) => {
    const [remove]=useRemovePhotoMutation()
    const handleDeletePhoto=()=>{
        remove(photo)
    }
    return ( 
        <div className="relative m-2 cursor-pointer w-[98px]">
            <img className="w-25 h-20" src ={photo.url} alt = "random "/>
            <div onClick={handleDeletePhoto} className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrash size={25} />
            </div>
        </div> 
    );
}
 
export default PhotosListItem;