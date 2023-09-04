import { useFetchPhotosQuery , useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";
import PhotosListItem from "./photosListItem";

const PhotosList = ({album}) => {
     const {data,isFetching,error}=useFetchPhotosQuery(album)
    const [addPhoto,addPhotoResults]=useAddPhotoMutation()
    const handleAddPhoto = () => {
        addPhoto(album)
    }
    let content
    if(isFetching){
        content = <Skeleton className='h-20 w-20 ' times={10} />
    }else if(error){
        content = <div>Error Fetching Photos...</div>
    }else {
        content = data.map (photo=>{
            return <PhotosListItem  key={photo.id} photo={photo} />
        })
    }


    return ( <div > 
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-white bg-gradient-to-r from-gray-600  to-gray-900  focus:ring-4 focus:outline-none focus:ring-gray-900 dark:focus:ring-purple-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-bold"> Photos In {album.title}</h3>
            <Button className='text-white bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-gray-900 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' loading={addPhotoResults.isLoading} onClick={handleAddPhoto} >
                + Add Photo
            </Button>
        </div>
        <div className="grid grid-flow-row grid-cols-5 gap-8">
            {content}
        </div>
    </div> );
}
 
export default PhotosList;