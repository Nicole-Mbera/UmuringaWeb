import React from "react";
import "./dashLayout.css";
import { MenuOutlined, ShoppingCartOutlined, TeamOutlined, AppstoreOutlined,  FolderOpenOutlined, ImportOutlined } from '@ant-design/icons';
import photo from "../assets/images/logo.jpg"


const DashLayout = ({ children }) => {

    return (
        <div className="dash-container">

            <div className="header">
                <div className="logo-division"><img src={photo}></img></div>
                <div className="logout"><a href="/home">log out</a> </div>
                <div className="menu"> <MenuOutlined /> </div>
            </div>
            <div className="menuSection">
                <ul className="icons">
                    <li><AppstoreOutlined /> </li>
                    <li><FolderOpenOutlined /> </li>
                    <li><ImportOutlined /></li>
                    {/* <li><ShoppingCartOutlined /></li> */}
                    {/* <li><TeamOutlined /> </li> */}
                   
                </ul>

                <ul className="list">
                    <li> <a>Dashboard</a></li>
                    <li> <a href="/manageProducts"> Manage product </a></li>
                    <li> <a href="/registerProducts">Register product </a></li>
                    {/* <li><a href="/dashOrders">Orders</a></li> */}
                    {/* <li> <a href="/users"> Customers</a></li> */}
                  
                </ul>
            </div>
            {children}
        </div>
    )
}

export default DashLayout;