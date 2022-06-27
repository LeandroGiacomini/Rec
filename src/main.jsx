import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import { Form } from './pages/form';
import { Home } from './pages/home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
)