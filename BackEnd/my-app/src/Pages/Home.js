import React from "react";
import Header from '../Components/Header';
import FooterHome from '../Components/FooterHome';
import Navbar from '../Components/Navbar';
import Botonconflecha from '../Components/Buttonconflecha';
import BotonHome from '../Components/ButoonHome';
function Home() {
  return (
    <div className="container">
    <div className="row"> 
    <Navbar/>
    <Header/>
    <Botonconflecha/>
    <FooterHome/>
    <BotonHome/>
    </div>
    </div>
  )
}
export default Home; 
  