import React, { useEffect, useState } from "react";
import Homelayout from "../components/homeLayout";
import "./shop.css";
import Shoes from "../assets/constants/shop.json"
import Cart from "./cart";
import { Modal } from "antd";
import { Carousel } from 'react-responsive-carousel'

import { CircularProgress } from "@mui/material";

import axios from "axios";

const Shop = (data) => {
  const [showVisible, setShowVisible] = useState({});
  const [spVisible, setSpVisible] = useState(false);

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProducts = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:7000/product/allproducts")
      .then((res) => {
        setProducts(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="shop-container">
      <Homelayout>
        <h1 className="title">SHOP WITH UMURINGA</h1>

        <div className="best-shop">
          {isFetching ? (
            <center style={{ paddingTop: "100px", paddingLeft: "250px" }}>
              <CircularProgress />
            </center>
          ) : (
            <>
              {products.map((product, Index) => (
                <div className="container">
                  
                  <div className="carousel">
                  <Carousel>
                      {product.productPicture.map((images) => (
                        
                          
                          
                          
                          <img src={images} />
                          
                      ))}
                      </Carousel>
                        
                     </div>
                  
                    {/* <img className="image" src={ketch.productPicture} /> */}
                   
                      <div className="text">
                        <a
                          href="#"
                          onClick={() => {
                            setShowVisible(product);
                            setSpVisible(true);
                          }}
                        >
                          {" "}
                          
                        </a>
                        {/* <span className='dot'><a><HeartOutlined /></a></span>
                                        <span className='dot'><a><ExpandOutlined /></a></span> */}
                      </div>
                   
                  <div className="description">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </>
          )}
          <Modal
            width=""
            footer=""
            centered
            visible={spVisible}
            onOk={() => setSpVisible(false)}
            onCancel={() => setSpVisible(false)}
          >
            <Cart data={showVisible} />
          </Modal>
        </div>
      </Homelayout>
    </div>
  );
};
export default Shop;
