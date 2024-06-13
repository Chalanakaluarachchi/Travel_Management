import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import About from '../pages/About';
import TourDetail from '../pages/TourDetail';

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/tours/:id' element={<TourDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/tours/search' element={<SearchResultList/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Routers