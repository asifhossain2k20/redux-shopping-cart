import React from 'react';
import { connect } from 'react-redux';
import { removeFromCART } from '../../redux/actions/cartAction';

const Cart = (props) => {
    console.log(props);
    const{cart,removeFromCart} = props;
    return (
        <div>
            <h1>This is Cart</h1>
            <ul>
                {
                    cart.map(ct=><li>
                        {ct} <button onClick={() =>removeFromCart(ct)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps={

    removeFromCart:removeFromCART
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);