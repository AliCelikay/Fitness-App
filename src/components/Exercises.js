import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

export const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <Box id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack dirction='row' sx={{gap:{lg:'107px', xs: '50px'}}}
       justifyContent='center'
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises;
