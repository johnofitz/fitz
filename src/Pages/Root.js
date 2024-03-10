import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainNav from "../Components/Includes/MainNav";
import Footer from "../Components/Includes/Footer";
import "./Root.css";

const Root = () => {
  const [showFooter, setShowFooter] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     // Change the threshold as needed based on when you want to show the footer
  //     if (scrollPosition > 10) {
  //       setShowFooter(true);
  //     } else {
  //       setShowFooter(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
