import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemCardSmall = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
        </CardMedia>
        <CardContent>
          {<Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>}
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCardSmall;

// component="img"
// height="140"
// image=""
// alt=""