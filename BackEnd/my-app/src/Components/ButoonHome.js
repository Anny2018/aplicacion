import React from 'react';
import {Link} from 'react-router-dom';

function BotonHome(){
    return(
        <div className="divButtonhome">
        <Link to="/Home" className="link"><button className="ButonHome"></button></Link>
        </div>
    )
}

export default BotonHome;