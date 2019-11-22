import React from 'react';
import Logo1 from '../Img/Mytinerarylogo.jpg'
function Header(){
    return(
        <div className="App-header">
        <img src={Logo1} className="App-logo" alt="logo" />
        <p>Find your perfect trip, designed by insiders who know and love their cities</p>
        </div>
    )
}

export default Header