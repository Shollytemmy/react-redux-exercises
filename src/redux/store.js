
import { createStore, combineReducers } from "redux"
import {logger} from 'redux-logger'
import { applyMiddleware } from "redux"
import { cakeReducer } from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"


const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
}
)

const store = createStore(rootStore, applyMiddleware(logger))





export default store