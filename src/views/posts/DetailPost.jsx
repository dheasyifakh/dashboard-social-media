import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchComments, fetchPost } from '../../store/slices/postSlice'
import axios from 'axios'
const DetailPost = () => {
  const params = useParams();
  const postDetail = useSelector((state)=>state.post.post);
  const allComment = useSelector((state)=>state.post.comments);
  const dispatch = useDispatch();
  const [formComment, setFormComment] = useState({
    title: '',
    body: '',
  });
  const [openForm, setOpenForm] = useState(false)
  useEffect(()=>{
  
    dispatch(fetchPost(params.id))
    dispatch(fetchComments(params.id))
  },[])
  return (
    <div>
        <div className="flex justify-between">
          <h1 className='text-3xl font-bold'>Detail Post</h1>

        </div>
        { postDetail && (
          <div>
            <div className="rounded-xl border-2 border-gray-100 bg-white my-7" key={postDetail.id}>
                  <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                    <div>
                      <h3 className="font-medium sm:text-lg text-blue-400">
                        <span> {postDetail.title} </span>
                      </h3>

                      <p className="line-clamp-2 text-sm text-gray-700">
                        {postDetail.body}
                      </p>

                      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                         

                          <button className="text-base" onClick={()=>{setOpenForm(true)}}>comments</button>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                          Posted
                        </p>
                      </div>
                    </div>
                  </div>
                </div>   
          </div>
        )

        }
       {openForm && (
        <form>
          <input type="text" hidden />
          <div className='py-3'>
              <label for="title" className="block text-lg font-medium text-gray-700">Title </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder='Title'
                    // value={formPost.title}
                    // onChange={handleChange}
                    className="mt-1 w-48 rounded-md border-gray-200 shadow-sm sm:text-sm p-2"
                  />   
            </div>
            <div>
              <label  className="block text-lg font-medium text-gray-700" htmlFor="body">Body:</label>
              <textarea
                    id="body"
                    name="body"
                    // value={formPost.body}
                    // onChange={handleChange}
                    className='rounded-md w-96 border-gray-200 shadow-sm sm:text-sm h-48'
                  />
            </div>
            <button type="submit" className='block mt-3 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>Submit</button>
        </form>
       )

       }

        <h2 className='text-2xl font-semibold'>Comment</h2>
        { allComment ? allComment.map(item => (
          <div className="rounded-xl border-2 border-gray-100 bg-white my-7 ml-8" key={item.id}>
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="font-medium sm:text-lg text-black">
                <span> {item.name} </span>
              </h3>

              <p className="line-clamp-2 text-sm text-gray-700">
                {item.body}
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              

                <p className="hidden sm:block sm:text-sm sm:text-gray-800">
                {item.email}
                </p>
              </div>
            </div>
          </div>
        </div>   
            // <li key={item.id}>
            // <h3>{item.name}</h3>
            // <p>{item.email}</p>
            // <p>{item.body}</p>
            // </li>
        )) : <p>Loading...</p>

        }
       
    </div>
  )
}

export default DetailPost