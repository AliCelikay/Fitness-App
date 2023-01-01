import React, {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  // changes in these states will be reflected all across the application
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  // console.log(bodyPart);

  return (
    <Box>
        <HeroBanner/>
        <SearchExercises 
          setExercises={setExercises}
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
        />
        <Exercises
          exercises={exercises} 
          setExercises={setExercises}
          bodyPart={bodyPart} 
        />
    </Box>
  )
}

export default Home;
