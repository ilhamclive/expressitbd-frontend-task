import React, { useRef } from "react";
import CreateProduct from "./Component/CreateProduct/CreateProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyOutlet from "./Component/Outlet/MyOutlet";
import Home from "./Component/Home/Home";
import Details from "./Component/Details/Details";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyOutlet/>}>
        <Route index element={<Home/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="create" element={<CreateProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
