import React from "react";
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="stayConnected">
                {/* <h1>U-brand</h1>
                <h1>Make a unique character as astar</h1> */}
               

                <div className="social">
                {/* <h1>stay connected</h1> */}
                <a href="https://www.facebook.com/anaclet.art/"><FacebookOutlined /></a>
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><WhatsAppOutlined /></a>
                </div>
            </div>
            {/* <hr className="line"></hr> */}
            <div className="navbarList"> 
                
                    <a href="/home"> Home </a>
                    <a href="/shop"> Shop</a>
                    <a href="/about"> About us </a>
                    <a href="/contact">Contact us</a>
                    <a href="/impact">Social impact</a>
               

            </div>
        </div>
    )
}
export default Footer