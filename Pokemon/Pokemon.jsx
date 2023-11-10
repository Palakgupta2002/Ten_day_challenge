import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  const [data, setData] = useState([]); // Initialize as an array

  const getData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const dataFormat = await response.json();
      setData(dataFormat.results); // Assuming you want to map over the 'results' array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((ele, index) => (
        
        <div key={index}>
            <img src={ele.url}></img>
          <h1>{ele.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
