import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Offer from './Component/Offer/OfferListing';
import Offer2 from './Component/Offer2/CashbackListing';
import Feature from './Component/Feature/FeatureMain';
import Order from './Component/order/Order';
import DealsMain from './Component/deals/DealsMain';
import Cart from './cart/cart';
import HeaderDisplay from './HeaderDisplay';


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/register" component={HeaderDisplay} />
            <Route path="/offer" component={Offer} />
            <Route path="/order" component={Order} />
            <Route path="/offer2/:id" component={Offer2} />
            <Route path="/Feature/:id" component={Feature} />
            <Route path="/deals/:id" component={DealsMain} />
            <Route path="/cart" component={Cart} />
            <Footer />

        </BrowserRouter>
    )
}
export default Routing;