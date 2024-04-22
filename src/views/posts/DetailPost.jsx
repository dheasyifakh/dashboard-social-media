import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const DetailPost = () => {
  const params = useParams();
  const [post, setPost] = useState()
  const [comment, setComment] = useState()
  const fetchPost = async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const data = await response.json()
    setPost(data)
  }
  const fetchComment= async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`);

    const data = await response.json()
    setComment(data)
  }

  useEffect(()=>{
    fetchPost()
    fetchComment()
  },[])
  console.log(comment)
  return (
    <div>
        <h1>Detail Post</h1>
        {/* <p>{post.id}</p>
        <b>{post.title}</b>
        <p>{post.body}</p> */}

        <h2>Comment</h2>
        { comment ? comment.map(item => (
            <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
            {/* <Link to={`/posts/${userId}/${post.id}`}>details</Link> */}
            </li>
        )) : <p>Loading...</p>

        }
        {/* {comment
            .filter(item => item.postId.toString() === params.id)
            .map(item =>(
                <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
                <p>{item.body}</p>
                <Link to={`/posts/${userId}/${post.id}`}>details</Link>
                </li>
            )

            )
        } */}
    </div>
  )
}

export default DetailPost