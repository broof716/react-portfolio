import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute"
  }
})

const Home = () => {

  const classes = useStyles()
  return (
    <div>
      <Navbar/>
      <Header/>
      <Particles 
      canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45
            }
          }
        }}
      />
    </div>
  );
};

export default Home;
