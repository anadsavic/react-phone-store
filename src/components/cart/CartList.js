import React, {useEffect} from 'react';
import CartItem from "./CartItem";
import {useGlobalContext} from "../../context";

function CartList() {
    const {cart} = useGlobalContext();
    return (
        <div className="container-fluid">
            {cart.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
        </div>
    );
}

export default CartList;