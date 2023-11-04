import React from 'react'
import "../Components/Page3.css"
import Mobile from "../Assest/Mobile.jpg"
import DownloadPic from "../Assest/Pag3image.png"
import Downloadicon from "../Assest/downloadicon.gif"



const Page3 = () => {
  return (
    <div className='Page3' >
       <div className='Page3Gridient'>
      <div>
        <img width={"460px"} height={"360px"}  src={Mobile}></img>
        <div className='DownloadImage'>
          <div><img style={{paddingLeft:"20px",paddingTop:"12px"}} width={"54px"} src={DownloadPic}></img></div>
          <div style={{paddingTop:"20px",paddingLeft:"10px"}}>
          <div>Stranger Things</div>
          <div style={{color:"blue"}}>Downloading...</div>
          </div>
          <div>
          </div>
          <div><img className='Downloadicon' width={"68px"}  src={Downloadicon}/></div>
        </div>
      </div>
      <div style={{width:"500px",marginTop:"70px"}}>
        <div><h1 className='page3h1'>Download your shows <br></br> to watch offline</h1></div>
        <div><h1 className='page3h12'>Save your favourites easily and always have something to watch.</h1></div>
      </div>
      

      </div>
    </div>
  )
}

export default Page3