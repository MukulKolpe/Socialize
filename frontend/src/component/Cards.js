import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4),
    marginTop: '0%',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="http://www.personalitytutor.com/files/2012/03/Socializing-With-People.jpg"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Make New Friends
            </Typography>
            <Typography className={classes.featureList}>
              Discver new people and socialize.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="data:image/jpeg;base64,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"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Explore The OutDoors
            </Typography>
            <Typography className={classes.featureList}>
              The world is a book and those who do not travel read only one page.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://blog.hyland.com/wp-content/uploads/offset_770142-e1566823706895.jpg"
            />
            <Typography variant="h5" component="h3" className={classes.title}>
              Connect Over Tech
            </Typography>
            <Typography className={classes.featureList}>
              The Most Important Things are the connections you make with others.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;