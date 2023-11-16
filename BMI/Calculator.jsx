import React, { useState } from 'react'
import "./Calculator.css"
import Boy from "./Assest/Boy.png"


const Calculator = () => {
    
    const [Heightimg,SetHeightimg]=useState(Boy)
    return (
        <div  className='calculatorCont'>
            <span style={{color:"black"}}>BMI Calcultor</span>
            <div style={{display:'flex',columnGap:"30%"}}>
                <div>
                    <div className='Gender'>
                        <div><span>Gender</span></div>
                        <div className='GenderBtn'>
                            <div><button onClick={()=>{SetHeightimg(Boy)}} >Male</button></div>
                            <div><button >Female</button></div>
                        </div>
                    </div>
                    
                    <div className='Width'>
                        <div>Weight</div>
                        <div>
                        <input type="number" min="0" placeholder='Enter Your Weight in KG' />
                        <div></div>
                        </div>

                    </div>
                </div>
                <div className='height'>
                    <span>Height</span>
                  <img width={"180px"} height={"230px"} src={Heightimg}/>
                  <input type='Number' placeholder='Enter Height in CM'/>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div><h2>Your BMI </h2></div>
                <div>message</div>
            </div>
        </div>
    )
}

export default Calculator