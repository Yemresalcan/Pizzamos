import React from 'react';
import  '../styles/Footer.css'
import InsagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwiterIcon from "@mui/icons-material/Twitter"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       <InsagramIcon/> <FacebookIcon/> <LinkedInIcon/> <TwiterIcon/>
        <p>&copy; 2022 CopyRight DocSoft.com </p>
      </div>
    </div>
  )
}

export default Footer;