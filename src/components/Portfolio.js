import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/splurty.png'
import project2 from '../images/nomster.png'
import project3 from '../images/flixter.png'
import project4 from '../images/grammable.png'
import project5 from '../images/todoster.png'
import project6 from '../images/note.png'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    border: "solid"
  },
  cardContainer: {
    maxWidth: 450,
    margin: "5rem auto"
  }
})

const Portfolio = () => {
  const classes= useStyles()
  return (
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 1" height="240" image={project1} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                    Quote Generator
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    A database-powered quote generator with a mobile-first design, using the Ruby on Rails framework, HTML, and CSS. Uses Git and GitHub for version control, and launched
                    on Heroku.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/Bryan-Roof" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://splurty-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
            {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 2" height="240" image={project2} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                   Yelp Clone 
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/nomster" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://nomster-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
            {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 3" height="240" image={project3} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                   Two Sided Marketplace
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    A two-sided, video-streaming marketplace platform that features credit card payment capabilities, user role management, complex user interfaces, and advanced database relationships.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/flixter" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://flixter-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
           {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 4" height="240" image={project4} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                    Test Driven Development
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/grammabled" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://grammabled-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
            {/* Project 5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 5" height="240" image={project5} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                    Single Page Todo Application
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    This single-page to-do application features a
                    fluid user interface that– by using JavaScript– allows users to rapidly add dynamic content.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/todo" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://todo-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
            {/* Project 6 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 6" height="240" image={project6} />
                <CardContent>
                  <Typography gutterButton varaint="h5">
                    Note Taking Application
                  </Typography>
                  <Typography varaint="body2" color="textSecondary" component="p">
                    Crafted a note taking application by employing React.js, JavaScript ES6, and CSS as the front-end, and a Ruby on Rails API for the backend. 
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href="https://github.com/broof716/note-app" target="_blank" size="small" color="primary">
                    GitHub
                  </Button>
                  <Button href="https://note-app-bryan-roof.herokuapp.com/" target="_blank" size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Portfolio
