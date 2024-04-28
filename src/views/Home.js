import React, { useEffect, useState } from "react";
import Homelayout from '../components/homeLayout'
import "./home.css"
import slay from "../assets/images/far.mp4"
import { Carousel } from 'react-responsive-carousel'
import Shoes from "../assets/constants/sellers.json";
import axios from 'axios'
import { CircularProgress } from "@mui/material";

const Home = () => {
        const [showVisible, setShowVisible] = useState({});
        const [spVisible, setSpVisible] = useState(false);
      
        const [products, setProducts] = useState([]);
        const [isFetching, setIsFetching] = useState(false);
      
        const fetchProducts = () => {
          setIsFetching(true);
          axios
            .get("https://tiny-blue-wildebeest-shoe.cyclic.app/sellers/allproducts")
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
        <Homelayout>
            <div className='home-container'>
                <div className='anime'>
                    <video

                        src={slay}
                        muted
                        autoPlay
                        loop
                        style={{ height: "89vh", width: "100%", objectFit: 'cover',backgroundPosition:'center center' }}
                    > something</video>
                </div>
                <div className='intro'>
                    <h1 className='title'>UMURINGA FASHION CODE</h1>
                    <p>Umuringa is an African arts inspired eco-friendly shoe and bags. Founded with a vision is to make Africans more confident through fashion by branding Africa as a derivation of artistic handmade fashion accessories. The social enterprise crafts viable solutions by recycling waste combined with veg-leather into functional footwear and stylish bag fashions.
                        Umuringa fashion code(U-brand) Strives to provide handmade stylish and affordable footwear and bags accessories for families from all backgrounds and walks of life.  Since 2018, the Made in Rwanda brand  has progressed with dedication to quality, comfort and excellent service for our customers.
                        We believe that youth have the aptitude to lead, work in different industries and deliver competitive results. We are working every day to create a space for youth so that they can feel empowered, work without harm, while also taking care of their families.
                    </p>
                </div>
                <h1 className='title'>BEST SELLERS</h1>

            

                <div className='best-sellers'>

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
                   
        
                  <div className="description">
                  <p>{product.name}</p>
                  <p>{product.price} RWF</p>
                  </div>
                </div>
              ))}
            </>
          )}
                </div>

            </div>
        </Homelayout>
    )
}
export default Home