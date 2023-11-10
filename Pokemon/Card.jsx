const Card = ({ pokedata, loading }) => {
    console.log(pokedata);
  
    return (
      <>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          pokedata.map((item, index) => (
            <div className='card' key={index}>
              <h1>{item.id}</h1>
              <img src={item.sprites.front_default} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))
        )}
      </>
    );
  };
  
  export default Card;
  