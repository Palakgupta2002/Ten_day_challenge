import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <div className='NavContainer'>
            <div className='uppercont'>
                <div><span>Home</span></div>
                <div><span>Profile</span></div>
                <div><span>About</span></div>
            </div>
            <div className='logoutCon'>
                <div>LogOut</div>
            </div>
        </div>
    )
}

export default Nav