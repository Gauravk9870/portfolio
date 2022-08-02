import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Stack,Typography} from '@mui/material';
import SignatureLogo from "../images/Portfolio-logo-white.png";
import SocialMedia from "../components/SocialMedia"
import Menu from './Menu';



const Footer = () => {

  // const text="footer-icons";

  return (
    <Box
      width="100%"
      height="100vh"

      p="100px 70px"
      textTransform="capitalize"
      backgroundColor="#111"
      color="#fff"


    >
      <Stack
        //  border="1px solid red"
         height="100%"
         justifyContent="space-between"
         p="50px 0px"
      >
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            // border="1px solid blue"
              
          >
              <Stack>
                <Link to='/'>
                  <img src={SignatureLogo} alt="Signature Logo" style={{width:"150px", height:"65px"}}/>
                </Link>
              </Stack>

              <Stack className="footer-projects">
                <Typography>Exercise App</Typography>
                <Typography>YouTube Clone</Typography>
                <Typography>Portfolio</Typography>
              </Stack>

              <Stack className="footer-projects">
                <Typography>Real Estate</Typography>
                <Typography>Jewellery</Typography>
              </Stack>
              
              <Stack className="footer-projects">
                <Typography>Google Clone</Typography>
                <Typography>Disney Hotstar Clone</Typography>
              </Stack>

              <Menu setColor="white" setDirection="column" setGap="0px" setAlign="left"/>

          </Stack >
        </Stack>

        <Stack height="50%" justifyContent="center" borderTop="2px solid #333" pt="100px" >
          <Stack direction="row"  justifyContent="center">

            <SocialMedia setColor="white"/>

          </Stack>

          <Stack alignItems="center" mt="10px">
            <Typography>
              Made with ❤️ by Gaurav kumar
            </Typography>
          </Stack>

        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer