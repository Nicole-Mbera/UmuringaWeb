import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/Home";
import Impact from "../views/impact";
import Social from "../views/social";
import Shop from "../views/shop";
import Contact from "../views/contact";
import RegisterProduct from "../views/dashboard/registerProduct";
import DashLayout from "../components/dashLayout";

const Index=()=>{
    return(
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Impact/>} />
        <Route path='/impact' element={<Social/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route exact path="/registerProducts" element={<RegisterProduct/>}/>
        <Route exact path="/dashLayout" element={<DashLayout/>}/>
    </Routes>
    )

}
export default Index;
   
