import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link',  "w3-bar-item w3-button"}
            style={currentPage === 'Home' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
          ><b>Khaleel</b> Paul-Green</a>
          {/* <!-- Float links to the right. Hide them on small screens --> */}
          <div class="w3-right w3-hide-small">
            <a href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Projects' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Projects</a>
            <a href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'About' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >About</a>
            <a href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Contact' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Contact</a>
            <a href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Resume' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
