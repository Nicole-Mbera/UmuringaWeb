import React, { useEffect, useState } from "react";
import Homelayout from "../components/homeLayout";
import "./shop.css";
import Cart from "./cart";
import { Modal } from "antd";
import { Carousel } from 'react-responsive-carousel'

import { CircularProgress } from "@mui/material";

import axios from "axios";

const Shop = (data) => {
  const [showVisible, setShowVisible] = useState({});
  const [spVisible, setSpVisible] = useState(false);

  const [Shoes, setShoes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchShoes = () => {
    setIsFetching(true);
    axios
      .get("https://tiny-blue-wildebeest-shoe.cyclic.app/product/allproducts")
      .then((res) => {
        setShoes(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
        // You can display an error message to the user here if needed
      });
  };

  useEffect(() => {
    fetchShoes();
  }, []);
  return (
    <div className="shop-container">
      <Homelayout>
        <h1 className="title">SHOP WITH UMURINGA</h1>

        <div className="best-sellers">
          {isFetching ? (
            <center style={{ paddingTop: "100px", paddingLeft: "250px" }}>
              <CircularProgress />
            </center>
          ) : (
            <>
              {Shoes.map((shoe, Index) => (
                <div key={shoe.id} className="container">
                  
                  <div className="carousel">
                  <Carousel>
                      {shoe.productPicture.map((images) => (
                        
                          
                          
                          
                          <img src={images} />
                          
                      ))}
                      </Carousel>
                        
                     </div>
                  
                    {/* <img className="image" src={ketch.productPicture} /> */}
                   
                      <div className="text">
                        <a
                          href="#"
                          onClick={() => {
                            setShowVisible(shoe);
                            setSpVisible(true);
                          }}
                        >
                          {" "}
                          
                        </a>
                        {/* <span className='dot'><a><HeartOutlined /></a></span>
                                        <span className='dot'><a><ExpandOutlined /></a></span> */}
                      </div>
                   
                  <div className="description">
                  <p>{shoe.name}</p>
                  <p>{shoe.price}</p>
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
