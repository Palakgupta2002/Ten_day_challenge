import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav' style={{display:"flex",justifyContent:"space-between",padding:'20px',backgroundColor:"lightblue"}}>
        <div className='NavContentLogo'>Mumma'sFaV</div>
        <div className='NavContent' style={{display:"flex",columnGap:"40px"}}>
            <div>Home</div>
            <div>Discover</div>
            <div>About Us</div>
        </div>
    </div>
  )
}

export default Nav