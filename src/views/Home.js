import React from 'react'
import Homelayout from '../components/homeLayout'
import "./home.css"
import slay from "../assets/images/far.mp4"
import { HeartOutlined, ShoppingCartOutlined, ExpandOutlined } from '@ant-design/icons';
import { Carousel } from "antd";
import Shoes from "../assets/constants/sellers.json";
const Home = () => {
    return (
        <Homelayout>
            <div className='home-container'>
                <div className='anime'>
                    <video

                        src={slay}
                        muted
                        autoPlay
                        loop
                        style={{ height: "89vh", width: "100%", objectFit: 'cover' }}
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
                    {Shoes.map((ketch) => (


                        <div className="container">

                            <div className="overlay">
                                <Carousel autoplay>

                                    {ketch.image.map((images) => (
                                        <div> <img className="image" src={images} /></div>
                                    ))}
                                </Carousel>

                                <div className="middle">
                                    <div className="text-omitted">

                                        {/* <a>add cart</a> */}
                                        {/* <span className='dot'><a><ShoppingCartOutlined /></a></span>
                                        <span className='dot'><a><HeartOutlined /></a></span>
                                        <span className='dot'><a><ExpandOutlined /></a></span> */}

                                    </div>
                                </div>
                            </div>
                            <p>{ketch.productName}</p>
                            <p>{ketch.price}</p>
                        </div>
                    ))}
                </div>

            </div>
        </Homelayout>
    )
}
export default Home