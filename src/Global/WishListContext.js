import React, {createContext, useReducer} from "react"
import {WishListReducer} from "./WishListReducer"
export const cartContext = createContext();

const WishListContextProvider = (props) => {
    const [wishList, dispatch] = useReducer(WishListReducer, {shoppingCart: [], totalPrice: 0, message: '', qty: 0})
      
    return(
        <cartContext.Provider value={{...wishList, dispatch}}>
           {props.children}
        </cartContext.Provider>
    )

}

export default WishListContextProvider;