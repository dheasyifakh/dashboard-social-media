import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAlbums } from '../../store/slices/albumSlice'
const ListAlbums = () => {
  const {userId} = useParams();
  const allAlbum = useSelector((state) =>state.album.albums)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchAlbums(userId))
  },[])
  console.log(allAlbum)
  return (
    <div>
        <h1>List Albums</h1>
   
        <div className="lg:col-span-3 my-7">
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {allAlbum ? allAlbum 
                    .map(album =>(
                        <div
                        key={album.id}
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                                <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                                <Link to={`/photos/${album.id}`}>
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    {album.title}
                                </h3>
                                </Link>

                                <div className="mt-4 flex flex-wrap gap-1">
                                <span
                                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                >
                                    Snippet
                                </span>

                                <span
                                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                >
                                    JavaScript
                                </span>
                                </div>
                            </div>
                        </div>
                        )

                    )
                : 

                <p>Loading...</p>

                }
            </div>
        </div>
    </div>
  )
}

export default ListAlbums