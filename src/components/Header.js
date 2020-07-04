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
      <br/>
      <Typography variant="h5">
        <Typed strings={["Web Design", "Web Development", "React Developer"]} typeSpeed={40} backSpeed={60} loop />
      </Typography>   
    </Box>
  );
};

export default Header
