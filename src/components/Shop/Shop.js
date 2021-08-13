import React from 'react';
import { connect } from 'react-redux';
import { addToCART } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const { products,addToCart}=props;
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd=> <Product
                     product={pd}
                     key={pd.key}
                     addToCart={addToCart}
                     ></Product> )
            }
        </div>
    );
};

const mapStateToProps =state=>{
    return{
        cart:state.cart,
        products:state.products
    }
}

const mapDispatchToProps={
    addToCart:addToCART
}



export default connect(mapStateToProps,mapDispatchToProps)(Shop);