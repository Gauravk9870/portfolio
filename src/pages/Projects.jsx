import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Project from '../components/Project';


const Projects = () => {
  return (
    <Box
      // border="1px solid red"
      width="100%"
      height="100vh"
      p="0 60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#888"
    
    >
      {/* <Typography >Projects</Typography> */}
      <Project/>
    </Box>
  )
}

export default Projects