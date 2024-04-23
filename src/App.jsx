import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStateContext } from './hooks/useStateContext';
import Dashboard from './views/dashboard/Dashboard';
import ListPosts from './views/posts/ListPosts';
import DetailPost from './views/posts/DetailPost';
import ListAlbums from './views/albums/ListAlbums';
import ListPhotos from './views/photos/ListPhotos';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative">
      { activeMenu ? (
        <div className="fixed sidebar bg-white w-56">
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 ">
          <Sidebar/>
        </div>
      )}
      <div
        className={
          activeMenu
          ? ' bg-gray-100 min-h-screen md:ml-56 w-full  '
          : 'bg-gray-100  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-mgray-100 navbar w-full ">
                    {/* <Navbar /> */}
            <Navbar/>
          </div>
          <div className='mx-14 my-12'>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/posts/:userId' element={<ListPosts/>}/>
                <Route path='/posts/:userId/:id' element={<DetailPost/>}/>
                <Route path='/albums/:userId' element={<ListAlbums/>}/>
                <Route path='/photos/:albumId' element={<ListPhotos/>}/>
              </Routes>
            </BrowserRouter>
          </div>
          <Footer/>
      </div>

     
    </div>
  )
}

export default App
