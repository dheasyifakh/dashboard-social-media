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
    <div className='overflow-x-auto'>
        <div className="flex ">

        </div>
        <h2 className='text-4xl font-bold'>List Users</h2>
        <table className=' w-full table-auto border-collapse border border-gray-400 my-6'>
            <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">No</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">Name</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">Posts</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">Album</th>
            </tr>
            
                {user ? user.map((x,index)=>{
                    return (
                        <tr key={x.id}>
                            <td className='p-4 border border-gray-400'>{index +1}</td>
                            <td className='p-4 border border-gray-400'>{x.name}</td>
                            <td className='p-4 border border-gray-400 text-center'>
                                <Link to={`/posts/${x.id}`} className='rounded-xl p-2 border border-gray-500'>See Posts</Link>
                            </td>
                            <td className='p-4 border border-gray-400 text-center'>
                                <Link to={`/albums/${x.id}`} className='rounded-xl p-2 border border-gray-500'>See Albums</Link>

                            </td>
                        </tr>
                    )
                })
                
                : <p>Loading ...</p>}
            
        </table>
    </div>
  )
}

export default Dashboard