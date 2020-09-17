console.log("PamQ © Savaw");

import './css/main.css';
import './css/navbar-footer.css';
import './css/auth.css';
import './js/auth.js';
import './js/api.js';


const pageContainer =  document.getElementById("page-container");


// Navbar
let navbarHtml = `
<a class="navbar-item" href="/">Home</a>
<a class="navbar-item" href="account/">Login/Signup</a>
`;

let navbarDiv = document.createElement("nav");
navbarDiv.id = "navbar";
navbarDiv.innerHTML = navbarHtml;

pageContainer.insertBefore(navbarDiv,pageContainer.firstChild);


// Footer
let footerHtml = `
    PamQ <br/>
    Savaw © 2020
  `;

let footerDiv = document.createElement("footer");
footerDiv.id = "footer";
footerDiv.innerHTML = footerHtml;
pageContainer.appendChild(footerDiv)