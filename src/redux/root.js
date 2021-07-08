import { createStore ,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {showItems} from './reducers/showItems'
import {addItemsToCart} from './reducers/cart'
import { filter } from "./reducers/filter";


const root=combineReducers({
        showItems,
        addItemsToCart,
        filter
})

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const store=createStore(root,enhancer(applyMiddleware(thunk)) )

export default store