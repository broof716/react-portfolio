import React from 'react'
import { MakeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

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
      }
    }
  },
})(TextField);

export const Contacts = () => {
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">
            hire or contact me...
          </Typography>
          <Inputfield fullWidth={true} label="Name" variant="outlined" />
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts;