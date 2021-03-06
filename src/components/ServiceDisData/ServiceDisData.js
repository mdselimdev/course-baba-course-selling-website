import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './ServiceDisData.css';

const ServiceDisData = (props) => {

  const { img, title, instructor, institution, duration, price } = props.data;

    return (
        <div>
            <Card  className="card" sx={{color: '#202C45',bgcolor: '#FBE0E7'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Subject : {title}
                    </Typography>
                    <Typography variant="h5" color="text.info">
            Instructor Name : {instructor}
                    </Typography>
          <Typography gutterBottom variant="h6" component="div">
             Course Duration : {duration} days
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Course Fee : {price} tk
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            College : {institution}
          </Typography>
          
          <Button sx={{my:'10px' , bgcolor:'crimson'}} color="success" variant="contained">Purchase Now</Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    );
};

export default ServiceDisData;