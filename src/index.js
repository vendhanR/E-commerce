import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// homepage
import Home from './pages/Home/Home';
// cart
import Cart from './pages/Cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap';
import reportWebVitals from './reportWebVitals';
import Register from './pages/Register/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <Register /> */}
    {/* <Home /> */}
    {/* <Cart />   */}

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='cart' element={<Cart />}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
