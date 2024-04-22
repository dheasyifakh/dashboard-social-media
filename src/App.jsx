import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import ListPosts from './views/posts/ListPosts';
import DetailPost from './views/posts/DetailPost';
import ListAlbums from './views/albums/ListAlbums';
import ListPhotos from './views/photos/ListPhotos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/posts/:userId' element={<ListPosts/>}/>
        <Route path='/posts/:userId/:id' element={<DetailPost/>}/>
        <Route path='/albums/:userId' element={<ListAlbums/>}/>
        <Route path='/photos/:albumId' element={<ListPhotos/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
