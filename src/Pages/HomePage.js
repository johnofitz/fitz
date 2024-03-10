import Intro from "../Components/Home/Intro";
import classes from "./Home.module.css";
import "./Root.css";
const HomePage = () => {
  return (
    <>
      <div className={classes.container}>
        <Intro />
        <div className={classes.el_2}>
        <img
            className={classes.imageHome}
            src={require("../Assets/home.png")}
            alt="profile-img"
          />{" "}
        </div>
      </div>
    </>
  );
};
export default HomePage;
