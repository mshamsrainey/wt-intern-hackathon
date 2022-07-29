import React from 'react'
import ItemCardSmall from './ItemCardSmall'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";


class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    render() {
        return (
            <Card sx={{ maxWidth: 275 }}>
                <CardActionArea>
                    <CardActions disableSpacing>
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                    <CardMedia
                        component="img"
                        height="200"
                        image={this.props.image}
                        alt="">
                    </CardMedia>
                    <CardContent style={{ textAlign: "center" }}>
                        {<Typography gutterBottom variant="h5" component="div">
                            {this.props.name}
                        </Typography>}
                        <Typography variant="h6" color="text.secondary">
                            ${this.props.price}
                        </Typography>
                        <Typography variant='h6' color="text.secondary">
                            {this.state.quantity}
                        </Typography>
                        <ButtonGroup>
                            <Button
                                onClick={() => {
                                    this.setState({quantity: Math.max(this.state.quantity - 1, 0)});
                                }}
                            >
                                {" "}
                                <RemoveIcon fontSize="small" />
                            </Button>
                            <Button
                                onClick={() => {
                                    this.setState({quantity: this.state.quantity + 1});
                                }}
                            >
                                {" "}
                                <AddIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
export default CartItem