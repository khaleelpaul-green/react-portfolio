import React from "react";
import image1 from '../imgs/Coding-vs-programming.jpg';

export default function Home () {
    return (
        <div class="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
            <img class="w3-image" src={image1} alt="Code" style={{ filter: "brightness(60%)", width: "1500px", height: "1000px" }} />
            <div class="w3-display-middle w3-margin-top w3-left">
                <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-normal"><b>Hey, I'm Khaleel.</b></span>
                    <br />
                    <span class="w3-hide-small w3-text-light-grey" style={{ fontWeight: "500" }}>
                        Web developer from Markham, Ontario. I create custom websites
                        and refactor existing ones.
                    </span>
                </h1>
            </div>
        </div>
    )
}