import React from 'react';
import { Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Menu = ({setColor,setDirection, setGap, setAlign}) => {

    console.log(setColor,setDirection);

  return (
    <Stack 
        
        direction={setDirection}
        gap={setGap}
        alignItems={setAlign}
        justifyContent="space-between"
        className={setColor}
        textAlign="left"
      >

        <Link to="/"> <Typography>Home</Typography></Link>
        <Link to="/about"><Typography>About</Typography></Link>
        <Link to="/projects"><Typography>Projects</Typography></Link>
        <Link to="/contact"><Typography>Contact</Typography></Link>

      </Stack>
  )
}

export default Menu