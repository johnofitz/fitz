import { Outlet } from "react-router-dom";
import MainNav from "../Components/Includes/MainNav";
import Footer from "../Components/Includes/Footer";
import "./Root.css";

const Root = () => {
  return (
    <>
      <MainNav />
      <main >
        <Outlet />  
      </main>
      <Footer/>
    </>
  );
};

export default Root;
