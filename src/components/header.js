import React, { useState } from "react";
import "./header.css"
import { Drawer } from "antd";
import logo from "../assets/images/nobag.png"
import { MenuOutlined } from '@ant-design/icons'
import Menu from "../views/menu";

const Header = ({ data }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handleclickDrawerVisible = () => {
    setDrawerVisible(true);
  };
  const closeDrawervisible = () => {
    setDrawerVisible(false);
  };
  return (
    <>
      <Drawer
        placement="right"
        visible={drawerVisible}
        width={250}
        // height={20}
        onClose={() => closeDrawervisible()}
      >
        {/* <EmptyCart data={data} /> */} <Menu data={data}></Menu>
      </Drawer>
      <div className="headerContainer">
        <div className="logo">
          <img src={logo} />

        </div>
        

        <div className="Navbar">
          <a href="/home"> Home </a>
          <a href="/impact">About us</a>
          <a href="/shop"> Shop</a>
          <a href="/contact">Contact us</a>
          

        </div>

        <div className="button-container">
          <h1 href="/shop" onClick={() => handleclickDrawerVisible()} style={{fontSize: "25px", color: "black", paddingTop:"30px", paddingRight:"15px"}}> <MenuOutlined /></h1>
          {/* <a><MenuOutlined /></a> */}

        </div>

      </div>
    </>
  )

}

export default Header;