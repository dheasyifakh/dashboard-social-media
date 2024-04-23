import React, { useEffect } from 'react'

const FormEditPost = ({post, handleChange, setFormPost, formPost, handleSubmit}) => {
  useEffect(()=>{
    setFormPost({
        title: post.title,
        body: post.body
    })
  },[])
  return (
    <div>
    <form onSubmit={handleSubmit}>
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
  {/* <button className='block mt-3 rounded-md bg-gray-400 px-5 py-2.5 text-sm font-medium text-gray-950 transition hover:bg-slate-400' onClick={()=>{setOpenFormEdit(null)}}>Cancel</button> */}

  </div>
  )
}

export default FormEditPost