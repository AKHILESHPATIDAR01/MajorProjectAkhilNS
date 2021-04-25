import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import Catagory_data from "../Data/Catagory_data";
import Product_data from "../Data/Product_data";


export const productContext = createContext();



const ProductContextProvider = (props) => {

    const [catagory] = useReducer(ProductReducer, Catagory_data);
    const [products] = useReducer(ProductReducer, Product_data);

      
    return(
        <productContext.Provider value={{products , catagory}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;