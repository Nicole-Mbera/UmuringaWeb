import React from "react"
import "./order.css"
import Homelayout from "../components/homeLayout"

const Order =()=>{
    return(
   
   <div>
     <Homelayout>
 
 <h2 style={{textAlign:"center"}}> Shopping cart</h2>
 <div className="order-container">

    <div className="ItemSummary">
    <h2 className="title"> Item Summary </h2>
        <table className="table">
        
            <tr className="tr">
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            
            <td>
                <div className="Itemimage">
                    <img src='https://res.cloudinary.com/umuringa-fashion-code/image/upload/v1656499633/kitenge_wejqpk.jpg'></img>
                </div>
            </td>
            <td>
                 <span className="name"> U-IX Tank</span>
            </td>
            <td>
                <span className="Price"> 5000 FRW </span>
            </td>
            <td>
                
            </td>
            <td>
                <span className="Total"> 10000 FRW</span>
            </td>
        </table>
    </div>

    <div className="OrderSummary">
       <div className="wrapper">
           <h2 className="title"> Order Summary </h2>
           <div className="totalText">
           <b className="totalTextTitle"> SubTotal: </b> 5000Rwf
           </div>
           <div className="totalText">
           <b className="totalTextTitle"> Total: </b> 5000Rwf
           </div>
           <button className="button"> Check out now </button>
       </div>

       <div className='payment'>
           <h1>Payment Mode</h1>
           <div className='paymentMode'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4R2axjwQunV2nGElO3w-8229pYbPIEr7XLB0w7B8BeJHP5YYo3T33Ivlxo38VBIlrAg&usqp=CAU"/>
           <img src="https://dv-website.s3.amazonaws.com/uploads/2012/02/visa_logo.jpg"/>
           <img src="https://i.pinimg.com/736x/20/13/94/2013943e8598d750da10aa05c6052efd--mastercard-gift-card-unsecured-credit-cards.jpg"/>
           <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1422/2021/06/25111410/WU_RangedLogo_black.png"/>
           
          
          

           </div>
       </div>
    </div>
 </div>
 </Homelayout>
   </div>
     )
     }
     
     export default Order;
   