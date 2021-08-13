import React from 'react';

const Product = (props) => {
    const {name,id}=props.product;
    const {addToCart}=props;
    return (
        <div style={{border:'2px solid blue',padding:'5px'}}>
            <h3>{name}</h3>
            <button onClick={()=>{addToCart(id,name)}}>Buy Now</button>
        </div>
    );
};

export default Product;