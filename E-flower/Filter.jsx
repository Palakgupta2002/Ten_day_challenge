import React from 'react'
import "./Filter.css"

const Filter = ({setfiltervalue}) => {
    const handlechange=(e)=>{
        
        setfiltervalue(e.target.value);
    }
    return (
        <div>
            <div className='ProductBox' >
                <div>
                    <h2>Filter</h2>
                    <h3>Flower Price</h3>
                    <div>
                        <input onChange={handlechange}  name="color" type="radio" value="100" />
                        <label>100</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="200" />
                        <label>200</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="300" />
                        <label>300</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="400" />
                        <label>400</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="500" />
                        <label>500</label>
                    </div>
                </div>


                <div><h3>Flower Color</h3>
                    <div>
                        <input onChange={handlechange} name="color" type="radio" value="red" />
                        <label>Red</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="blue" />
                        <label>Blue</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="yellow" />
                        <label>Yellow</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="green" />
                        <label>Green</label><br></br>
                        <input onChange={handlechange} name="color" type="radio" value="purple" />
                        <label>Purple</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter