import React,{useState} from 'react';
import "./cart.css";
import { Carousel,Modal,notification } from 'antd';
import {WarningOutlined }from '@ant-design/icons'
import OrderDrawer from './drawer';



const openNotification = () => {
    notification.open({
      message: 'Ooops',
      description:
        'Online shopping is unavailable; contact umuringa to order manually.',
        className: 'custom-class',
        icon: (
            <WarningOutlined 
              style={{
                color: '#108ee9',
              }}
            />
          ),
    style: {
      width: 600,
      
    },
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

const Cart = ({ data }) => {
    
    return (

        <>

            <div className="Cart-container">
                <div>


                    <Carousel autoplay className='carousel'>
                        {data.image.map((image) => (
                            <img src={image} />
                        ))}

                    </Carousel>
                </div>
                
                <div className='descrip' >
                    <h3>{data.productName}</h3>
                    <p>{data.description}</p>
                    <p> Price: {data.price}  RWF </p>
                    <button className='button'><a href='#' onClick={openNotification}>order now</a></button>
                </div>

            </div>
            {/* <Modal visible={modalVisible} centered onOk={()=>setModalVisible(false)} onCancel={()=>setModalVisible(false)} footer={null}> iuiugiugiu</Modal> */}
        </>
    );

}
export default Cart;