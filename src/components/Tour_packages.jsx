import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Stack} from '@mui/material';
import Top from './Top'
import Image from "./img/Flight.jpg";
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
    <Stack direction="row" spacing={5} >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
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
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp87gqFxnYK7QFz5VMrEfdQpf8sbWQHY6_5xSkphl0ROY0icVDB1rGkTrL97HgpdaOk0&usqp=CAU'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    </Stack>
    </div>
    </>
  );
}
