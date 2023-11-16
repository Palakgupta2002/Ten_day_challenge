import React, { useState, useEffect } from 'react';

const Analysis = () => {
  const [nutritionData, setNutritionData] = useState(null);
  const API_KEY = 'rXYzH55IQ9cOUf13CKmluA==ewkVf7OltEReWIVq';
  const foodItem = 'tomato'; // Replace with the food you want nutrition info for

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
    <div>
      <h2>Check What do You eat is healthy or not</h2>
      <input/>
      {nutritionData && nutritionData.items && nutritionData.items.length > 0 ? (
        <div>
          {Object.keys(nutritionData.items[0]).map((key, index) => (
            <p key={index}>
              {key}: {nutritionData.items[0][key]}
            </p>
          ))}
        </div>
      ) : (
        <p>No data available or error occurred.</p>
      )}
    </div>
  );
  
};

export default Analysis;
