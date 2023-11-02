import React from 'react'
import './Calculator.css';

const Calculator = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <div className='calculatorBox'>
            <div className='OutPutScreen'></div>
            <div className='Keypad'>
                <div className='Numbers' >
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>C</button>
                    <button>0</button>
                    <button>.</button>
                </div>
                <div className='Sign'>
                    <button style={{marginTop:"0px"}}>÷</button>
                    <button>×</button>
                    <button>-</button>
                    <button>+</button>
                    <button>%</button>

                </div>
            </div>
            <div className='CalFooter'>
                <button>Delete</button>
                <button>Equal</button>
            </div>
            
        </div>
    </div>
  )
}

export default Calculator