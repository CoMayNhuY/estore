/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { contextTest } from '../../App';
import '../cart/Cart.css';

const CartSum = () => {
    const { state1, state2 } = React.useContext(contextTest);
    const [carts, setCarts] = state1;
    const [totalPrice, setTotalPrice] = state2;

    useEffect(() => {
        const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    }, [carts]);
    return (
        <div className="container content-sum">
            <div className="code">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Code</button>
            </div>
            <div className="sum">
                <h3>Cart Summary</h3>
                <div className="sum-detail">
                    <div>
                        <span>Sub total</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div>
                        <span>Shipping Cost</span>
                        <span>$1</span>
                    </div>
                </div>
                <div className="total">
                    <h4>Grand Total</h4>
                    <h4>${totalPrice + 1}</h4>
                </div>
            </div>
            <div className="cart-btn">
                <button className="update-btn">Update Cart</button>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
};

export default CartSum;
