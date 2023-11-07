import React from 'react'
import "./MusicHome.css"
import ContentIcon from './ContentIcon'
import CreateLib from './CreateLib'
import PlayList from './PlayList'

const MusicHome = () => {
  
  return (
    <div style={{display:"flex",color:"gray",columnGap:"3%"}}>
      <div>
        <ContentIcon/>
        <div><CreateLib/></div>
      </div>
      <div style={{width:"72%"}}><PlayList/></div>
    </div>
  )
}

export default MusicHome