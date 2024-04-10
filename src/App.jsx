import React from 'react'
import Home from './Pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Pages/details/Details';
import Cart from './Pages/cartview/Cart';
import Wishlisted from './Pages/Wishlisted/Wishlisted'
import { Provider } from 'react-redux';
import Footer from './Components/Footer';
import Store from './store/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Wishlist' element={<Wishlisted/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default App

