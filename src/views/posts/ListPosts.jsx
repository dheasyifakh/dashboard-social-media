import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../../store/slices/postSlice'

const ListPosts = () => {
  const {userId} = useParams()
  const allPosts = useSelector((state)=>state.post.posts)
  const dispatch = useDispatch()

 
  useEffect(()=>{
    dispatch(fetchPosts(userId))
  },[])
  return (
    <div>
        <h1 className='text-3xl'>List Posts</h1>
        <div className='lg:col-span-3'>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts ? allPosts 
              .map(post => (
                <div className="rounded-xl border-2 border-gray-100 bg-white my-7" key={post.id}>
                  <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                    

                    <div>
                      <h3 className="font-medium sm:text-lg text-blue-400">
                        <Link to={`/posts/${userId}/${post.id}`} className="hover:underline"> {post.title} </Link>
                      </h3>

                      <p className="line-clamp-2 text-sm text-gray-700">
                        {post.body}
                      </p>

                      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>

                          <p className="text-xs">comments</p>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                          Posted
                        </p>
                      </div>
                    </div>
                  </div>

                  
                </div>
              )): <p>Loading...</p>

            }
            
          </div>
        </div>
     
        
    </div>
  )
}

export default ListPosts