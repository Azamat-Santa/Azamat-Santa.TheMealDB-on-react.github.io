import React from 'react'

import '../../App.css'
import logo from '../../img/logo.png'
import NavbarHeader from './NavbarHeader';

export default function header({  name,changeName, send}) {
    
    
    return (
        <div className='headerBanner'>
            <NavbarHeader 
                  name={name}
                  changeName={changeName}
                  send={send}
            />

           <div className='sliderLogo'><img src={logo} alt='logo'/></div> 
           <div className='sliderText'>Recipe for every taste </div>
           
        </div>
    )
}
