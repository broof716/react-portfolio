import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Avatar, Grid, Box } from '@material-ui/core'
import Typed from 'react-typed'
import avatar from '../bryan.png'

// CSS STYLES
const useStyles = makeStyles(theme=>({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  }
}));
const Header = () => {
  const classes = useStyles()
  return (
    <Box>
      <Avatar className={classes.avatar} src={avatar} alt="Bryan Roof"/> 
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
