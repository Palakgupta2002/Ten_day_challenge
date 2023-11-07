import React from 'react'
import "./PlayListNav.css"
import {ArrowLeftOutlined, ArrowRightOutlined, BellOutlined } from "@ant-design/icons"

const PlayListNav = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{display:"flex",columnGap:"20px"}}>
        <div ><button className='PlaylistArrow' style={{fontSize:"20px"}}><ArrowLeftOutlined/></button></div>
        <div ><button className='PlaylistArrow' style={{fontSize:"20px"}}><ArrowRightOutlined/></button></div>
      </div>
      <div style={{display:"flex",columnGap:"30px"}}>
        <div><button className='PremiumButton'>Explore Premium</button></div>
        <div><button className='PremiumButton'>install App</button></div>
        <div><h2 style={{marginTop:"4px"}}><BellOutlined/></h2></div>
        <div style={{fontSize:"25px"}}>Profile</div>
      </div>
    </div>
  )
}

export default PlayListNav