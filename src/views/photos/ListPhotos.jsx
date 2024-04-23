import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPhotos } from '../../store/slices/albumSlice'
const ListPhotos = () => {
  const {albumId} = useParams()
  const allPhotos = useSelector((state)=>state.album.photos)
  const dispatch = useDispatch()
  const [openPhoto, setOpenPhoto] = useState(null)
  
  useEffect(()=>{
    dispatch(fetchPhotos(albumId))
  })
   return (
    <div>
        <h1 className='text-3xl font-bold'>List Photos from an Album</h1>

        <div className='lg:col-span-3 my-7'>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allPhotos ? allPhotos.map((photo) => (
              <div key={photo.id}>
                <div  className="rounded-xl border-2 border-gray-100 bg-white my-7" >
                    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                      <div className="">
                          <h4 className='font-bold'>{photo.title}</h4>
                        {/* <img src={photo.url} alt='image' width={200}/> */}
                        <button 
                        className='block mt-3 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
                        onClick={()=>{
                            setOpenPhoto(photo.id)
                        }}
                    >See the details</button>
                      </div>
                   

                    
                    </div>
                </div>
                {openPhoto === photo.id && (
                  <div className="block">
                    <img
                      alt=""
                      src={photo.url}
                      className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                    />
                
                  <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">{photo.title}</strong>
                

                
                    <button className="mt-0.5 opacity-50 sm:mt-0 border border-blue-300 p-2" onClick={()=>{setOpenPhoto(null)}}>Close</button>
                  </div>

                </div>
                  
                )

                }
                </div>
            )) : <p>Loading...</p>

            }
          </div>
        </div>
    </div>
  )
}

export default ListPhotos