 export const ADD_TO_CART='ADD_TO_CART';
 export const REMOVE_FROM_CART='REMOVE_FROM_CART';

 export const addToCART = (id,name)=>{
     return {type: ADD_TO_CART,id,name}
 }

 export const removeFromCART = id=>{
     return {type: REMOVE_FROM_CART,id}
 }