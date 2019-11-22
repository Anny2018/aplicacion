import React from 'react';
import {Link} from 'react-router-dom';

function FooterHome (){
    return(
      <div className="Menufooter">
        <ul>
        <Link to="/Login" className="link">Login</Link>
        <Link to="/Create" className="link">Create User</Link>
      </ul>
      </div>
    )
}

export default FooterHome