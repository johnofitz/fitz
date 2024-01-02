
import Typewriter from "typewriter-effect";
import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <>
        <div className={classes.center}>
        <div className={classes.Typewriter__wrapper}>
        <Typewriter
          
          options={{
            strings: [
                "Full Stack Developer",
                "Open Source Contributor",
                "Using",
                "C#, Java, React",
                
            ],
            
            cursor: "_",
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        </div>
        </div>
        </>
      );
  };
  
  export default Intro;