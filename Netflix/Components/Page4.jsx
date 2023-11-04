import React from 'react'
import Image from "../Assest/Background3.png"
import TVgif from "../Assest/TVgif2.gif"

import "../Components/Page4.css"


const Page4 = () => {
  return (
    <div >
      <div className='Page4Gridient'>
        <div className='text'>
      <div><h1 className='Page4h1'>Watch everywhere</h1></div>
      <div><h4 className='Page4h4'>Stream unlimited movies and TV shows on <br></br> your phone, tablet, laptop, and TV.</h4></div>
      </div>
    <div >
      <div>
        <div > <img style={{zIndex:"1000"}}  width={"430px"} src={Image}/></div>
        <div className='gif2'><img  height={"130px"} width={"270px"} src={TVgif}></img></div>
      </div>
     
      
      
     
      </div>
    </div>
    </div>
    
    
  )
}

export default Page4