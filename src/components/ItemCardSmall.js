import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ItemCardSmall = (props) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon/>
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt="">
        </CardMedia>
        <CardContent>
          {<Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>}
          <Typography variant="h6" color="text.secondary">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCardSmall;
