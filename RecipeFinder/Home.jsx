import React from 'react'
import HomeImage from "./Assest/HomeImage2.jpg"
import "./Home.css"
import Curry from "./Assest/Curry.jpg"
import img2 from "./Assest/2.jpg"
import img3 from "./Assest/3.jpg"
import img4 from "./Assest/4.jpg"
import img5 from "./Assest/5.jpg"
import img6 from "./Assest/6.jpg"
import img7 from "./Assest/7.jpg"
import img8 from "./Assest/8.jpg"
import img9 from "./Assest/9.jpg"
import img10 from "./Assest/10.jpg"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Modal } from 'antd';
import { useState } from 'react'
import { json } from 'react-router-dom'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenR, setIsModalOpenR] = useState(false);
  const [ReadData, SetReadData] = useState({})
  const [AddRecipe,SetAddRecipe]=useState([]);
  

  const showModal = () => {
    setIsModalOpen(true);

  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalR = () => {
    setIsModalOpenR(true);

  };

  const handleOkR = () => {
    setIsModalOpenR(false);
  };

  const handleCancelR = () => {
    setIsModalOpenR(false);
  };


  const Receipes = [

    {
      "recipeName": "Vegetable Curry",
      'recipeImage': Curry,
      "ingredients": [
        "2 cups mixed vegetables (e.g., potatoes, carrots, peas)",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 can (400g) diced tomatoes",
        "2 tablespoons curry powder",
        "1 cup coconut milk",
        "Salt and pepper to taste"
      ],
      "description": "A flavorful and aromatic vegetable curry with a rich coconut sauce."
    },
    {
      "recipeName": "Spinach and Mushroom Quesadillas",
      'recipeImage': img2,
      "ingredients": [
        "2 large tortillas",
        "2 cups fresh spinach leaves",
        "1 cup sliced mushrooms",
        "1 cup shredded cheese",
        "1/2 teaspoon cumin",
        "Salt and pepper to taste"
      ],
      "description": "Cheesy quesadillas filled with sautéed spinach and mushrooms."
    },
    {
      "recipeName": "Lentil Soup",
      'recipeImage': img3,
      "ingredients": [
        "1 cup dried red lentils",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 cloves garlic, minced",
        "1 teaspoon cumin",
        "6 cups vegetable broth",
        "Salt and pepper to taste"
      ],
      "description": "Hearty and nutritious red lentil soup with a hint of cumin."
    },
    {
      "recipeName": "Mushroom Risotto",
      'recipeImage': img4,
      "ingredients": [
        "1 cup Arborio rice",
        "1 cup mushrooms, sliced",
        "1/2 cup white wine",
        "4 cups vegetable broth",
        "1/2 cup grated Parmesan cheese",
        "1 small onion, minced",
        "2 cloves garlic, minced"
      ],
      "description": "Creamy and savory risotto with sautéed mushrooms."
    },
    {
      "recipeName": "Chickpea and Spinach Curry",
      'recipeImage': img5,
      "ingredients": [
        "2 cans (400g each) chickpeas, drained and rinsed",
        "4 cups fresh spinach leaves",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 teaspoons curry powder",
        "1 can (400g) diced tomatoes",
        "1 cup coconut milk",
        "Salt and pepper to taste"
      ],
      "description": "A healthy and flavorful curry with chickpeas and fresh spinach."
    },
    {
      "recipeName": "Vegetarian Chili",
      'recipeImage': img6,
      "ingredients": [
        "2 cans (400g each) black beans, drained and rinsed",
        "1 can (400g) diced tomatoes",
        "1 cup corn kernels",
        "1 bell pepper, diced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 teaspoons chili powder",
        "Salt and pepper to taste"
      ],
      "description": "Hearty and spicy vegetarian chili with beans and veggies."
    },
    {
      "recipeName": "Quinoa Salad",
      'recipeImage': img7,
      "ingredients": [
        "2 cups cooked quinoa",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1/2 cup red onion, finely chopped",
        "1/4 cup fresh parsley, chopped",
        "Juice of 1 lemon",
        "2 tablespoons olive oil",
        "Salt and pepper to taste"
      ],
      "description": "A refreshing and nutritious quinoa salad with veggies and lemon dressing."
    },
    {
      "recipeName": "Stuffed Bell Peppers",
      'recipeImage': img8,
      "ingredients": [
        "4 bell peppers",
        "1 cup cooked rice",
        "1 cup black beans, drained and rinsed",
        "1 cup corn kernels",
        "1/2 cup grated cheese",
        "1/2 cup tomato sauce",
        "1/2 teaspoon cumin",
        "Salt and pepper to taste"
      ],
      "description": "Bell peppers stuffed with a flavorful mixture of rice, beans, and cheese."
    },
    {
      "recipeName": "Eggplant Parmesan",
      'recipeImage': img9,
      "ingredients": [
        "2 large eggplants, sliced",
        "2 cups marinara sauce",
        "1 cup mozzarella cheese, grated",
        "1/2 cup Parmesan cheese, grated",
        "1 cup breadcrumbs",
        "2 eggs",
        "1/4 cup fresh basil leaves",
        "Salt and pepper to taste"
      ],
      "description": "Crispy and cheesy eggplant slices in a marinara sauce."
    },
    {
      "recipeName": "Vegetable Stir-Fry",
      'recipeImage': img10,
      "ingredients": [
        "2 cups mixed vegetables (e.g., broccoli, bell peppers, carrots)",
        "200g tofu, cubed",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 teaspoon ginger, grated",
        "Salt and pepper to taste"
      ],
      "description": "Quick and healthy stir-fried vegetables with tofu."
    },


    {
      "recipeName": "Curry",
      'recipeImage': Curry,
      "ingredients": [
        "2 cups mixed vegetables (e.g., potatoes, carrots, peas)",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 can (400g) diced tomatoes",
        "2 tablespoons curry powder",
        "1 cup coconut milk",
        "Salt and pepper to taste"
      ],
      "description": "A flavorful and aromatic vegetable curry with a rich coconut sauce."
    },
    {
      "recipeName": "Spinach and Mushroom Quesadillas",
      'recipeImage': img2,
      "ingredients": [
        "2 large tortillas",
        "2 cups fresh spinach leaves",
        "1 cup sliced mushrooms",
        "1 cup shredded cheese",
        "1/2 teaspoon cumin",
        "Salt and pepper to taste"
      ],
      "description": "Cheesy quesadillas filled with sautéed spinach and mushrooms."
    },
    {
      "recipeName": "Lentil Soup",
      'recipeImage': img3,
      "ingredients": [
        "1 cup dried red lentils",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 cloves garlic, minced",
        "1 teaspoon cumin",
        "6 cups vegetable broth",
        "Salt and pepper to taste"
      ],
      "description": "Hearty and nutritious red lentil soup with a hint of cumin."
    },
    {
      "recipeName": "Mushroom Risotto",
      'recipeImage': img4,
      "ingredients": [
        "1 cup Arborio rice",
        "1 cup mushrooms, sliced",
        "1/2 cup white wine",
        "4 cups vegetable broth",
        "1/2 cup grated Parmesan cheese",
        "1 small onion, minced",
        "2 cloves garlic, minced"
      ],
      "description": "Creamy and savory risotto with sautéed mushrooms."
    },
    {
      "recipeName": "Chickpea and Spinach Curry",
      'recipeImage': img5,
      "ingredients": [
        "2 cans (400g each) chickpeas, drained and rinsed",
        "4 cups fresh spinach leaves",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 teaspoons curry powder",
        "1 can (400g) diced tomatoes",
        "1 cup coconut milk",
        "Salt and pepper to taste"
      ],
      "description": "A healthy and flavorful curry with chickpeas and fresh spinach."
    },
    {
      "recipeName": "Vegetarian Chili",
      'recipeImage': img6,
      "ingredients": [
        "2 cans (400g each) black beans, drained and rinsed",
        "1 can (400g) diced tomatoes",
        "1 cup corn kernels",
        "1 bell pepper, diced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 teaspoons chili powder",
        "Salt and pepper to taste"
      ],
      "description": "Hearty and spicy vegetarian chili with beans and veggies."
    },
    {
      "recipeName": "Quinoa Salad",
      'recipeImage': img7,
      "ingredients": [
        "2 cups cooked quinoa",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1/2 cup red onion, finely chopped",
        "1/4 cup fresh parsley, chopped",
        "Juice of 1 lemon",
        "2 tablespoons olive oil",
        "Salt and pepper to taste"
      ],
      "description": "A refreshing and nutritious quinoa salad with veggies and lemon dressing."
    },
    {
      "recipeName": "Stuffed Bell Peppers",
      'recipeImage': img8,
      "ingredients": [
        "4 bell peppers",
        "1 cup cooked rice",
        "1 cup black beans, drained and rinsed",
        "1 cup corn kernels",
        "1/2 cup grated cheese",
        "1/2 cup tomato sauce",
        "1/2 teaspoon cumin",
        "Salt and pepper to taste"
      ],
      "description": "Bell peppers stuffed with a flavorful mixture of rice, beans, and cheese."
    },
    {
      "recipeName": "Eggplant Parmesan",
      'recipeImage': img9,
      "ingredients": [
        "2 large eggplants, sliced",
        "2 cups marinara sauce",
        "1 cup mozzarella cheese, grated",
        "1/2 cup Parmesan cheese, grated",
        "1 cup breadcrumbs",
        "2 eggs",
        "1/4 cup fresh basil leaves",
        "Salt and pepper to taste"
      ],
      "description": "Crispy and cheesy eggplant slices in a marinara sauce."
    },
    {
      "recipeName": "Vegetable Stir-Fry",
      'recipeImage': img10,
      "ingredients": [
        "2 cups mixed vegetables (e.g., broccoli, bell peppers, carrots)",
        "200g tofu, cubed",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 teaspoon ginger, grated",
        "Salt and pepper to taste"
      ],
      "description": "Quick and healthy stir-fried vegetables with tofu."
    },

  ]
  const handleRead = (index) => {
    const data = Receipes[index]; // Access the recipe by index
    SetReadData(data);
    showModalR();

  }
  console.log(ReadData, "Read me");
  const handleSubmitRecipe = (e) => {
    e.preventDefault();
  
    const recipeName = e.target.recipeName.value;
    const recipeImage =  URL.createObjectURL( e.target.recipeImage.files[0]); 
    const ingredients = e.target.ingredients.value; 
    const description = e.target.description.value; 
    console.log(e.target.recipeImage.files[0],"hello")

  
    const newRecipe = {
      recipeName,
      recipeImage,
      ingredients,
      description,
    };
  
    // Update the state with the new recipe
    SetAddRecipe([...AddRecipe, newRecipe]);
  
    // Update local storage with the updated state
    localStorage.setItem('recipes', JSON.stringify([...AddRecipe, newRecipe]));
  
    e.target.reset();
  };
  const RecipesAdded = JSON.parse(localStorage.getItem('recipes'));
  console.log(RecipesAdded,"hello")
  
  

  return (
    <div >
      <div className='HomeImage'><div></div></div>
      <div className='Upperimage'></div>
      <div className='SearchBox'><input type='text' placeholder='Search Your Receipe' /></div>
      <div className='AfterNav'>
        <>
          <Button className='PlusButton' type="primary" onClick={showModal}>
            Add Yours <PlusOutlined />
          </Button>
          <Modal style={{ display: "flex", justifyContent: "center" }} title=" Add Yours Recipe" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div>
              <form onSubmit={handleSubmitRecipe}>
                <label>Recipe Name</label>
                <input className='input' type='text'  name="recipeName" ></input><br></br>
                <label>Recipe Image</label>
                <input className='input' type='file' name="recipeImage"></input><br></br>
                <label>ingredients</label>
                <input className='input' type='text' name='ingredients'></input><br></br>
                <label>Description</label>
                <input className='input' type='text' name='description'></input><br></br>
                <button className='AddButton' type='submit'>Add</button>
              </form>
            </div>
          </Modal>
        </>
        <h1>Our Recipes</h1>
      </div>

      <div className='RecipeBox' style={{ color: "gray" }}>
        {
          Receipes.map((ele, index) => (
            <div className='ReceipeCard' key={index}>
              <img width={"300px"} height={"200px"} src={ele.recipeImage}></img>
              <h2>
                {ele.recipeName}
              </h2>
              <div className='cardButtonBox' >
                <div >
                  <button className="ant-btn" onClick={() => handleRead(index)} type="primary"   >Read</button>
                  <Modal
                 
                  open={isModalOpenR}
                  onOk={handleOkR}
                  onCancel={handleCancelR}
                  mask={false}
                >
                 <div className='ReadBox' >
                  <img src={ReadData.recipeImage}></img>
                  <h2>
                    {ReadData.recipeName}
                  </h2>
                 <h4>{ReadData.ingredients}</h4>
                 <h4>{ReadData.description}</h4>
                 </div>
                 
                </Modal>
                </div>
                <div>
                  <button>Like</button>
                </div>
              </div>
            </div>

          ))
        }

      </div>
      <h2 style={{marginLeft:"4%"}}>Added By the Client</h2>
     <div className='ClientBox'>
     {
 Array.isArray(RecipesAdded) && RecipesAdded.length  > 0 ? (
    RecipesAdded.map((ele, index) => (
      <div className='ReceipeCard' key={index}>
        <img width={"300px"} height={"200px"} src={ele.recipeImage} alt={ele.recipeName} />
        <h2>{ele.recipeName}</h2>
        <div className='cardButtonBox'>
          <div>
          <button >Read</button>
          </div>
          <div>
          <button>Like</button>
          </div>
        </div>
      </div>
      
    ))
  ) : (
    <p>No data added yet</p>
  )
}


     </div>
    </div>

  )
}

export default Home