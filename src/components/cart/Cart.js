import React from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import {useGlobalContext} from "../../context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import {useHistory} from 'react-router-dom';

function Cart(props) {
    const {cart} = useGlobalContext();
    const {history} = useHistory();
    if (cart.length === 0) {
        return <EmptyCart/>
    }
    return (
        <div>
            <Title name="your" title="cart"/>
            <CartColumns/>
            <CartList/>
            <CartTotals history={history}/>
        </div>
    );
}

export default Cart;