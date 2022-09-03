import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const {show, handleShow} = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >100 ? handleShow =true : handleShow=false;

    })
    return ()=>{
     
      
    };


  },[])
  return (
    <>
    <div className={`nav ${show && "nav__black"}` }>
    <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
     alt="logo Netflix" />

     <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
     
     </div>
    </>
    


    
  )
}

export default Nav