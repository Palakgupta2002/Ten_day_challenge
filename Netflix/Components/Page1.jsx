import React from 'react'
import './Page1.css';
import Logo from "../Assest/Logo1.png"
import {RightOutlined} from "@ant-design/icons"


const Page1 = () => {
  return (
    <div className='Page1'>
      <div className='Page1Gridient'>
        <div className='Header'>
          <div className='Logodiv'><img width={"180px"} src={Logo} /></div>
          <div className='Selectdiv' style={{display:"flex",columnGap:"40px"}}>
            <div  >
              <select className='SelectLang'>
                <option>English</option>
                <option>हिंदी</option>
              </select>
            </div>
            <div><button className='Button'>Sign Out</button></div>
          </div>
        </div>
        <div style={{marginTop:"140px"}}>
        <div><h3 style={{fontSize:"30px",fontWeight:"300"}}>Welcome Back</h3></div>
        <div><h1 style={{fontSize:"50px",marginTop:"-20px",marginBottom:"-10px"}}>The biggest Indian hits. The best Indian <br></br> stories. 
          All streaming here.</h1></div>
        <div><h2 style={{fontSize:"30px",fontWeight:"300"}}>Watch anywhere. Cancel anytime.</h2></div>
        <div><button style={{fontSize:"30px"}} className='Button'>Finish sign Up <RightOutlined/></button></div>
        </div>
       
      </div>

    </div>
  )
}

export default Page1