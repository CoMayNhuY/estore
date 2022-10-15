import React, { useContext } from 'react';
import '../header/Header.css';
import NavBarItem from './navbarItem';
import { constmenuHeaderTopLeft, constmenuHeaderTopRight, menuBanner } from './menuHeader';
import { Link } from 'react-router-dom';
// import { contextTest } from '../../App';

import { useSelector, useDispatch } from 'react-redux';

function Header() {
    // const { state1 } = React.useContext(contextTest);
    // const [carts, setCarts] = state1;

    const carts = useSelector((state) => state.cart.carts);
    console.log(carts);

    return (
        <div>
            <div className="container-fluid hi">
                <div className="row">
                    <div className="col-sm-8">
                        <div class="container">
                            <ul class="nav">
                                {constmenuHeaderTopLeft.map((item, i) => (
                                    <Link key={i} to={item.path} className="link">
                                        <NavBarItem item={item} isShowDropDown={item.isDropdownShown} />
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div class="container menu-header-top-right">
                            <ul class="nav">
                                {constmenuHeaderTopRight.map((item, i) => (
                                    <NavBarItem key={i} item={item} isShowDropDown={item.isDropdownShown} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid Header-Main">
                <div className="row">
                    <div className="col-sm-4">
                        <img
                            src="https://wow-estore.com/wp-content/uploads/2022/07/Wow-Estore_logo_2.png"
                            className="header-main-logo"
                        />
                    </div>
                    <div className="col-sm-4 header-main-input">
                        <form>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" />
                                <span class="input-group-text" style={{ backgroundColor: 'white' }}>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-2 heart-cart">
                        <button className="btn btn-dangerous">
                            <Link to="" style={{ textDecoration: 'none' }}>
                                <i className="fa-solid fa-heart"></i>
                                <span className="styH-C"> (0)</span>
                            </Link>
                        </button>

                        <button className="btn btn-dangerous">
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                {/* <span className="styH-C"> ({carts.length})</span> */}
                                <span className="styH-C"> ({carts.length})</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
