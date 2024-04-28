import React, { useEffect, useState } from "react";
import axios from "axios";
import Homelayout from "../components/homeLayout";
import "./contact.css";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { Button, Upload, Input, Form, message as antdMessage} from "antd";
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, LinkedinOutlined,PhoneOutlined } from "@ant-design/icons";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
  
    const handleMessage = async (e) => {
      e.preventDefault();
      console.log(name, email, telephone, message);
  
      axios
        .post("https://tiny-blue-wildebeest-shoe.cyclic.app/message/SendMessage", {
          name,
          email,
          telephone,
          message,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setTelephone("");
          setMessage("");
          antdMessage.success({
            content: "Message sent successfully!",
            style: { marginTop: "20px" }, // Adjust the styling
          });
        })
        .catch((error) => {
          console.log(error);
          antdMessage.error({
            content: "Message sending failed. Please try again later.",
            style: { marginTop: "20px" }, // Adjust the styling
          });
        });
    };
    return (
        <Homelayout>
               
                <div className="containerContactus">

                    <h2 > Connect to Umuringa Fashion Code</h2>
                    <div className="contactus">
                        <div className="contact">
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4752058145896!2d30.07272301410464!3d-1.963717837292537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca67b9ea3dd83%3A0x1b295c480bdc2c03!2sGroupe%20Scolaire%20Mburabuturo!5e0!3m2!1sen!2srw!4v1656508596394!5m2!1sen!2srw" allowfullscreen="" loading="lazy" ></iframe>
                            </div>
                            <div className="social-media">
                                <h2><LocationOnSharpIcon></LocationOnSharpIcon> Umuringa Fashion, Kigali Gikondo, Rwanda</h2>
                                <h2><EmailSharpIcon></EmailSharpIcon> umuringafashion@gmail.com</h2>
                                <h2> <LocalPhoneRoundedIcon></LocalPhoneRoundedIcon> +250787735301</h2>
                                
                                <div className="sociale">
                {/* <h1>stay connected</h1> */}
                <a href="https://www.facebook.com/anaclet.art/"><FacebookOutlined /></a>
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><WhatsAppOutlined /></a>
                </div>
                            </div>
                        </div>

                        <div className="comments">
                        <Form>
          <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                placeholder="name"
                style={{ padding: "10px", width: "70%", marginTop:"10px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="email"
                style={{ padding: "10px", width: "70%", marginTop:"10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="telephone"
              rules={[
                {
                  required: true,
                  message: "Please input telephone!",
                },
              ]}
            >
              <Input
                placeholder="telephone"
                style={{ padding: "10px", width: "70%", marginTop:"10px" }}
                value={telephone} 
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Form.Item>
            
            <Form.Item name="message">
              <Input
                placeholder="message"
                style={{ padding: "10px", width: "70%", marginTop: "10px" }}
                value={message} // Display the array as comma-separated strings
                onChange={(e) => setMessage(e.target.value)} // Split the string into an array of strings
              />
            </Form.Item>

            {/* ...other form items */}
            
            <Button type="primary" htmlType="submit" onClick={handleMessage} style={{ marginTop: "20px", padding: "10px",
        color: "black",
        backgroundColor: "grey",
        border: "none",
        width: "130px",
        borderRadius: "10px",
    }}>
              Submit
            </Button>
          </Form>

                        </div>
                    </div>

                </div>
               
           
            </Homelayout>
    )
}
export default Contact;
