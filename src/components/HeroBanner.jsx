import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import PortfolioImage from "../images/ImgLogo.png";

const HeroBanner = () => {

  return (
    <Box
      className="hero-banner-bg"
    >
      <Box 
        // border="1px solid red"
        display="flex"
        direction="row"
        justifyContent="space-between"
        width="100%"
        height="86vh"
        className="hero-banner-container"
      >
        <Stack
          p="0 60px"
          display="flex"
          justifyContent="center"
          // border="1px solid black"
          width="50%"
        >
          <Typography variant="h1" fontSize="100px" fontWeight="bold" 
          textAlign="left" className="headings" textTransform="uppercase">Gaurav Kumar.</Typography>

          <Typography variant='h6' textTransform="uppercase" fontSize="15px">Utilising javascript to translate ideas<br/> into objects</Typography>
        </Stack>
        <Stack 
          sx={{
            display:"flex",
            justifyContent:"flex-end",
          }}
          // border="1px solid black"
        >
          <img src={PortfolioImage} alt="gauravKumar" style={{width:"500px"}}/>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroBanner