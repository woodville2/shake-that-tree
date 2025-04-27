
"use strict";


export function navbar() {  
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    navbar.innerHTML = `
        <div class="navbar-brand">
            <a href="#" class="navbar-item">My Website</a>
        </div>
        <div class="navbar-menu">
            <a href="#" class="navbar-item">Home</a>
            <a href="#" class="navbar-item">About</a>
            <a href="#" class="navbar-item">Contact</a>
        </div>
    `;
    return navbar;
}