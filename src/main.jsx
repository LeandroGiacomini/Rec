import React from 'react'
import ReactDOM from 'react-dom/client'
import { Form } from './pages/form';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />}> 
      </Route>
    </Routes>
  </BrowserRouter>
)