import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles({
  mainContainer: {
    background: "url(computers.png)"
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <>
    <Navbar />
      <Box component="header" color="tomato" className={classes.mainContainer}>
        <Typography variant="h1" align="center">
          About
        </Typography>
        <Box component="div" color="tan">
          <Typography variant="h5" align="center">
          A recent graduate of the Full-Stack Bootcamp program at the University of Arizona, graduating in the top 5% of the class, 
          and selected as a top performer, earning inclusion in an Agile team project. Known as a results-driven developer with both 
          front and back end web development expertise, striving to use an array of coding skills to provide solid digital assets. 
          Capable of making significant, technologically-sound contributions to multiple web/mobile apps, and GitHub projects. 
          Detail-oriented, organized, with a positive attitude. Performs well in high-stress environments. 
          Possesses excellent verbal and written communications abilities. Capable of cultivating and nurturing strategic and tactical relationships. 
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default About
