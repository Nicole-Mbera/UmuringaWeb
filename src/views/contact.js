import React from "react";
import Homelayout from "../components/homeLayout";
import "./contact.css";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { FormGroup, Button, TextareaAutosize, Input } from '@mui/material';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, LinkedinOutlined,PhoneOutlined } from "@ant-design/icons";

const Contact = () => {
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
                                <h2><EmailSharpIcon></EmailSharpIcon> umuringabrand@fashion.com</h2>
                                <h2> <LocalPhoneRoundedIcon></LocalPhoneRoundedIcon> +250787735301</h2>
                                
                                <div className="social">
                {/* <h1>stay connected</h1> */}
                <a href="https://www.facebook.com/anaclet.art/"><FacebookOutlined /></a>
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><WhatsAppOutlined /></a>
                </div>
                            </div>
                        </div>

                        <div className="comments">
                            <FormGroup className="form">
                                <Input placeholder="Name" style={{ marginTop: "20px" }} />
                                <Input placeholder="Email" style={{ marginTop: "20px" }} />
                                <Input placeholder="Telephone" style={{ marginTop: "20px" }} />

                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Type your message"

                                    style={{ height: "20vh", marginTop: "35px" }}
                                />
                                <br></br>
                                <Button variant="contained" href="#"
                                    style={{
                                        width: 150,
                                        color: "black",
                                        backgroundColor: "grey ",
                                        border: "none",
                                        borderRadius: "10px",
                                    }}
                                >
                                    Send
                                </Button>

                            </FormGroup>

                        </div>
                    </div>

                </div>
               
           
            </Homelayout>
    )
}
export default Contact;
