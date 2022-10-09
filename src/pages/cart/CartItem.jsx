import { useContext } from 'react';
import { Delete } from '@mui/icons-material';
import React from 'react';
import { contextTest } from '../../App';
import '../cart/Cart.css';

const CartItem = ({ item }) => {
    const { state1 } = React.useContext(contextTest);
    const [carts, setCarts] = state1;

    const increaseQuantity = (id) => {
        const findProduct = carts.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                  }
                : item,
        );

        setCarts(findProduct);
    };
    const decreaseQuantity = (id) => {
        const filterProduct = carts.filter((m) => m.id === id);
        if (filterProduct[0].quantity > 1) {
            const findProduct = carts.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item,
            );
            setCarts(findProduct);
        } else {
            const removeProduct = carts.filter((m) => m.id !== id);
            setCarts(removeProduct);
        }
    };
    const handleRemove = (id) => {
        const timID = item.id;
        setCarts(carts.filter((m) => m.id !== timID));
    };
    return (
        <div className="cart-item">
            <div className="product" style={{ flex: 2 }}>
                <img src={item.img} alt={item.id} className="imgCartpr" />
                <p className="nameCart">{item.name}</p>
            </div>
            <div className="price">${item.price}</div>
            <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <div className="total">
                <span>${item.price * item.quantity}</span>
            </div>
            <div className="delete">
                <span>
                    <Delete className="icon" onClick={handleRemove} />
                </span>
            </div>
        </div>
    );
};

export default CartItem;
