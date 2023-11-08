import React from 'react';

const Cart = () => {
  const data = JSON.parse(localStorage.getItem('CartData')) || [];
  
  const handleBuy = () => {
    alert("Your items have been successfully placed.");
  };

  const handleRemove = (index) => {
    // Remove the item from the cart in local storage
    const updatedCartData = data.filter((_, i) => i !== index);
    localStorage.setItem('CartData', JSON.stringify(updatedCartData));

    // Update the data state with the updated cart
    data.splice(index, 1);
  };

  return (
    <div>
      <div>
        {data.length > 0 ? (
          <div className='ProductPage'>
            {data.map((item, index) => (
              <div className='ProductCard' key={index}>
                {/* Display the item details */}
                <img width={"100%"} height={"190px"} src={item.flower_image} alt={item.flower_name} />
                <h5>{item.flower_name}</h5>
                <h3>{item.flower_color}</h3>
                <p>Price: ${item.rate_per_kg}</p>
                <p>Quantity: {item.quantity_kg} kg</p>
                <p>{item.flower_desc}</p>

                {/* Add Buy Now and Remove buttons */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button onClick={handleBuy} className='cartbtn'>Buy Now</button>
                  <button onClick={() => handleRemove(index)} className='cartbtn'>Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
