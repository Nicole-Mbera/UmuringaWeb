import React,{useState}from "react";
import Homelayout from "../components/homeLayout";
import "./shop.css";
import Cart from "./cart";
import { Carousel ,Modal} from "antd";
import { HeartOutlined, ShoppingCartOutlined, ExpandOutlined } from '@ant-design/icons'
import Shoes from "../assets/constants/shop.json";


const Shop = (data) => {
    const [showVisible,setShowVisible]=useState({})
    const [spVisible,setSpVisible]=useState(false)
    return (
        <div className="shop-container">
            <Homelayout>
                <h1>Shop with Umuringa</h1>
                
                <div className='best-sellers'>
                    {Shoes.map((ketch) => (


                        <div className="container">

                            <div className="overlay">
                                <Carousel autoplay>
                                  
                                    {ketch.image.map((images)=>(
                               <div> <img className="image" src={images}/></div>
                            ))} 
                                </Carousel>

                                <div className="middle">
                                    <div className="text">


                                        <a href="#" onClick={()=>{
                                            setShowVisible(ketch);
                                            setSpVisible(true)
                                           
                                        }}> Order</a>
                                        {/* <span className='dot'><a><HeartOutlined /></a></span>
                                        <span className='dot'><a><ExpandOutlined /></a></span> */}

                                    </div>
                                    
                                </div>
                            </div>
                            <p>{ketch.productName}</p>
                            <p>{ketch.price}</p>
                        </div>
                    ))}
                    
                    <Modal width="850px" centered visible={spVisible} onOk={()=>setSpVisible(false)} onCancel={()=>setSpVisible(false)}>
                      <Cart  data={showVisible}/>
                    </Modal>
                   
                </div>
                
               

            </Homelayout>

        </div>
    )

}
export default Shop;