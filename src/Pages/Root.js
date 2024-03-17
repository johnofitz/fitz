import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainNav from "../Components/Includes/MainNav";
import Footer from "../Components/Includes/Footer";
import "./Root.css";

const Root = () => {


  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
      {/* {showFooter && ( */}
        <footer>
          <Footer />
        </footer>
      {/* )} */}
    </>
  );
};

export default Root;
