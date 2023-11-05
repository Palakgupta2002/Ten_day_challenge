import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import "./TODO.css"
import Home from './Home';

const TODO = () => {
  const navigate=useNavigate();
  const auth = JSON.parse(localStorage.getItem("userInfo"));
    let homeRouteElement = auth !== "" && auth!==null ? < Home/> : <Signup />;
  return (
    <div>
      <nav>
        <div className='MainNav'>
          <div style={{fontFamily:"cursive",fontSize:'30px'}}>Todo List</div>
          <div className='NavItem'>
          
          </div>
        </div>
        {homeRouteElement}
      </nav>
      
    </div>
  )
}

export default TODO;
