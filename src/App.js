import React from 'react'
import {Route, Routes} from 'react-router-dom';
// a box is like a div with style but is from material
import { Box } from '@mui/material';

import './App.css';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const App = () => {
  return (
    // box/application will be responsive on xl screens with width 1488px and a margin of auto
    <Box width='400px' sx={{ width: {xl: '1488px'}}} m="auto">
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
