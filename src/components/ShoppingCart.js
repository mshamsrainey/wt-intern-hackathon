import React, { useState } from 'react';
import CartItem from './CartItem';
import { SwipeableDrawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import items from "./database/groceries-list.js";
import styled from 'styled-components';

export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        products: [],
        cartTotal: 0
        }
      }
      open = useState(false);
      setOpen = useState(false); 

      cartComponentTest = items.map((item) =>{
        return (
            <CartItem
                key={item.id}
                name={item.name}
                price={item.cost}
                image={item.image}
            />
        )});

      render() {
      return (
       <Box display="flex" justifyContent="right" width="100%">
            <IconButton>
               <ShoppingCart style={{ fontSize: "50px" }}
                   edge="start"
                   color="inherit"
                   aria-label="open shopping cart in drawer"
                   onClick={() => setOpen(true)} />
           </IconButton><div className="cart-price">${this.state.cartTotal}</div>
           <SwipeableDrawer
               anchor="right"
               open={open}
               onClose={() => setOpen(false)}
               onOpen={() => { } }>
                    <div className="products">
                        <div className="product-grid">{productComponents}</div>
                    </div>;
               </SwipeableDrawer>
            </Box>
)
    }

}