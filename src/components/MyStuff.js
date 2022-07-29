import items from "./database/groceries-list.js";
import React from 'react';
import CartItem from "./CartItem";

function MyStuff() {
    const cartComponentTest = items.map((item) =>{
        return (
            <CartItem
                key={item.id}
                name={item.name}
                price={item.cost}
                image={item.image}
            />
        );
    });
    return <div className="products">
     
        <div className="product-grid">{cartComponentTest}</div>
        </div>;
}
export default MyStuff