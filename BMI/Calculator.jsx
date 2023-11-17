import React, { useState } from 'react';
import "./Calculator.css";
import Boy from "./Assest/Boy.png";
import Girl from "./Assest/Girl.png";

const Calculator = () => {
    const [Heightimg, SetHeightimg] = useState(Boy);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const calculateBMI = () => {
        const heightInMeters = height / 100; // converting height to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
    };

    const interpretBMI = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        else if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
        else if (bmi >= 25 && bmi < 30) return 'Overweight';
        else return 'Obese';
    };

    const handleCalculate = () => {
        if (weight > 0 && height > 0) {
            const bmiResult = calculateBMI();
            setMessage(` ${bmiResult}, ${interpretBMI(parseFloat(bmiResult))}`);
        } else {
            setMessage('Please enter valid weight and height.');
        }
    };

    const [message, setMessage] = useState('Enter Entities');

    return (
        <div className='calculatorCont'>
            <div className='heading'>
            <span style={{ color: "white",fontSize:"30px",fontWeight:"600" }}>BMI Calculator</span>
            </div>
            <div style={{ display: 'flex', columnGap: "30%" }}>
                <div>
                    <div className='Gender'>
                        <div><span>Gender</span></div>
                        <div className='GenderBtn'>
                            <div><button onClick={() => { SetHeightimg(Boy) }} >Male</button></div>
                            <div><button onClick={() => { SetHeightimg(Girl) }} >Female</button></div>
                        </div>
                    </div>

                    <div className='Width'>
                        <div>Weight</div>
                        <div>
                            <input className='weightinput' type="number" min="0" placeholder='Enter Your Weight in KG' value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='height'>
                    <span>Height</span>
                    <img width={"180px"} height={"230px"} src={Heightimg} alt="Gender" />
                    <input type='number' placeholder='Enter Height in CM' value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
            </div>
            <button className='Calculatebtn' onClick={handleCalculate}>Calculate BMI</button>
            <div style={{ display: 'flex' }}>
                <div><h2>Your BMI:- {message} </h2></div>
                <div></div>
            </div>
           
        </div>
    );
};

export default Calculator;
