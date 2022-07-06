import React from "react";
import Footer from "./footer";
import Header from "./header";

const Homelayout=({children})=>{
return(
    <div className="home-container">
<Header></Header>
<div style={{height:"75%"}}>
{children}
</div>
<Footer></Footer>
    </div>
)} 

export default Homelayout;