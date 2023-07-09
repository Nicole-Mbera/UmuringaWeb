import React from "react";
import Homelayout from "../components/homeLayout";
import "./social.css";
import tyres from "../assets/images/tyres.jpg"
import background from "../assets/images/pure.jpg"
import ourStory from "../assets/images/story.jpg"
import Mission from "../assets/images/mission.jpg"
import vision from "../assets/images/vision.png"
import values from "../assets/images/value.png"
import visit from "../assets/images/visit.png"
import work from "../assets/images/work.png"
const Social = () => {
    return (

        <div className="social-container">
            <Homelayout>
            <div className="upperSection">
                    <div className="words">
                        <h1>UMURINGA FASHION CODE</h1>
                        <p>Make a unique character</p>
                        <p>as a star</p>

                    </div>
                    <div className="pic"><img src={background}></img></div>

                </div>
                <h3 style={{textAlign:"center", fontSize:"x-large", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>WHO ARE WE?</h3>
                <div className="lowerSection">
                    <div className="firstDiv">
                    <div className="pici"><img src={ourStory}></img></div>
                    <div className="paroles">
                        <h1>Our story</h1>
                       
                        <p>Umuringa fashion code started with three Ecole d’art de Nyundo AlumniloreLorem ipsum dolor sit amet, consectetur adipiscin bbhbnn Curabitur tempus quis odio vel imperdiet. Cras dui lorem ipsum.</p>
                        </div>
                    </div>

                    <div className="firstDiv">
            <div className="pici"><img src={vision} ></img></div>
                    <div className="paroles">
                        <h1>Our Vision</h1>
                        <p>To make people confident through fashion by promoting hand
                            made and artisticf ashion products and leading manufacturers of corporate give away fashion in Rwanda.</p>
                            </div>
                    </div>


                    


                    <div className="firstDiv">
                    <div className="pici"><img src={values}></img></div>

                    <div className="paroles">
                        <h1>Values</h1>
                        
                        <p >Our consumers receive exceptional items from us We
                            are committed to innovation and continual progress;
                            we strive to improve every single day. We work
                            together to achieve our mutual aims.</p>
                            </div>
                    </div>

                    <div className="firstDiv">
                    <div className="pici"><img src={Mission}></img></div>
                    <div className="paroles">
                        <h1>Mission</h1>
                        <p> We aim to provide solutions to satisfy our customer’s
                            needs by providing them artistic, quality, flexible yet
                            affordable  products, delivered on time.
                        </p>
                        </div>
                    </div>


                </div>

                <h3 style={{textAlign:"center", fontSize:"x-large", marginTop:"30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}> WHAT IS UMURINGA'S SOCIAL IMPACT?</h3>
                
                <div className="row">
                    <img src={visit}></img>
                    <div className="descriptive">
                        <h1>UMULINGA TRAINING PROGRAM</h1>
                        <p>In the spirit of giving back to the community, Umuringa Fashion code offers training to young people who are interested in art and design. We inspire youth to be proactive, problem solvers, self-reliant, and big thinkers. </p>
                        <p>
                            We teach our students creativity and innovation on how to use available resources, for instance, fabricating artistic skin made bags and footwear. That way, we train a generation of job providers, contributing significantly to the sustainable development of Rwanda.

                        </p>
                    </div>
                </div>


                <div className="rom">

                    <div className="descriptive">
                        <h1>UMULINGA IN EMVIRONMENTAL PROTECTION</h1>
                        <p>Every year, almost 1.5 billion tyres are discarded globally.
                            All those disposied old tires,
                            according to the environmental group EcoGreen, contain toxins and heavy metals that seep into the environment
                            as the tires degrade.some of these substances are carcinogenic and mutagenic, i.e. they can cause cancer and gene alterations.


                            Umuringa Fashion Code recycles nearly  five thousand tyres every year to make adorable footwear brands for Rwandese,
                            alongside mitigating Environmental degradation.
                        </p>

                    </div>
                    <img src={tyres}></img>
                </div>
                <div className="rowl">
                    <img src={tyres}></img>
                    <div className="descriptive">
                        <h1>UMULINGA IN EMVIRONMENTAL PROTECTION</h1>
                        <p>Every year, almost 1.5 billion tyres are discarded globally.
                            All those disposied old tires,
                            according to the environmental group EcoGreen, contain toxins and heavy metals that seep into the environment
                            as the tires degrade.some of these substances are carcinogenic and mutagenic, i.e. they can cause cancer and gene alterations.


                            Umuringa Fashion Code recycles nearly  five thousand tyres every year to make adorable footwear brands for Rwandese,
                            alongside mitigating Environmental degradation.
                        </p>
                    </div>


                </div>

                <div className="row">

                    <img src={work}></img>
                    <div className="descriptive">
                        <h1>YOUTH EMPLOYMENT OPPORTUNITY</h1>
                        <p>Rwanda is the luckiest country,
                            with more than half of the population
                            being young people in the labor force. Unfortunately,
                            the bulk of them, 23.8 percent, or over a quarter of the population,
                            are unemployed, calling for action.

                            Umulinga fashion Code pioneers is a group of youth
                            who resented those cycles of poverty and chose self-reliance,
                            who chose to be job providers rather than job seekers.
                        </p>
                        <p>
                            Though U-brand is still a start-up company, we are glad it became more
                            than an art club for three little students to earn  a living.
                            Now U-brand employs more than thirty young ladies and gents.

                        </p>

                    </div>



                </div>


            </Homelayout>
        </div>

    )
}

export default Social;