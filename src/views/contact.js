import React from "react";
import Homelayout from "../components/homeLayout";
import "./contact.css";
import { FormGroup, Button, TextareaAutosize, Input } from '@mui/material';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, LinkedinOutlined, } from "@ant-design/icons";

const Contact = () => {
    return (
        <Homelayout>
            <div className="divcontiner">
                <div className="containerContactus">

                    <h1 > Connect To Umuringa Fashion Code</h1>
                    <div className="contactus">
                        <div className="contact">
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4752058145896!2d30.07272301410464!3d-1.963717837292537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca67b9ea3dd83%3A0x1b295c480bdc2c03!2sGroupe%20Scolaire%20Mburabuturo!5e0!3m2!1sen!2srw!4v1656508596394!5m2!1sen!2srw" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                            </div>
                            <div className="social-media">
                                <h1>Umuringa Fashion, Kigali Gikondo, Rwanda</h1>
                                <h1>tel:+250787735301</h1>
                                <h1>umuringabrand@fashion.com</h1>
                                <div style={{ paddingLeft: "110px" }}>
                                    <a href="https://www.instagram.com/umuringa_fashion_code/" className="circum"> <InstagramOutlined /></a>
                                    <a href="https://www.facebook.com/anaclet.art/" className="circum"> <FacebookOutlined /></a>
                                    <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw" className="circum"><LinkedinOutlined /></a>
                                    <a href="https://web.whatsapp.com/" className="circum"><WhatsAppOutlined /></a>
                                </div>
                            </div>
                        </div>
                        <div className="comments">
                            <FormGroup style={
                                { width: "450px", marginTop: "45px" }
                            }>
                                <Input placeholder="Name" style={{ marginTop: "20px" }} />
                                <Input placeholder="Email" style={{ marginTop: "20px" }} />
                                <Input placeholder="Telephone" style={{ marginTop: "20px" }} />

                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Type your message"
                                    
                                    style={{ width: 450, height:"20vh", marginTop: "35px" }}
                                />

                                <Button variant="contained" href="#"
                                style={{ width: 150, marginTop: "30px",
                                color: "black",
                                backgroundColor:  "grey ",
                                height: "5.5vh",
                                border:"none",
                                width: "130px",
                                borderRadius:"10px" ,
                                marginLeft: "72%" }}
                                >
                                    Send
                                </Button>
                            </FormGroup>
                        </div>
                    </div>

                </div>
            </div>
        </Homelayout>
    )
}
export default Contact;
