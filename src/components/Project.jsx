import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Project1 from "../images/Project-1.png"

const Project = () => {
  return (
    <Box
        // border="2px solid red"
        width="100%"
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
    >
        <Stack
            direction="row"
        >
            <Stack>
                <img src={Project1} alt="Real Estate" style={{width:"750px", height:"390px"}} />
            </Stack>

            <Stack  justifyContent="space-between">

                <Stack  alignItems="center"  height="50%" justifyContent="center" width="100%">
                    <Typography variant="h6" fontSize="15px" color="red">Featured</Typography>
                    <Typography variant="h2" fontSize="40px" textTransform="uppercase" fontWeight="bold" color="#fff">Real Estate</Typography>
                </Stack>

                <Box  backgroundColor="#fff" width="500px" height="150px" p="30px" ml="-200px" mt="210px">
                    <Typography>A Minimal real estate website made with HTML, CSS & JavaScript.</Typography>
                    <Typography>Struggled with in positioning the social media icons because of an anonymous Bug🐛</Typography>
                </Box>
                
            </Stack>
        </Stack>
    </Box>
  )
}

export default Project