
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Avatar, AvatarGroup } from '@mui/material';
// import VideoCallIcon from '@mui/icons-material/VideoCall';

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

let randomface = faces[Math.floor(Math.random() * faces.length)];

const avatar = {
   display: "inline-block",
   border: "2px solid white",
  }

const EventCard = ({title,description,attendees,image}) => {
  return(
    
    <Card sx={{ maxWidth: 345 }} style={{margin:"2rem  2rem "}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image ? image: "https://wallpaperaccess.com/full/279553.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="flex">
          {title.slice(0,20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0,156)}
        </Typography>
        {/* <Typography variant='h5' component="div">
        <VideoCallIcon/>
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
        <Button size="small">Register</Button>
      </CardActions>
      <Divider  light />
      <AvatarGroup total={attendees} max={4} style={{marginRight:"1rem",marginBottom:"2rem",marginTop:"1rem"}}>
          {faces.map(face => (
            <Avatar sx={{ height: '40px', width: '40px' }} className="avatar" key={face} src={face} /> 
          ))}
          </AvatarGroup>
    </Card>
  )
  

}

export default EventCard