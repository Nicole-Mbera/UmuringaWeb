import React from "react";
import Homelayout from "../components/homeLayout";
import "./contact.css";
import {PhoneOutlined} from "@ant-design/icons";
import {EnvironmentOutlined} from "@ant-design/icons";
import {MailOutlined, InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Contact=()=>{
    return(
        <Homelayout>
            <div className="divcontiner">
            <div className="containerContactus">

         <h1 > Connect To Umuringa Fashion Code</h1>
         <div className="contactus">
             <div className="contact">
            <p > <PhoneOutlined /> :+250789532938</p>
             <a href="http://EnvironmentOutlined"> <p>  <EnvironmentOutlined /> :KG 549 st </p></a> 
             <a href="http://MailedOutlined.com"><p >   <MailOutlined /> :username@gmail.com</p></a>
<div className="social-media">
    <h1>stay in touch with us</h1>
    <br></br>
    <a href="https://www.instagram.com/umuringa_fashion_code/"> <InstagramOutlined /></a>
    <a href="https://www.facebook.com/anaclet.art/"> <FacebookOutlined /></a>
    <a><WhatsAppOutlined /></a>
</div>
             </div>
           <div className="comments">
               <form>        
                      <label for="Names">Names:</label> <br></br>
                      <input type="name"></input>
                      <hr></hr>
                      <label  for="Email">Email:</label> <br></br>
                      <input type="Email"></input>
                      <hr></hr>
                      <labe for="Phone">Phone</labe> <br></br>
                      <input type="phone"></input>
                      <hr></hr>
                      <label for="Type sms"> Type your Message here</label>
                       <br></br> <br></br>
                      <textarea style={{height:'18vh',width:'60%'}} id="sms" name="sms"></textarea>
                      <br></br> <br></br>
                  <button>send </button>
               </form> 
               </div>  
         </div>
         
         </div>
         </div>
         </Homelayout>
    )
}
export default Contact;
