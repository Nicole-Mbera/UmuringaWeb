import React from "react";
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, LinkedinOutlined } from "@ant-design/icons";
import logo from "../assets/images/nobag.png"
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
            <div className="flex">
            
            <div className="logo">
          <img src={logo} />

        </div>
            <div className="navbarList"> 
                <ul className="no-bullets">
                <li><a> QUICK LINKS</a></li>
                    <li><a href="/home"> Home </a></li>
                    <li><a href="/shop"> Shop</a></li>
                    <li><a href="/about"> About us </a></li>
                    <li><a href="/contact">Contact us</a></li>
                    </ul>
               
                    </div>

                 <div className="bullets">
    
                    <ul>
                    <li> CONTACT INFORMATION</li>
                    <li>Phone: +250787735301</li>
                    <li>Email: umuringafashion@gmail.com</li>
                    <li>Location: Gikondo, Kigali, Rwanda</li>
                    
                  
                    </ul>
                    
    </div>
    
    <div className="bullets">
          <ul>
                    <li> ABOUT</li>
                    <li> Umuringa is an empowering brand </li>
                    <li> that showcases Africa as a hub of confidence and style  </li>
                    <li>through its eco-friendly, artistic footwear...<a href="/impact" className="more" >read more</a></li>
                    {/* <li>as a derivation of artistic handmade fashion accessories.</li> */}
                    </ul>
          </div>
                
    </div>      

            
        </div>
    )
}
export default Footer