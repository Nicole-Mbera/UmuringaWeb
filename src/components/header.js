import React, {useState} from "react";
import "./header.css"
import { Drawer } from "antd";
import logo from "../assets/images/logo.jpg"
import { MenuOutlined } from '@ant-design/icons'
import Menu from "../views/menu";

const Header = ({data}) => {
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
                <a href="/shop"> Shop</a>
                <a href="/about"> About us </a>
                <a href="/contact">Contact us</a>
                <a href="/impact">Social impact</a>



                <h1 href="/shop" onClick={() => handleclickDrawerVisible()} style={{ marginLeft: "400px", marginTop: "20px", fontSize: "25px", color: "black" }}> <MenuOutlined /></h1>

            </div>

        </div>
        </>
    )

}

export default Header;