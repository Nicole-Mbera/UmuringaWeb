import React from "react";
import "./menu.css"

const Menu = () => {

    // const collapsible = document.getElementsByClassName("collapsible")

    // for (let i = 0; i < collapsible.length; i++) {
    //     collapsible[i].addEventListener("click", function () {
    //         this.classList.toggle("activeColl")
    //         let content = this.nextElementSibling

    //         if (content.style.display === 'block') {
    //             content.style.display = ''
    //         } else {
    //             content.style.display = 'block'
    //         }
    //     }

    //     )
    // }
    return (

        <div className="menu-container">
            <a href="/Home"> Home </a>
            <hr></hr> <br></br>
            {/* <a href="/shop">Categories</a> */}
            
            <a href="/impact">About us</a>
            
            <hr></hr> <br></br> 
            {/* <button type="button" class="collapsible">Categories</button>
            <hr></hr> <br></br>
            <div class="content">

                <a>foot wear</a>
                <br></br> <br></br>
                <a>artistic bags</a>
                <br></br> <br></br>

            </div> */}
            <a href="/Shop">shoes</a>
            <hr></hr> <br></br>
            <a href="/Contact">Contact us</a>
            <hr></hr> <br></br>
        </div>
    )


}
export default Menu;