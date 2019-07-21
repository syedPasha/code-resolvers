import React from 'react';

const NavigationBar = () =>{
    return(
        <>
            <nav id="navbar">
                <h1 class="logo">
                <span class="text-primary">
                    <i class="fas fa-book-open"></i> Code</span>Resolvers
                </h1>
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#what">What</a></li>
                <li><a href="#who">Who</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}
export default NavigationBar;