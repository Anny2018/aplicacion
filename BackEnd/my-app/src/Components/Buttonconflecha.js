import React from 'react';
import {Link} from 'react-router-dom';

function Buttonconflecha (){
    return(
        <div className="App-flecha">
            <h3>Start browsing</h3>
            <center><Link to="/Login" className="link"><button className="Botonconnflecha"></button></Link></center>
        </div>
    )
}

export default Buttonconflecha;