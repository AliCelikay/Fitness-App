import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    //this console.log is necessary because the api needs to make 3 call, the firs 2 which return empty and the 3rd array has data, w/o this console the code for videos will look into an empty array and return error
    console.log(exerciseVideos)
    
    if(!exerciseVideos.length){
        return 'Loading...'
    }
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}>
                {/* how many videos do we want to show */}
                {exerciseVideos?.slice(3, 6).map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        // recommended with _blank
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    </a>
                ))}

            </Stack>
        </Box>
    )
}

export default ExerciseVideos;
