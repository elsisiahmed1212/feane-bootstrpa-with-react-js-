import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layait from './Componant/Layaut/Layait'
import Home from './Componant/Home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from './Componant/Menu/Menu'
import About from './Componant/About/About'
import Book from './Componant/Book/Book'

function App() {

  let routing = createBrowserRouter([
    {path:'',element:<Layait/>,children:[
      {index:true,element:<Home></Home>},
      {path:'Menu',element:<Menu></Menu>},
      {path:'About',element:<About></About>},
      {path:'book',element:<Book></Book>}
    ]
    }
  ])

  return (
    <>
    <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
