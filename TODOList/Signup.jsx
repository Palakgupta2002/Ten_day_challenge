import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

 const Signup = () => {
  const navigate =useNavigate();
  const [user, setUser] = useState({
    username: "",
    profilePhoto: null, // This will store the data URL of the profile photo
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the user object to a JSON string and store it in localStorage
    if(user!==""){
    localStorage.setItem("userInfo", JSON.stringify(user));
    navigate("/")
    }

  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

    if (name === 'profilePhoto' && value) {
      // Convert the selected file to a data URL (base64)
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser({
          ...user,
          [name]: e.target.result,
        });
      };
      reader.readAsDataURL(value);
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  return (
    <div className='SignUpPage'>
      <div className='SignUpBox'>
      <h1 style={{marginLeft:"60px"}}>Create Profile</h1><br></br>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            name='username'
            type='text'
            placeholder='Enter Your name'
            value={user.username}
            onChange={handleChange}
          />
          <label>Profile Photo</label>
          <input
            name='profilePhoto'
            type='file'
            onChange={handleChange}
          />
          <button className='signbutton' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};
export  default Signup;
