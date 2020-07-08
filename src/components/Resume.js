import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles({
  mainContainer: {
    background: "#233"
  }
});

const Resume = () => {
  const classes = useStyles();
  return (
    <>
    <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          working experience
        </Typography>
        <Box component="div">
          <Typography variant="h2">
            2013
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Resume
