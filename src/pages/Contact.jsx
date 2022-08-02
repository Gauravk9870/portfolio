import React from 'react';
import { Box, Stack, Typography, Button,TextField,Input } from "@mui/material";


const Contact = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundColor="#ebebeb"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack  width="80%" height="80%" direction="row" justifyContent="space-between"  gap="20px" alignItems="center" >

        <Stack direction="column" alignItems="flex-start" color="#111"  width="20%">
          
          <Typography variant="h6" fontSize="17px" fontWeight="bold" textAlign="left" >Got a question or porposal, or just want<br/> to say hello? Go ahead.</Typography>
        </Stack>

        <Stack  direction="column" alignItems="center" gap="20px"  width="50%">
          <Typography variant="h2" fontSize="30px" fontWeight="bold">Send me a message!</Typography>

          <Stack direction="row"  width="100%"  justifyContent="space-between" >
            
              
              <Input
                placeholder="First Name"
                className='input-feild'
                disableUnderline={true}
                sx={{
                  width: '49%',
                  p:"5px 20px"
                }}
              />
              <Input
                placeholder="Last Name"
                className='input-feild'
                disableUnderline={true}
                sx={{
                  width: '49%',
                  p:"5px 20px"
                }}
              />
          </Stack>
          <Stack width="100%" alignItems="center">
            <Input
                  placeholder="Your Email Address"
                  className='input-feild'
                  disableUnderline={true}
                  sx={{
                    width: '100%',
                    p:"5px 20px"
                  }}
            />
          </Stack>

          <Stack width="100%" alignItems="center">
              <Input
                  placeholder="Message"
                  className='input-feild'
                  disableUnderline={true}
                  rows="2"
                  multiline={true}
                  sx={{
                    width: '100%',
                    p:"5px 20px"
                  }}
            />  
          </Stack>

          <Stack  width="100%">
            <Button variant="contained" sx={{backgroundColor:"#111", width:"30%",p:"5px 20px", border:"none", borderRadius:"0px"}}>Submit </Button>
          </Stack>

      </Stack>

      </Stack>
    </Box>

  )
}

export default Contact