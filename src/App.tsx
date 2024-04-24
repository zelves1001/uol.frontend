import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './elements/screens/shop';
import Home from './elements/screens/home';
import ProductDetail from './elements/screens/productDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/productDetail" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
