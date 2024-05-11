import React from 'react';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Read from './pages/read/Rea';
import Update from './pages/update/Upd';
import Delete from './pages/delete/Del';
import Updatebtn from './pages/update/Updbtn';



const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path = "/" element={<App />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="read" element={<Read />} />
      <Route path="update" element={<Update />} />
      <Route path="delete" element={<Delete />} />
      <Route path="updbtn" element={<Updatebtn />} />
    </Route>
  </Routes>
  </React.StrictMode>
</BrowserRouter>
);


