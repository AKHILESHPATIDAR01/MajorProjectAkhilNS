import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
// import catagory_data from '../../Data/Catagory_data'
import { cartContext } from '../../Global/cartContext';
import { productContext } from '../../Global/productContext';

const ProductList = () => {

    const {products , catagory} = useContext(productContext);
    const {dispatch} = useContext(cartContext);
    
    const listItems = catagory.map((item) => 

        <div className="product" key={item.id}>
            <div className="product-content">
                    <div className="product-img">
                        {/* <img src = {item.thumb} alt = "product image" /> */}
                        <p>{item.catagory_name}</p>
                    </div>

                    {/* <p className="product-name">{item.catagory_name}</p> */}

                    <div className="product-btns">
                    <Link to={`/productList/${item.catagory_name}`}>
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
                    <h1 class = "lg-title">Choose Catagory</h1>

                    <div class = "product-items">
                        {listItems}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductList;