import React from "react";
import MyHeader from "../Header/MyHeader";
import MyFooter from "../Footer/MyFooter";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function MyOutlet() {
  return (
    <div className="h-screen">
      <MyHeader />
      <main>
        <Outlet />
      </main>
      <MyFooter />
      <ToastContainer />
    </div>
  );
}

export default MyOutlet;
