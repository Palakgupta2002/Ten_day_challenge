import React from 'react'
import TVgif from "../Assest/Children.png"
import "../Components/Page5.css"

const Page5 = () => {
  return (
    <div>
      <div className='Page5Gridient'>
        <div><img src={TVgif} width={"500px"}></img></div>
        <div>
          <div>
            <h1 style={{fontSize:'50px'}} >Create profiles for<br></br> kids</h1>   
          </div>
          <div>
            <h4 style={{fontSize:"20px",marginTop:"-20px",fontWeight:"400"}}>Send children on adventures with their<br></br> favourite characters in a space made just for<br></br> them—free with your membership.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5