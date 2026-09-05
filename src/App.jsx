import {Routes,Route} from "react-router-dom"
import { useState } from 'react'
import Home from './pages/Home '
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Navbar from './components/Navbar'

const App =()=> {
  return (
      <div>
        <Navbar/>
         <select name="" id=""></select>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>

              <Route path="/about" element={<About/>}/>

        </Routes>
      </div>
  )
}

export default App
