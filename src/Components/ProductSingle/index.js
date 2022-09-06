import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';
import catagory_data from '../../Data/Catagory_data'
import { cartContext } from '../../Global/cartContext';
import { productContext } from '../../Global/productContext';

const ProductSingle = () => {
    const { id } = useParams()
    const {products} = useContext(productContext);
    const {dispatch} = useContext(cartContext);
    
    const listItems = products.filter((val)=>{
        if(val.id == id){
            return val;
        }
    }).map((item) =>   
        <>
        <div className="singleProduct">
            <div className="singleProduct-img">
                <img src={item.image} />
            </div>
            <div className="singleProduct-details">
                <p className="s-p-title-small">{item.title_small}</p>
                <p className="s-p-title">{item.title}</p>
                <p className="s-p-description">{item.description}</p>
                <p className="s-p-catagory">{item.category}</p>
                <div className="s-p-price-portion">
                    <p className="s-p-price"> ₹{item.price}</p>
                    <button className="s-p-btn" onClick={() => dispatch({type: 'ADD_TO_CART', id: item.id, products})} >Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        )   

    return (
        <> 
            <div class = "products">
                <div class = "container">
                    <h1 class = "lg-title">Product Single</h1>

                    <div class = "product-items-single">
                        {listItems}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductSingle;