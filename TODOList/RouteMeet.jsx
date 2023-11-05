import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import TODO from "./TODO";
import Home from "./Home";



const RouteMeet = () => {
  const auth = JSON.parse(localStorage.getItem("userInfo"));
  
  // Conditionally set the element based on the value of 'auth'
  
  // let homeRouteElement = auth !== "" && auth!==null ? <CreateTask /> : <Signup />;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<TODO />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMeet;
