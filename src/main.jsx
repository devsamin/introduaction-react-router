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
import Contact from './Componentes/Contact/Contact.jsx';
import Servises from './Componentes/Servises/Servises.jsx';

const router =  createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,

    children : [
    {
      path : '/about',
      element : <About></About>,
    },
    {
      path : '/contact',
      element : <Contact></Contact>,
    },
    {
      path : '/services',
      element :<Servises></Servises>,
    }
  ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
