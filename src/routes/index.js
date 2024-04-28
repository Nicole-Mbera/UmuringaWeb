import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/Home";
import Impact from "../views/impact";
import Social from "../views/social";
import Shop from "../views/shop";
import Contact from "../views/contact";
import RegisterProduct from "../views/dashboard/registerProduct";
import Products from "../views/dashboard/manageProducts";
import BestSellersProducts from "../views/dashboard/manageBestSellers";
import RegisterBestSellers from "../views/dashboard/registerBestSellers";
import Cart from "../views/cart";
import Order from "../views/order";
import App from "../views/carousel";
import Messages from "../views/dashboard/messages";


const Index=()=>{
    return(
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Impact/>} />
        <Route path='/impact' element={<Social/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/carousel' element={<App/>}/>
        <Route exact path="/dashLayout" element={<Products/>}/>
        <Route exact path="/registerProducts" element={<RegisterProduct/>}/>
        <Route exact path="/registerBestSellers" element={<RegisterBestSellers />}/>
        <Route exact path="/manageBestSellers" element={<BestSellersProducts/>}/>
        <Route exact path="/messages" element={<Messages/>}/>
        <Route exact path="/manageProducts" element={<Products/>}/>
        
    </Routes>
    )

}
export default Index;
   
