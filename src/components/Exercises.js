import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

export const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
  // for number of exercises per page
  const paginate = (e, value) => {
    setCurrentPage(value);
    //this will scroll to the top of the page
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  //for horizontal scroll bar functionality of displaying exercises when clicked
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisesdb.p.rapidapi.com/exercises', exerciseOptions);
      }else {
        exercisesData = await fetchData(`https://exercisesdb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])
  
  return (
    <Box id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            // count of pages, to get the higher number we ciel, only 9 per page
            count={Math.ceil(exercises.length / exercisesPerPage)}
            // page we currently are on
            page={currentPage}
            // onChange={(e) => paginate(e, value)} // this is what happens behind the sceens in material ui
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises;
