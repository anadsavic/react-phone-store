import React from 'react';
import Title from "./Title";
import {useGlobalContext} from "../context";
import Product from "./Product";

function ProductList(props) {
    const {products, detailProd, handleDetail, addToCart} = useGlobalContext();
    return (
        <React.Fragment>
            {/*<Product/>*/}
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                    <div className="row">
                        {products.map((item) => {
                            return <Product product={item} key={item.id}/>;
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductList;