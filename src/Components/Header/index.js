import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { cartContext } from '../../Global/cartContext';
import { productContext } from '../../Global/productContext';


const Header = () => {
    const {products} = useContext(productContext);
    const { shoppingCart } = useContext(cartContext);

    return (
        <>
            <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav__logo">Ecommerce</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <Link to='/'>
                                <a href="#home" class="nav__link">Home</a>
                            </Link>
                        </li>

                        <li class="nav__item">
                            <Link to='/productList'>
                                <a href="#home" class="nav__link">Products</a>
                            </Link>
                        </li>

                        <li class="nav__item">
                            <Link to="/productSingle">
                                <a href="#home" class="nav__link">single-Product</a>
                            </Link>
                        </li>
                        {/* <li class="nav__item"><a href="#share" class="nav__link">Products</a></li>
                        <li class="nav__item"><a href="#catagoryBox" class="nav__link">single-Product</a></li> */}
                        <li class="nav__item">
                            <ul> 
                                <li>
                                    <Link to='/cart'>
                                         <i class='bx bx-cart'></i><span className="cart-item-num">{shoppingCart.length}</span>    
                                    </Link>
                                </li>
                                <li><i class='bx bx-heart'></i><span className="cart-item-num">0</span></li>
                                <li><i class='bx bx-user'></i><span className="cart-item-online"></span></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-cart'></i>
                    <i class='bx bx-user'></i>
                    <i class='bx bx-grid-alt'></i>

                </div>
            </nav>
        </header>
   
        </>
    );
};

export default Header;
