import React from "react";
import avatar from '../imgs/github-avatar.jpg';
import resume from '../downloads/real-dev-resume.pdf';

export default function About () {
    return(
        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About Me</h3>
                <img src={avatar} alt='Github avatar' style={{float:'left', boxShadow:'5px 5px 5px grey'}}/>
                <p style={{position:'relative', left:'15px', top:'95px', lineHeight:'1.5'}}> 
                    I am a web developer from Markham, Ontario. I am capable of creating dynamic custom front-end websites from scratch using Handlebars, CSS, Node, Javascript. I can also
                    perform back-end tasks such as accessing servers using APIs, constructing my own APIs, creating servers that utilizes the APIs that I have made, and manipulating the data 
                    gathered into whatever I need. To get a better idea of what I can do, check out my 
                    <b><a href={resume} target='_self' download="Resume" style={{textDecoration:'none'}}> resume</a></b> that highlights some of my best work.
                </p>
        </div>
    )
}