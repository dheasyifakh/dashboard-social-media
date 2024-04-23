import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../../store/slices/postSlice'

const ListPosts = () => {
  //useParams to get Id from route
  const {userId} = useParams()

  //call state from redux
  const allPosts = useSelector((state)=>state.post.posts)
  const dispatch = useDispatch()

  //create state to add Comment 
  const [formPost, setFormPost] = useState({
    title: '',
    body: '',
  });
  const [openForm, setOpenForm] = useState(false)
  
  //Function for Add Post
  const addPost = async (e) =>{
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPost),
      });
      const data = await response.json();
      console.log('Post created:', data);
      alert('Success to add Post')
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error, show message, etc.
    }
  }
  const handleChange = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]: e.target.value,
    });
  };
 
  useEffect(()=>{
    //call the function from Store with dispatch
    dispatch(fetchPosts(userId))
  },[])
  return (
    <div>
      <div className="flex justify-between ">
        <h1 className='text-3xl'>List Posts</h1>
        <button 
        onClick={()=>{setOpenForm(true)}}
        className='block mt-3 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
        >Add Post</button>
      </div>
        {/* Hide the Form and then Click Add Post to show it */}
        {openForm && (
          <form onSubmit={addPost}>
            <div className='py-3'>
              <label for="title" className="block text-lg font-medium text-gray-700">Title </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder='Title'
                    value={formPost.title}
                    onChange={handleChange}
                    className="mt-1 w-48 rounded-md border-gray-200 shadow-sm sm:text-sm p-2"
                  />   
            </div>
            <div>
              <label  className="block text-lg font-medium text-gray-700" htmlFor="body">Body:</label>
              <textarea
                    id="body"
                    name="body"
                    value={formPost.body}
                    onChange={handleChange}
                    className='rounded-md w-96 border-gray-200 shadow-sm sm:text-sm h-48'
                  />
            </div>
            <button type="submit" className='block mt-3 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>Submit</button>
          </form>
        )

        }
        
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