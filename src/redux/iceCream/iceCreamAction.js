import { BUY_ICECREAM } from "./iceCreamType"



export const buyIceCream = (amount = 1) =>{
    return{
        type: BUY_ICECREAM,
        payload: amount
    }
}