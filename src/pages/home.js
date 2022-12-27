import React, {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
    </Box>
  )
}

export default home
