import React from "react";
import github from '../imgs/GitHub-550x330.jpg';
import gmail from '../imgs/gmail-logo.jpg';
import linkedin from '../imgs/Linkedin-logo.jpg';

export default function Contact () {

    function test(event) {
      let msg = document.getElementById('message');
      let name = event.target.value
      msg.innerHTML = '';
      if (name === ''){
        msg.innerHTML = '<br>This field is required.';
        // alert('This field is required.');
      }
    } 

    return(
        <div class="w3-container w3-padding-32" id="contact">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form action="/action_page.php" target="_blank">
                <input class="w3-input w3-border" type="text" onBlur={test} placeholder="Name" required name="Name"/>
                <input class="w3-input w3-section w3-border" type="email" onBlur={test} placeholder="Email" required name="Email"/>
                <input class="w3-input w3-section w3-border" type="text" onBlur={test} placeholder="Subject" required name="Subject"/>
                <input class="w3-input w3-section w3-border" type="text" onBlur={test} placeholder="Message" required name="Message"/>
                <div id='message' style={{position:'relative', bottom:'35px'}}></div>
                <button class="w3-button w3-black w3-section" type="submit" formTarget='_self' >
                  <i class="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
            </form>
            <div class="w3-container w3-padding-32">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Links</h3>
            <p>Looking for more? Visit the links below to view a full list of my projects, as well as alternative ways to reach me for further discussion.</p>
            <div class="w3-row-padding">
              <div class="w3-col l3 m6 w3-margin-bottom">
                <img src={github} alt="Github" style={{width:"100%", height:"215px"}}/>
                <h3>GitHub</h3>
                <p class="w3-opacity">Project Repository</p>
                <p>Discover a full history of all of my projects up to date, including the code.</p>
                <a href="https://github.com/khaleelpaul-green">
                <p><button class="w3-button w3-light-grey w3-block">Go!</button></p>
                </a>
              </div>
              <div class="w3-col l3 m6 w3-margin-bottom">
                <img src={linkedin} alt="LinkedIn" style={{width:"100%", height: "235px"}}/>
                <h3>LinkedIn</h3>
                <p class="w3-opacity">Professional Profile</p>
                <p>Explore my professional profile.</p>
                <a href="https://www.linkedin.com/in/khaleelpaul-green">
                <p><button class="w3-button w3-light-grey w3-block">Go!</button></p>
                </a>
              </div>
              <div class="w3-col l3 m6 w3-margin-bottom">
                <img src={gmail} alt="Gmail" style={{width:"100%", height: "213px"}}/>
                <h3>Email</h3>
                <p class="w3-opacity">Message Me Directly</p>
                <p>Send me a direct message to begin the discussion right away.</p>
                <a href="mailto:khaleelpaulgreen.code@gmail.com" target="_top">
                <p><button class="w3-button w3-light-grey w3-block">Go!</button></p>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}