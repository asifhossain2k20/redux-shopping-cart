import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState ={
    cart:[],
    products:[ 
    {name:'Asus',id:1},
    {name:'HP',id:2},
    {name:'Walton',id:3},
    {name:'Fuji',id:4},
    {name:'Apple',id:5}
]
}

const cartReducers = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newId=action.id;
            const newCart=[...state.cart,newId];
            return {...state,cart:newCart};
        case REMOVE_FROM_CART:
            const removeId=action.id;
            const remainingCart=state.cart.filter(item=>item!==removeId)
            return {...state, cart:remainingCart}
        default:
            return state;
    }
}

export default cartReducers;