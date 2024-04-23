import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchComments, fetchPost } from '../../store/slices/postSlice'
const DetailPost = () => {
  const params = useParams();
  const postDetail = useSelector((state)=>state.post.post)
  const allComment = useSelector((state)=>state.post.comments)
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
  
    dispatch(fetchPost(params.id))
    dispatch(fetchComments(params.id))
  },[])
  return (
    <div>
        <h1 className='text-3xl font-bold'>Detail Post</h1>
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
          </div>
        )

        }
        {/* <p>{post.id}</p>
        <b>{post.title}</b>
        <p>{post.body}</p> */}

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