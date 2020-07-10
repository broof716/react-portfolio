import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FolderIcon from '@material-ui/icons/Folder';
import Navbar from './Navbar';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
      maxHeight: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "3rem",
      },
    },
  }
});

const Contacts = () => {
  
  const classes = useStyles()
  return (
    <>
    <Navbar />
    <Box component="header" color="tomato" className={classes.mainContainer}>
        <Typography variant="h1" align="center">
          Contact Me
        </Typography>
        <br />
        <Box component="div" color="tan">
          <Typography variant="h3" align="center">
            Currently entertaining new opportunities. Please get in touch via: 
          </Typography>
          <br />
          <br />
          <Typography variant="h4" align="center">
            Contact Infomation
          </Typography>
          <br />
          <Typography variant="h4" align="center">
            (520)429-8569
          </Typography>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
    <BottomNavigation style={{background: "#222"}}>
      <BottomNavigationAction 
      className={classes.root}  
        icon={<LinkedInIcon onClick={event =>  window.location.href="https://www.linkedin.com/in/bryan-roof/"}/>}
      />
      <BottomNavigationAction 
      className={classes.root}
        icon={<GitHubIcon onClick={event =>  window.location.href="https://github.com/broof716"}/>}
      />
      <BottomNavigationAction
      className={classes.root}
        icon={<EmailIcon onClick={event =>  window.location.href="mailto:broof716@gmail.com"}/>}
      />
      <BottomNavigationAction
      className={classes.root}
        icon={<FolderIcon onClick={event =>  window.location.href="mailto:broof716@gmail.com"}/>}
      />
    </BottomNavigation>
    </>
  )
}

export default Contacts
