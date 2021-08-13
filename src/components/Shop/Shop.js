import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products=[
        {name:'Asus',id:1},
        {name:'HP',id:2},
        {name:'Walton',id:3},
        {name:'Fuji',id:4},
        {name:'Apple',id:5}
    ];
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd=> <Product product={pd}></Product> )
            }
        </div>
    );
};

export default Shop;