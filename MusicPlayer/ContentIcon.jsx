import React from 'react'
import { HomeOutlined } from "@ant-design/icons"
import { SearchOutlined } from "@ant-design/icons"
import "./MusicHome.css"

const ContentIcon = () => {
  return (
    <div className='IconBox'><div  >
    <div style={{ width: "100%" }}>
      <h3 className='IconStyle' >
        <div><HomeOutlined className='Home' /></div>
        <div>Home</div>
      </h3>
    </div>
    <div style={{ width:"100%" }}>
      <h3 className='IconStyle'>
      <div><SearchOutlined /></div>
      <div>Search</div>
      </h3>
    </div>
  </div></div>
  )
}

export default ContentIcon