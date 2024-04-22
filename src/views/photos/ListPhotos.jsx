import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
const ListPhotos = () => {
  const {albumId} = useParams()
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState()
  const [openPhoto, setOpenPhoto] = useState(null)
  const fetchPhotos = async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    const data = await response.json()
    setPhotos(data)
  }
  const fetchPhoto = async photoId =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com//photos/${photoId}`)
    const data = await response.json()
    setPhoto(data)
  }

  useEffect(()=>{
    fetchPhotos()
    fetchPhoto()
  })
   return (
    <div>
        <h1>List Photos from an Album</h1>
        <ul>
            {photos ? photos.map((photo, index) => (
                <li key={photo.id}>
                    {index+1}
                    <h4>{photo.title}</h4>
                    {/* <img src={photo.url} alt='image' width={200}/> */}
                    <button onClick={()=>{
                        setOpenPhoto(photo.id)
                        fetchPhoto(photo.id)
                    }}
                    >See the details</button>

                    {openPhoto === photo.id && (
                        <div>
                            <h4>{photo.title}</h4>
                            <img src={photo.url} alt='image'/>
                        </div>
                    )

                    }
                </li>
            )) : <p>Loading...</p>

            }
        </ul>
    </div>
  )
}

export default ListPhotos