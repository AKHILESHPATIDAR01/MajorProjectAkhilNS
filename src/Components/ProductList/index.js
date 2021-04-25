import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';
import catagory_data from '../../Data/Catagory_data'
import { cartContext } from '../../Global/cartContext';
import { productContext } from '../../Global/productContext';



const ProductList = () => {
    const { catagory_name } = useParams()
    const {products , catagory} = useContext(productContext);
    const {dispatch} = useContext(cartContext);
    
    const listItems = products.filter((val)=>{
        if(val.category == catagory_name){
            return val;
        }
    }).map((item) =>  

        <div className="product" key={item.id}>
            <div className="product-content">
                    <div className="product-img">
                        <img src = {item.image} alt = "product image" />
                        <p>{item.title_small}</p>
                    </div>
                    <div className="product-btns">
                        <Link to={`/productSingle/${item.id}`}>
                            <button type="button" className="btn-cart"> Shopping
                                {/* <span><i className='bx bx-link-external'></i></span> */}
                            </button>
                        </Link> 
                    </div>
            </div>
        </div>

        )

    return (
        <> 
            <div class = "products">
                <div class = "container">
                    <h1 class = "lg-title">Product List</h1>

                    <div class = "product-items">
                        {listItems}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductList;