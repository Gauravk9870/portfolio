import React from 'react';
import { Stack} from "@mui/material";
import { FaCodepen,FaGithub,FaInstagram,FaLinkedin  } from 'react-icons/fa';





const SocialMedia = ({setColor}) => {

  
  return (
        <Stack 
            direction="row"
            gap="40px"
            alignItems="center"
            justifyContent="space-between"
            className={setColor}       
        >
       

            <a href="https://www.linkedin.com/in/gauravk9870"><FaLinkedin/></a>
            <a href="https://github.com/Gauravk9870"><FaGithub/></a>          
            <a href="https://www.instagram.com/gaurav.k__"><FaInstagram/></a> 
            <a href="https://codepen.io/gauravk9870"><FaCodepen/></a> 

            
            
        
        
    </Stack>
  )
}

export default SocialMedia