import { BUY_CAKE } from "./cakeTypes"



export const cakeAction = (amount = 1) => {
    return{
        type: BUY_CAKE,
        payload: amount
    }
}