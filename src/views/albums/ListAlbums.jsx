import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const ListAlbums = () => {
  const {userId} = useParams();
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  const [photosOpen, setPhotosOpen] = useState(false)
  const fetchAlbums = async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const data = await response.json()
    setAlbums(data)

  }
  const fetchPhotos = async albumId =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    const data = await response.json()
    setPhotos(data)
  }
  useEffect(()=>{
    fetchAlbums()
    // fetchPhotos()
  },[])
  console.log(photos)
  return (
    <div>
        <h1>List Albums</h1>
        <ul>
            {albums ? albums 
                .map(album =>(
                    <li key={album.id}>
                        <h3>{album.title}</h3>
                        {/* <button onClick={()=>{
                            setPhotosOpen(true)
                            fetchPhotos(album.id)
                        }}>List Pictures</button> */}
                        <Link to={`/photos/${album.id}`}>Detail Album</Link>
                    </li>
                )

                )
            : 
            
            <p>Loading...</p>

            }
        </ul>
        {/* {photosOpen && (
            <div>
                <ul>
                    {photos ? photos.map(photo => (
                        <li>
                            <h4>{photo.title}</h4>
                            <img src={photo.url} alt='image' width={200}/>
                            
                        </li>
                    )) : <p>Loading...</p>
                    }
                </ul>
            </div>
        )

        } */}
    </div>
  )
}

export default ListAlbums