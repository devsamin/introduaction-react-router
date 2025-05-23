import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componentes/Home/Home.jsx';
import About from './Componentes/About/About.jsx';

const router =  createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,

    children : [
    {
      path : '/about',
      element : <About></About>,
    }
  ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
