import React from 'react';
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';

import SignatureLogo from "../images/Portfolio-logo.png";
import SocialMedia from './SocialMedia';
import Menu from "./Menu";



const Navbar = () => {
  return (
    <Stack 
      width="100%"
      justifyContent="space-between"
      direction="row"
      p="10px 60px"
    >

      <Link to='/'>
        <img src={SignatureLogo} alt="Signature Logo" style={{width:"150px", height:"65px"}}/>
      </Link>

      <Menu setColor="black" setDirection="row" setGap="40px" setAlign="center"/>
      <SocialMedia setColor="black" /> 
       
    </Stack>
  )
}

export default Navbar