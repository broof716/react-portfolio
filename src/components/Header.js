import React from 'react'
import {Typography, Avatar, Grid, Box } from '@material-ui/core'
import Typed from 'react-typed'
import avatar from '../bryan.png'

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Bryan Roof"/> 
      <Typography variant="h4">
        <Typed strings={["Bryan Roof"]} typeSpeed={40} />
      </Typography>   
    </Box>
  );
};

export default Header
