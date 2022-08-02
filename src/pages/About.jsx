import React from 'react'
import {Box, Stack, Typography} from "@mui/material";

const About = () => {
  return (
    <Box
    width="100%"
    height="86vh"
    display="flex"
    direction="row"
    justifyContent="space-between"
    // border="1px solid red"
    p="0 50px"
    alignItems="center"
    >
      <Stack>
        <Typography variant="h1" fontSize="100px" fontWeight="bold" 
        textAlign="left">About <br/>Me.</Typography>

        <Typography variant='h6' textTransform="capitalize" fontSize="15px">Hello! My Name is Gaurav and I Love Translating thoughts into things using Web Technologies . My interest in web development started back in 2020 when i decided to pursue my Bachelor's Degree in Computer Application</Typography>
      </Stack>

      <Stack>
        <Typography variant="h5" fontSize="20px" fontWeight="bold" textTransform="uppercase">Skill Sets:</Typography>
        <Typography variant='h6' textTransform="capitalize" fontSize="15px">Here are a few technologies I learned during my Web Development journey :</Typography>
        
        

      </Stack>
    </Box>
  )
}

export default About