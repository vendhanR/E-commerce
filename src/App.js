
import React, { useState } from 'react';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/cart';

import AppContext from './context';


function App() {
    const [cartItems,setCartItems] = useState([])

const dispatcherEvent = (action , payload) =>{
    switch(action) {
        case "ADD_ITEMS":{
            let items = cartItems.splice()
            items.push(payload)
            setCartItems(items)
            break;
        }
        default:{
            console.log("INVALID...");
          }
    }
}





    return (
    <AppContext.Provider value={{cartItems,dispatcherEvent}}>
          <React.StrictMode>
       <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </AppContext.Provider>
    )
}

export default App