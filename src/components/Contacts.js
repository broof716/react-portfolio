import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
  form: {
    top: "40%",
    left: "40%",
    transform: "translate(-50%, -50%",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}))

const Inputfield = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato"
    },
    "& label": {
      color: "tan"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldSet": {
        borderColor: "tan",
      },
      "&:hover fieldSet": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldSet": {
        boarderColor: "tan",
      },
    }
  },
})(TextField);

const Contacts = () => {

  const classes = useStyles()

  return (
    <Box component="div" style={{background: "#233", height: "100vh"}}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography 
            variant="h5" 
            style={{
              color: "tomato", 
              textAlign: "center", 
              textTransform: "uppercase",
            }}
          >
            hire or contact me...
          </Typography>
          <Inputfield 
            fullWidth={true} 
            label="Name" 
            variant="outlined" 
            inputProps={{style:{ color: "white"}}} 
            margin="dense"
            size="medium" 
          />
          <br />
          <Inputfield fullWidth={true} label="Email" variant="outlined" inputProps={{style:{ color: "white"}}} margin="dense"size="medium" />
          <br />
          <Inputfield 
            fullWidth={true} 
            label="Phone Number" 
            variant="outlined" 
            inputProps={{style:{ color: "white"}}}
            margin="dense"
            size="medium" 
          />
          <br />
          <Button 
            className={classes.button} 
            variant="outlined" 
            fullWidth={true} 
            endIcon={<SendIcon/>}>
            contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts;