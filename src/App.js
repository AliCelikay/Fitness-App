import React from 'react'
import {Route, Routes} from 'react-router-dom';
// a box is like a div with style but is from material
import { Box } from '@mui/material';

import './App.css';

import ExerciseDetail from './components/ExerciseDetail';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const App = () => {
  return (
    <Box width='400px'>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App;
