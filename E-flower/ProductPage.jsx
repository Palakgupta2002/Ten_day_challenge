import React, { useEffect } from 'react'
import "./Product.css"
import img1 from "./Assest/1.jpeg"
import img2 from "./Assest/2.jpeg"
import img3 from "./Assest/3.jpeg"
import img4 from "./Assest/4.jpeg"
import img5 from "./Assest/5.jpeg"
import img6 from "./Assest/6.jpeg"
import img7 from "./Assest/cornation.jpeg"
import img8 from "./Assest/8.jpeg"
import img9 from "./Assest/24.jpeg"
import img10 from "./Assest/10.jpeg"
import img11 from "./Assest/11.jpeg"
import img12 from "./Assest/12.jpeg"
import img13 from "./Assest/13.jpeg"
import img14 from "./Assest/14.jpeg"
import img15 from "./Assest/15.jpeg"
import img16 from "./Assest/16.jpeg"
import img17 from "./Assest/17.jpeg"
import img18 from "./Assest/18.jpeg"
import img19 from "./Assest/19.jpeg"
import img20 from "./Assest/20.jpeg"
import img21 from "./Assest/21.jpeg"
import img22 from "./Assest/22.jpeg"
import img23 from "./Assest/23.jpeg"
import img24 from "./Assest/24.jpeg"
import img25 from "./Assest/25.jpeg"
import img26 from "./Assest/26.jpeg"
import img27 from "./Assest/27.jpeg"
import img28 from "./Assest/28.jpeg"
import { useState } from 'react'
import { Button, Modal } from 'antd';
import { json } from 'react-router-dom'


