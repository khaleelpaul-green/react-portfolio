import React from "react";
import resume from '../downloads/real-dev-resume.pdf';

export default function Resume () {
    return (
        <div class="w3-container w3-padding-32">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Resume</h3>
            <p>Download my <a href={resume} download="Resume" style={{textDecoration:'none'}}><b>resume</b></a>.</p>

            <h4><b>Front End Proficiencies:</b></h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>jQuery</li>
            </ul>

            <h4><b>Back End Proficiencies:</b></h4>
            <ul>
                <li>API</li>
                <li>MySQL + Sequalize</li>
                <li>MongoDB + Mongoose</li>
                <li>Node</li>
                <li>Express</li>
                <li>REST</li>
                <li>Graphql</li>
            </ul>
        </div>
    )
}