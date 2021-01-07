import React, {useContext, useEffect, useState} from 'react';
import {detailProduct, storeProducts} from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [detailProd, setDetailProd] = useState(null);
    // const [cart, setCart] = useState(storeProducts);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product;
    }
    const handleDetail = (id) => {
        const product = getItem(id);
        setDetailProd(product);
        console.log(`from handleDetail ${product}`)
    }
    const addToCart = (id) => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        setCart([...cart, product]);
    }

    const increment = (id) => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        setCart(tempCart);
    }

    const addTotals = () => {
        let subtotal = 0;
        cart.map(item => (subtotal += item.total));
        const tempTax = subtotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        setCartSubtotal(subtotal);
        setCartTax(tax);
        setCartTotal(total);
    }
    const decrement = (id) => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        product.total = product.count * product.price;
        setCart(tempCart);
    }
    const removeItem = (id) => {
        let tempProducts = [...products];
        let tempCart = cart.filter(item => item.id !== id);
        setCart(tempCart);

        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        setProducts(tempProducts);

    }
    const clearCart = () => {
        setCart([]);
        populateProducts();
    }
    const openModal = (id) => {
        const product = getItem(id);
        setModalOpen(true);
        setModalProduct(product);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    const populateProducts = () => { // pravimo kopiju podataka a ne uzimamo reference na podatke
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        setProducts(tempProducts);
    }

    useEffect(() => {
        populateProducts();
    }, []);
    return (
        <AppContext.Provider
            value={{
                products,
                detailProd,
                handleDetail,
                addToCart,
                openModal,
                closeModal,
                modalProduct,
                modalOpen,
                increment,
                decrement,
                removeItem,
                clearCart,
                cart,
                cartSubtotal,
                cartTax,
                cartTotal,
                addTotals
            }}>
            {children}
        </AppContext.Provider>
    );
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}