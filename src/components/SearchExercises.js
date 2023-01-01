import React, { useEffect, useState } from 'react';
// textfield, input
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  // useState for user search bar and the exercises user will search
  const [search, setSearch] = useState('')
  // const [exercises, setExercises] = useState([]);
  // this use state is for the horizontal scroll bar of body parts
  const [bodyParts, setBodyParts] = useState([])

  // useEffect to fetch body part horizontal scroll bar categories as soon as page loads
  // useEffect with a call back function, and we will call this at the start of the application so the array will be empty
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, [])
  

  // async to fetch data from api
  const handleSearch = async () =>{
    // if search exists
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      // inside filter the call back function gives back a specific exercise name, muscle group(target), equipment, or specific body parts, aka user can search 4 types of exercises
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px'
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb="72px">
        <TextField
          sx={{
            input: { fontWeight: 700, border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          // when searching in api, no casing problem
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', sm: '80px' },
            fontSize: { lg: '20px', sm: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />

      </Box>
    </Stack>
  )
}

export default SearchExercises
