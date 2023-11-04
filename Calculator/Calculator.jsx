import React, { useState } from 'react'
import './Calculator.css';

const Calculator = () => {
    const [inputvalue,setinputvalue]=useState("");
    const handleEqual=()=>{
        try{
        const result = eval(inputvalue);
        setinputvalue(result)
        }
        catch(error){
            setinputvalue(error);
        }
        
    }
    const handleclear = () => {

        try {
          const result = inputvalue.toString().substring(0, inputvalue.length - 1);
          setinputvalue(result) 
        } catch (error) {
          setinputvalue(error);
        }
      }     
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <div className='calculatorBox'>
            <div className='OutPutScreen'><h3 className='inputvalue'>{inputvalue}</h3> </div>
            <div className='Keypad'>
                <div className='Numbers' >
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"1");
                    }}>1</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"2");
                    }}>2</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"3");
                    }}>3</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"4");
                    }}>4</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"5");
                    }}>5</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"6");
                    }}>6</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"7");
                    }}>7</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"8");
                    }}>8</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"9");
                    }}>9</button>
                    <button onClick={handleclear} >C</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"0");
                    }}>0</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+".");
                    }}>.</button>
                </div>
                <div className='Sign'>
                    <button style={{marginTop:"0px"}} onClick={()=>{
                        setinputvalue(inputvalue+"/");
                    }}>÷</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"*");
                    }}>×</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"-");
                    }}>-</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"+");
                    }}>+</button>
                    <button onClick={()=>{
                        setinputvalue(inputvalue+"%");
                    }}>%</button>

                </div>
            </div>
            <div className='CalFooter'>
                <button onClick={()=>{
                    setinputvalue("");
                }} >Delete</button>
                <button onClick={handleEqual}>Equal</button>
            </div>
            
        </div>
    </div>
  )
}

export default Calculator