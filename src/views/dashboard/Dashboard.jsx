import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [user,setUser] = useState([]);

  async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // waits until the request completes...
    const data = await response.json()
    setUser(data)
  }
  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
        <table>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Posts</th>
                <th>Album</th>
                <th>Detail</th>
            </tr>
            
                {user ? user.map((x,index)=>{
                    return (
                        <tr key={x.id}>
                            <td>{index +1}</td>
                            <td>{x.name}</td>
                            <td>
                                <Link to={`/posts/${x.id}`}>Detail Post</Link>
                            </td>
                            <td>
                                <Link to={`/albums/${x.id}`}>Detail Albums</Link>

                            </td>
                            <td>{x.id}</td>
                        </tr>
                    )
                })
                
                : <p>Loading ...</p>}
            
        </table>
    </div>
  )
}

export default Dashboard