import React from "react";
import notetaker from '../imgs/note-taker-ss-1.jpg';
import generator from '../imgs/team-generator-ss.jpg';
import blog from '../imgs/tech-blog-ss.jpg';
import fitness from '../imgs/fitness-tracker.jpg';
import budget from '../imgs/budget-tracker.JPG';
import ecommerce from '../imgs/e-commerce-backend.jpg';

export default function Projects () {
    return (
        <div>
        <div class="w3-container w3-padding-32" id="projects">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>
        <div class="w3-row-padding">
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/new-note-taker">Note Taker</a></div>
                        <a href="https://kpg-note-taker.herokuapp.com/">
                            <img src={notetaker} alt="Note Taker" style={{width:"100%"}}/>
                        </a>
                    </div>
                </div>
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/team-generator">Team Generator</a></div>
                        <a href="https://www.youtube.com/watch?v=uBVId_s-kL0">
                            <img src={generator} alt="Team Generator" style={{width:"100%"}} />
                        </a>
                    </div>
                </div>
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/tech-blog">Tech Blog</a></div>
                        <a href="https://thawing-anchorage-96948.herokuapp.com/">
                            <img src={blog} alt="The Tech Blog" style={{width:"100%"}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w3-row-padding">
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/fitness-tracker">Fitness Tracker</a></div>
                        <a href="https://kpg-fitness-tracker.herokuapp.com/">
                            <img src={fitness} alt="Fitness Tracker" style={{width:"100%"}}/>
                        </a>
                    </div>
                </div>
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/budget-tracker">Budget Tracker</a></div>
                        <a href="https://kpg-budget-tracker.herokuapp.com/">
                            <img src={budget} alt="Budget Tracker" style={{width:"100%"}}/>
                        </a>
                    </div>
                </div>
                <div class="w3-col l4 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding"><a href="https://github.com/khaleelpaul-green/ecommerce-backend">E-Commerce Backend</a></div>
                        <a href="https://www.youtube.com/watch?v=gSFzuKZZeqc">
                            <img src={ecommerce} alt="E-Commerce Backend" style={{width:"100%"}}/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
    );
}
