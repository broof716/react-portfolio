import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon
} from "@material-ui/core"
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons"
import avatar from '../bryan.png'

// CSS STYLES
const useStyles = makeStyles(theme=>({
  menuSliderContainer : {
    width: 250,
    background: "#511",
    height: "30rem"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  ListItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
  };

  const classes = useStyles()

  const sideList = slider => (

    <Box className={classes.menuSliderContainer} component="div">
    <Avatar className={classes.avatar} src={avatar} alt="Bryan Roof"/>
    <Divider/>
    <List>
      {menuItems.map((lsItem, key)=> (
      <ListItem button key={key}>
        <ListItemIcon className={classes.ListItem}>{lsItem.listIcon}</ListItemIcon>
        <ListItemText className={classes.ListItem} primary={lsItem.listText} />
      </ListItem>
      ))}
    </List>
    </Box>
  )
  return (
    <>
    <Box component="nav">
      <AppBar position="static" style={{background: "#222"}}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <ArrowBack style={{color: "tomato"}}/>
          </IconButton>
          <Typography variant="h5" style={{color: "tan"}}>
            Portfolio
          </Typography>
          <MobilRightMenuSlider open={state.right}>
            {sideList("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar