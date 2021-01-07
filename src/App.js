import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/cart/Cart";
import {Route, Switch} from "react-router-dom";
import Modal from "./components/Modal";

const AppContext = React.createContext();

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <ProductList/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route exact path="/details">
                    <Details/>
                </Route>
                <Route exact path="*">
                    <Default/>
                </Route>
            </Switch>
            <Modal/>
        </React.Fragment>
    );
}

export default App;
