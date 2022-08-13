
import { createStore, combineReducers } from "redux"
import { cakeReducer } from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"


const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer

})

const store = createStore(rootStore)
console.log(store)




export default store