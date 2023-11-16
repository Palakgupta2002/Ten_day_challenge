import React, { useState } from 'react'
import "./Calculator.css"


const Calculator = () => {
    const [Heightimg,SetHeightimg]=useState("")
    return (
        <div  className='calculatorCont'>
            <span style={{color:"black"}}>BMI Calcultor</span>
            <div style={{display:'flex',columnGap:"30%"}}>
                <div>
                    <div className='Gender'>
                        <div><span>Gender</span></div>
                        <div className='GenderBtn'>
                            <div><button>Male</button></div>
                            <div><button>Female</button></div>
                        </div>
                    </div>
                    <div className='Width'>
                        <div>width</div>
                        <input type="number" min="0" placeholder='Enter Your Width in Cm' />

                    </div>
                </div>
                <div className='height'>
                  <img src=''/>
                </div>
            </div>
            <div style={{display:'flex'}}> 
                <div>bmi</div>
                <div>message</div>
            </div>
        </div>
    )
}

export default Calculator