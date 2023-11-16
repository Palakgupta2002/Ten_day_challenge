import React from 'react'
import Nav from './Nav'
import Calculator from './Calculator'

const Main = () => {
  return (
    <div style={{display:"flex",columnGap:"5%"}}>
        <div style={{width:"8%"}}><Nav/></div>
        <div style={{width:"30%"}}><Calculator/></div>
        <div></div>
    </div>
  )
}

export default Main