const ProductPage = ({ filtervalue,searchvalue }) => {
    const [filteredFlower, setFilteredFlower] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [CartValue,setCartValue]=useState([]);
    const [ReadData, SetReadData] = useState({})
    const flower = [
        {
            flower_name: "Rose",
            "flower_desc": "A symbol of love and affection.",
            "flower_image": img1,
            "flower_color": "Red",
            "rate_per_kg": 100,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Tulip",
            "flower_desc": "Known for its elegant and simple beauty.",
            "flower_image": img2,
            "flower_color": "Yellow",
            "rate_per_kg": 200,
            "quantity_kg": 0.4
        },
        {
            flower_name: "Lily",
            "flower_desc": "Symbolizes purity and refined beauty.",
            "flower_image": img3,
            "flower_color": "White",
            "rate_per_kg": 300,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Daisy",
            "flower_desc": "Represents innocence and purity.",
            "flower_image": img4,
            "flower_color": "White",
            "rate_per_kg": 400,
            "quantity_kg": 0.7
        },
        {
            flower_name: "Sunflower",
            "flower_desc": "Known for its bright and cheery appearance.",
            "flower_image": img5,
            "flower_color": "Yellow",
            "rate_per_kg": 500,
            "quantity_kg": 0.8
        },
        {
            flower_name: "Orchid",
            "flower_desc": "Symbolizes love, beauty, and strength.",
            "flower_image": img6,
            "flower_color": "Purple",
            "rate_per_kg": 100,
            "quantity_kg": 0.3
        },
        {
            flower_name: "Carnation",
            "flower_desc": "Represents love and fascination.",
            "flower_image": img7,
            "flower_color": "Pink",
            "rate_per_kg": 200,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Daffodil",
            "flower_desc": "Symbolizes new beginnings and rebirth.",
            "flower_image": img8,
            "flower_color": "Yellow",
            "rate_per_kg": 300,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Peony",
            "flower_desc": "Represents good fortune and happiness.",
            "flower_image": img9,
            "flower_color": "Pink",
            "rate_per_kg": 400,
            "quantity_kg": 0.4
        },
        {
            flower_name: "Iris",
            "flower_desc": "Symbolizes faith, hope, and courage.",
            "flower_image": img10,
            "flower_color": "Blue",
            "rate_per_kg": 500,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Hyacinth",
            "flower_desc": "Known for its sweet fragrance.",
            "flower_image": img11,
            "flower_color": "Purple",
            "rate_per_kg": 100,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Marigold",
            "flower_desc": "Symbolizes passion and creativity.",
            "flower_image": img12,
            "flower_color": "Orange",
            "rate_per_kg": 200,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Chrysanthemum",
            "flower_desc": "Represents joy and optimism.",
            "flower_image": img13,
            "flower_color": "Yellow",
            "rate_per_kg": 300,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Gladiolus",
            "flower_desc": "Symbolizes strength of character.",
            "flower_image": img14,
            "flower_color": "Red",
            "rate_per_kg": 400,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Crocus",
            "flower_desc": "Known for its delicate beauty.",
            "flower_image": img15,
            "flower_color": "Purple",
            "rate_per_kg": 500,
            "quantity_kg": 0.3
        },
        {
            flower_name: "Anemone",
            "flower_desc": "Symbolizes anticipation and excitement.",
            "flower_image": img16,
            "flower_color": "Red",
            "rate_per_kg": 100,
            "quantity_kg": 0.4
        },
        {
            flower_name: "Aster",
            "flower_desc": "Represents patience and elegance.",
            "flower_image": img17,
            "flower_color": "Blue",
            "rate_per_kg": 200,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Cosmos",
            "flower_desc": "Known for its ordered beauty.",
            "flower_image": img18,
            "flower_color": "Pink",
            "rate_per_kg": 300,
            "quantity_kg": 0.7
        },
        {
            flower_name: "Hibiscus",
            "flower_desc": "Symbolizes beauty and fame.",
            "flower_image": img19,
            "flower_color": "Red",
            "rate_per_kg": 400,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Zinnia",
            "flower_desc": "Represents thoughts of friends.",
            "flower_image": img20,
            "flower_color": "Yellow",
            "rate_per_kg": 500,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Dahlia",
            "flower_desc": "Known for its striking and vibrant appearance.",
            "flower_image": img21,
            "flower_color": "Orange",
            "rate_per_kg": 100,
            "quantity_kg": 0.5
        },
        {
            flower_name: "Snapdragon",
            "flower_desc": "Symbolizes strength and grace.",
            "flower_image": img22,
            "flower_color": "Yellow",
            "rate_per_kg": 200,
            "quantity_kg": 0.4
        },
        {
            flower_name: "Lavender",
            "flower_desc": "Known for its soothing fragrance.",
            "flower_image": img23,
            "flower_color": "Purple",
            "rate_per_kg": 300,
            "quantity_kg": 0.4
        },
        {
            flower_name: "Bougainvillea",
            "flower_desc": "Symbolizes passion and beauty.",
            "flower_image": img24,
            "flower_color": "Pink",
            "rate_per_kg": 400,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Pansy",
            "flower_desc": "Represents loving thoughts.",
            "flower_image": img25,
            "flower_color": "Blue",
            "rate_per_kg": 500,
            "quantity_kg": 0.7
        },
        {
            flower_name: "Poppy",
            "flower_desc": "Known for its vivid and cheerful appearance.",
            "flower_image": img26,
            "flower_color": "Red",
            "rate_per_kg": 100,
            "quantity_kg": 0.6
        },
        {
            flower_name: "Forget-Me-Not",
            "flower_desc": "Symbolizes true love and memories.",
            "flower_image": img27,
            "flower_color": "Blue",
            "rate_per_kg": 200,
            "quantity_kg": 0.5
        }

    ]
    
    const handleCart = (index) => {
        // const selectedFlower = flower[index];
        alert("Your product succesfully Added into cart")
        // Update the cart state by adding the selected flower
        const updatedCart = [...CartValue, index];
        setCartValue(updatedCart);
        // Save the updated cart in local storage
        localStorage.setItem("CartData", JSON.stringify(updatedCart));
    };
   
    
    
    

    useEffect(() => {
        let updatedFlower = [...flower];

        if (filtervalue) {
          updatedFlower = updatedFlower.filter((ele) => {
            return (
              ele.flower_color.toLowerCase() === filtervalue.toLowerCase() ||
              ele.rate_per_kg.toString() === filtervalue
            );
          });
        }

        if (searchvalue) {
          updatedFlower = updatedFlower.filter(
            (ele) =>
              ele.flower_name.toLowerCase().includes(searchvalue.toLowerCase()) ||
              ele.flower_desc.toLowerCase().includes(searchvalue.toLowerCase())
          );
        }
        setFilteredFlower(updatedFlower);
      }, [filtervalue, searchvalue]);
      const showModal = () => {
        setIsModalOpen(true);
    
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleRead = (index) => {
        const data = flower[index]; // Access the recipe by index
        SetReadData(data);
        showModal();
    
      }
      
    return (
        <div className='ProductPage'>
            {filteredFlower.map((ele, index) => (
                <div className='ProductCard' key={index}>
                    <img style={{ borderRadius: '15px', marginTop: "10px" }} width={"100%"} height={"180px"} src={ele.flower_image} />
                    <h2>{ele.flower_name}</h2>
                    <h2>{ele.flower_color}</h2>
                    <div className='FlowerBtn' style={{ display: 'flex', justifyContent: "space-between" }}>
                        <button onClick={()=>handleCart(ele)} >Add to cart</button>
                        <button  type="primary"  onClick={() => handleRead(index)}  >More</button>
                        <Modal
                 
                 open={isModalOpen}
                 onOk={handleOk}
                 onCancel={handleCancel}
                 mask={false}
               >
                <div className='ReadBox' >
                 <img width={"100%"} height={"400px"} src={ReadData.flower_image}></img>
                 <h2>
                  Flower Name :- {ReadData.flower_name}
                 </h2>
                <h4> Flower Color :-{ReadData.flower_color}</h4>
                <h4>Flower Desc:-{ReadData.flower_desc}</h4>
                <h4> Flower Rate per Kg:-{ReadData.rate_per_kg}</h4>
                <h4></h4>
                
                </div>
                
               </Modal>
                    </div>
                </div>
            ))}



        </div>


    )
}

export default ProductPage