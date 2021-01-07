import React from 'react';
import {useGlobalContext} from "../../context";

function CartItem({item}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = useGlobalContext();
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="image" style={{width: '5rem', height: '5rem'}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                $ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={
                        () => {
                            if (count === 1) {
                                return removeItem(id);
                            } else {
                                return decrement(id)
                            }
                        }
                    }>-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                    <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
                </div>

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total: $ {total}</strong>

            </div>
        </div>
    );
}

export default CartItem;