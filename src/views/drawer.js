import React from "react";
import "./menu.css"
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined,LinkedinOutlined } from "@ant-design/icons";

const OrderDrawer= () => {
    return (

        <div className="drawer-container">
            <h1>Ooops</h1>
            <p>The feature for ordering and paying online is still underdevelopment.</p>
            <p>However, you can communate with Umulinga Fashion code to help you make and order manually.</p>
            <p>tel:+250787543448</p>
            <div style={{ paddingLeft:"110px"}}>
                                <a href="https://www.instagram.com/umuringa_fashion_code/" className="circum"> <InstagramOutlined /></a>
                                <a href="https://www.facebook.com/anaclet.art/" className="circum"> <FacebookOutlined /></a>
                                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"className="circum"><LinkedinOutlined /></a>
                                <a href="https://web.whatsapp.com/"className="circum"><WhatsAppOutlined /></a>
                                </div>
            
        </div>
    )


}
export default OrderDrawer;