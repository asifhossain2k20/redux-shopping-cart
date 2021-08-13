import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState ={
    cart:[]
}

const cardReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newId=action.id;
            const newCart=[...state.cart,newId];
            return {cart:newCart};
        case REMOVE_FROM_CART:
            const removeId=action.id;
            const remainingCart=state.cart.filter(item=>item!==removeId)
            return {cart:remainingCart}
        default:
            return state;
    }
}