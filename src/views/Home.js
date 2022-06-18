import React from 'react'
import Homelayout from '../components/homeLayout'
import "./home.css"
import red from "../assets/images/red.jpg";
import thread from "../assets/images/chocolate.jpg";
import chocolate from "../assets/images/shoe.jpg"
import { HeartOutlined, ShoppingCartOutlined, ExpandOutlined } from '@ant-design/icons'
const Home = () => {
    return (
        <Homelayout>
            <div className='home-container'>
                <div className='anime'>
                    <h2> Manufacturing Video </h2>
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

                    <div className="container">

                        <div className="overlay">
                            <img className="image" src={thread} />
                            <div className="middle">
                                <div className="text">


                                    <a><ShoppingCartOutlined /></a>
                                    <a><HeartOutlined /></a>
                                    <a><ExpandOutlined /> </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">

                        <div className="overlay">
                            <img className="image" src={red} />
                            <div className="middle">
                                <div className="text">


                                    <a><ShoppingCartOutlined /></a>
                                    <a><HeartOutlined /></a>
                                    <a><ExpandOutlined /> </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="overlay">
                            <img className="image" src={chocolate} />
                            <div className="middle">
                                <div className="text">


                                    <a><ShoppingCartOutlined /></a>
                                    <a><HeartOutlined /></a>
                                    <a><ExpandOutlined /> </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Homelayout>
    )
}
export default Home