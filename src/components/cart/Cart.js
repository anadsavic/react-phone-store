import React from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import {useGlobalContext} from "../../context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart(props) {
    const {cart} = useGlobalContext();
    if (cart.length === 0) {
        return <EmptyCart/>
    }
    return (
        <div>
            <Title name="your" title="cart"/>
            <CartColumns/>
            <CartList/>
            <CartTotals/>
        </div>
    );
}

export default Cart;