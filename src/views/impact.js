import React from "react";
import Homelayout from "../components/homeLayout";
import "./impact.css"
import background from "../assets/images/pure.jpg"
import goals from "../assets/images/book.jpg"
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
<div className="puzzled">
<h1>Our Story</h1>
<div className="draw">
<img src={goals} className="profilePicture"/>
</div>

                        
                        <p>To make people confident through fashion by promoting hand
                            made and artisticf ashion products and leading manufacturers of corporate give away fashion in Rwanda.
                        </p>
                        
                    </div>
                <div className="lowerSection">
                    <div className="firstDiv">
                        <h1>Our story</h1>
                        <p>Umuringa fashion code started with three Ecole d’art de Nyundo AlumniloreLorem ipsum dolor sit amet, consectetur adipiscin bbhbnn Curabitur tempus quis odio vel imperdiet. Cras dui lorem ipsum.</p>
                    </div>

                    <div className="firstDiv">
                        <h1>Our Vision</h1>
                        <p>To make people confident through fashion by promoting hand
                            made and artisticf ashion products and leading manufacturers of corporate give away fashion in Rwanda.</p>
                    </div>


                
                    <div className="firstDiv">
                        <h1>Values</h1>
                        <p>Our consumers receive exceptional items from us We
                            are committed to innovation and continual progress;
                            we strive to improve every single day. We work
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




                </div>


                {/* <img src={boss}></img>
                <img src={manager}></img>
                <img src={boss}></img> */}

            </Homelayout>
        </div>
    )
}
export default Impact;