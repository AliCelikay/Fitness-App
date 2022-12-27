import React, { useEffect, useState } from 'react';
// textfield, input
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  // at first will be empty string
  const [search, setSearch] = useState('')

  // async to fetch data from api
  const handleSearch = async () =>{
    // if search exists
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      console.log(exercisesData)
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
    </Stack>
  )
}

export default SearchExercises
