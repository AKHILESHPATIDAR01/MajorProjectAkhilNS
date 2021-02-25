import React from 'react';
import '../../App.css';
import catagory_data from '../../Data/Catagory_data'

const Mainpage = () => {
    
    const listItems = catagory_data.map((item) => 

        <div className="product" key={item.id}>
            <div className="product-content">
                    <div className="product-img">
                        <img src = {item.thumb} alt = "product image" />
                        <p>{item.catagory_name}</p>
                    </div>
                    <div className="product-btns">
                        <button type="button" className="btn-cart"> Shopping
                            <span><i className='bx bx-link-external'></i></span>
                        </button>
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

export default Mainpage;