import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import '../cart/Cart.css';

import CartItem from './CartItem';
import CartSum from './CartSum';
import { useSelector } from 'react-redux';
// import { contextTest } from '../../App';

function Cart() {
    const carts = useSelector((m) => m.cart.carts);
    return (
        <div>
            <Header />
            <div className="bodycart">
                <div className="content-cart">
                    <div className="cart">
                        {carts.length > 0 ? (
                            <div className="cart-list">
                                <div className="container">
                                    <div className="cart-row">
                                        <div style={{ flex: 2 }} className="cart-title">
                                            product name
                                        </div>
                                        <div className="cart-title">price</div>
                                        <div className="cart-title">quantity</div>
                                        <div className="cart-title">total</div>
                                        <div className="cart-title">remove</div>
                                    </div>
                                    {carts.map((item, i) => (
                                        <CartItem key={i} item={item} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            'Your cart is empty'
                        )}
                    </div>
                </div>
                <div className="content-cartsum">
                    <CartSum />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
