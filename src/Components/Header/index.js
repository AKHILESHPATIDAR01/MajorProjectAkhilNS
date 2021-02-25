import React from 'react';
import '../../App.css';

const Header = () => {
    return (
        <>
            <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav__logo">Ecommerce</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#share" class="nav__link">Products</a></li>
                        <li class="nav__item"><a href="#catagoryBox" class="nav__link">single-Product</a></li>
                        <li class="nav__item"><a href="#accessory" class="nav__link">Accessory</a></li>
                        <li class="nav__item">
                            <ul>
                                <li><i class='bx bx-cart'></i></li>
                                <li><i class='bx bx-heart'></i></li>
                                <li><i class='bx bx-user'></i></li>
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