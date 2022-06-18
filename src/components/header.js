import React from "react";
import "./header.css"
import logo from "../assets/images/logo.jpg"
import { MenuOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="logo">
                <img src={logo} />

            </div>
            <div className="Navbar">
                <a href="/home"> Home </a>
                <a href="/shop"> Shop</a>
                <a href="/about"> About us </a>
                <a href="/contact">Contact us</a>
                <a href="/impact">Social impact</a>



                <h1 href="/shop" style={{ marginLeft: "400px", marginTop: "20px", fontSize: "25px", color: "black" }}> <MenuOutlined /></h1>

            </div>

        </div>

    )

}

export default Header;