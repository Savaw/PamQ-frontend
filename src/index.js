console.log("PamQ © Savaw");

import './css/main.css';
import './css/navbar.css';
import './js/auth.js';
import './js/api.js';

let navbarHtml = 
`<a class="navbar-item" href="/">Home</a>
<a class="navbar-item" href="account/">Login/Signup</a>`;

let navbarDiv = document.createElement("div");
navbarDiv.id = "navbar";
navbarDiv.innerHTML = navbarHtml;

const body =  document.getElementsByTagName("body")[0];
body.insertBefore(navbarDiv,body.firstChild);