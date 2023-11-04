import React from 'react'
import TV from "../Assest/TV.png"
import "../Components/Page2.css"
import TVgif from "../Assest/TVgif.gif"

const Page2 = () => {
  return (
    <div className='Page2'>
      <div className='Page2Gridient'>
        
      <div className='TextDivPage2'>
        <h1 className='H1'>Enjoy on your TV</h1>
        <h6 className='H6'>Watch on smart TVs, PlayStation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players and<br></br> more.</h6>
      </div>
      <div style={{marginRight:"100px"}}>
        <img  width={"500px"} src={TV} />
        <img className='gif' src={TVgif} style={{position:'absolute',marginLeft:"-432px",background:"transparent",marginTop:"80px"}} width={"360px"}></img>
        </div>
      </div>
    </div>
  )
}

export default Page2;