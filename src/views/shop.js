import React, { useEffect, useState } from "react";
import Homelayout from "../components/homeLayout";
import "./shop.css";
import Cart from "./cart";
import { Carousel, Modal } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  ExpandOutlined,
} from "@ant-design/icons";
import { CircularProgress } from "@mui/material";
import Shoes from "../assets/constants/shop.json";
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
        <h1>Shop with Umuringa</h1>

        <div className="best-sellers">
          {isFetching ? (
            <center style={{ paddingTop: "100px", paddingLeft: "250px" }}>
              <CircularProgress />
            </center>
          ) : (
            <>
              {products.map((ketch, Index) => (
                <div className="container">
                  <div className="overlay">
                    <Carousel autoplay>
                      {ketch.productPicture.map((images) => (
                        <div>
                          {" "}
                          <img className="image" src={images} />
                        </div>
                      ))}
                    </Carousel>
                    {/* <img className="image" src={ketch.productPicture} /> */}
                    <div className="middle">
                      <div className="text">
                        <a
                          href="#"
                          onClick={() => {
                            setShowVisible(ketch);
                            setSpVisible(true);
                          }}
                        >
                          {" "}
                          Order
                        </a>
                        {/* <span className='dot'><a><HeartOutlined /></a></span>
                                        <span className='dot'><a><ExpandOutlined /></a></span> */}
                      </div>
                    </div>
                  </div>
                  <p>{ketch.name}</p>
                  <p>{ketch.price}</p>
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
