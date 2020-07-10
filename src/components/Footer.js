import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    "& .MuiButtomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomoato",
        fontSize: "1.8rem",
      },
    },
  }
});

const Footer = () => {
  const classes = useStyles()
  return (
    <BottomNavigation width="auto" style={{background: "#222"}}>
      <BottomNavigationAction 
      className={classes.root}
        style={{padding: 0}}
        icon={<LinkedInIcon onClick={event =>  window.location.href="https://www.linkedin.com/in/bryan-roof/"}/>}
      />
      <BottomNavigationAction 
      className={classes.root}
        style={{padding: 0}}
        icon={<GitHubIcon onClick={event =>  window.location.href="https://github.com/broof716"}/>}
      />
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<EmailIcon onClick={event =>  window.location.href="mailto:broof716@gmail.com"}/>}
      />
    </BottomNavigation>
  )
}

export default Footer
