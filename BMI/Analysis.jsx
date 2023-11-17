import React, { useState, useEffect } from 'react';
import "./Analysis.css"

const Analysis = () => {
  const [nutritionData, setNutritionData] = useState(null);
  const [foodItem,setsearch]=useState("Fruits");
  const API_KEY = 'rXYzH55IQ9cOUf13CKmluA==ewkVf7OltEReWIVq';
  const handlechange=(e)=>{
    const data=e.target.value
    setsearch(data)
    

  }

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data,"hello")
          
          setNutritionData(data);
        } else {
          // Handle error cases
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNutritionData();
  }, [foodItem, API_KEY]);

 // Existing code remains the same

return (
    <div className='main'>
      <h2>Check What do You eat is healthy or not</h2>
      <input className='search' type='text' onChange={handlechange} placeholder='Search here'/>
      {nutritionData && nutritionData.items && nutritionData.items.length > 0 ? (
  <div className='ingredients'>
    {Object.keys(nutritionData.items[0]).map((key, index) => {
      // Function to capitalize the first letter of each word and remove underscores
      const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

      return (
        <p className='itemdiv' key={index}>
          {formattedKey}: {nutritionData.items[0][key]}
        </p>
      );
    })}
  </div>
) : (
  <p>No data available or error occurred.</p>
)}

    </div>
  );
  
};

export default Analysis;
