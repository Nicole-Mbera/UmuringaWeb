import React from "react";
import Homelayout from "../components/homeLayout";
import "./impact.css"
import background from "../assets/images/pure.jpg"
import boss from "../assets/images/boss.png"
import manager from "../assets/images/manager.png"

const Impact = () => {
    return (

        <div className="impactContainer">
            <Homelayout>
                <div className="upperSection">
                    <div className="words">
                        <h1>UMURINGA FASHION CODE</h1>
                        <p>Make a unique character</p>
                        <p>as a star</p>

                    </div>
                    <div className="pic"><img src={background}></img></div>

                </div>

                <div className="lowerSection">
                    <div className="firstDiv">
                        <h1>Our story</h1>
                        <p>Umuringa fashion code started with 3 Ecole d’art de Nyundo AlumniloreLorem ipsum dolor sit amet, consectetur adipiscin bbhbnnCurabitur tempus quis odio vel imperdiet. Cras dui </p>
                    </div>

                    <div className="firstDiv">
                        <h1>Vision</h1>
                        <p>To make people confident through fashion by promoting hand
                            made and artisticf ashion products and leading manufacturers of corporate give away fashion in Rwanda.
                        </p>
                    </div>


                </div>

                <div className="lowerSection">
                    <div className="firstDiv">
                        <h1>Values</h1>
                        <p>Our consumers receive exceptional items from us We
                            are committed to innovation andcontinual progress;
                            we strivet o improve every single day. We work
                            together to achieve our mutual aims.</p>
                    </div>

                    <div className="firstDiv">
                        <h1>Mission</h1>
                        <p> We aim to provide solutions to satisfy our customer’s
                            needs by providing them artistic, quality, flexible yet
                            affordable  products, delivered on time.
                        </p>
                    </div>


                </div>

                <div className="artisan">
                    <h1>Meet the artisan</h1>
                    <div className="pic-region" >
                        <img src={boss}></img>
                        <img src={manager}></img>
                        <img src={boss}></img>
                    </div>
<div className="description">
    <h1> Anaclet Tuyishimire</h1>
    <h1>Grace Uwase</h1>
    <h1> Anaclet Tuyishimire</h1>
</div>
{/* <div className="description">
    <h1> Chief Executive Officer</h1>
    <h1>Management Director</h1>
    <h1> Marketing department manager</h1>
</div> */}
                </div>
            </Homelayout>
        </div>
    )
}
export default Impact;