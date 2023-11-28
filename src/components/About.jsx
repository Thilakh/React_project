import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Stack} from '@mui/material';
import Top from './Top'
import Image from "./img/Flight.jpg";
import { Link } from 'react-router-dom';
const containerStyle = {
  backgroundImage:`url(${Image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignitems:'center'
};


export default function ActionAreaCard() {
  return (
    <>
    <Top />
    <div style={containerStyle}>
    <Stack direction="row" spacing={5}  style={{justifyContent:"center", marginTop:"5%"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to='/hotels'>
            Hotels
          </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='https://images.theconversation.com/files/229809/original/file-20180730-106496-t9r2c.jpg?ixlib=rb-1.1.0&rect=0%2C339%2C4075%2C2482&q=45&auto=format&w=926&fit=clip'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to='https://www.ybmtravels.in/'>
            Bus
          </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
        </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='data:image/png;base64,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'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to='https://in.usembassy.gov/visas/'>
            Visa slot booking
          </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
        </CardActionArea>
    </Card>
    </Stack>
    <center><h1 style={{color:'white',marginTop:'20%'}}> EasyFly is a global airline, bringing people, places and diverse cultures closer together for more than 100 years. Serving our community and planet is at the heart of everything we do, and we look forward to sharing our exciting sustainability initiatives with you.</h1></center>
    </div>
    </>
  );
}
