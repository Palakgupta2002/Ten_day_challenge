import React from 'react'
import Nav from './Nav'
import Calculator from './Calculator'
import Analysis from './Analysis'

const Main = () => {
  return (
    <div style={{display:"flex",columnGap:"5%",marginTop:"3%"}}>
        <div style={{width:"8%"}}><Nav/></div>
        <div style={{width:"40%"}}><Calculator/></div>
        <div><Analysis/></div>
    </div>
  )
}

export default Main