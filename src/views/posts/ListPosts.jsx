import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const ListPosts = () => {
  const {userId} = useParams()
  const [posts, setPosts] = useState([])
  async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    // waits until the request completes...
    const data = await response.json()
    setPosts(data)
  }
  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <div>
        <h1>List Posts User</h1>
        <ul>
        {posts ? posts 
          .map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/posts/${userId}/${post.id}`}>details</Link>
            </li>
          )): <p>Loading...</p>}
        </ul>
    </div>
  )
}

export default ListPosts