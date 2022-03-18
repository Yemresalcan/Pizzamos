import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import  '../styles/Navbar.css'
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {

const [openLinks, setOpenLinks] = useState(false)
const toggleNavbar =() =>{

  setOpenLinks(!openLinks);
}


  return (
    <div className='navbar'>
      <div className="leftSide" id ={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
    
      </div>
     
      <div className="rightSide"></div>
      <Link to="/">Anasayfa</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">Hakkında</Link>
      <Link to="/contact">İletişim</Link>
      <button onClick={toggleNavbar}>
        <ReorderIcon/>
      </button>
      </div>
    </div>
  );
}

export default Navbar