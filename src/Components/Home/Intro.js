import Typewriter from "typewriter-effect";
import homeClass from "../../Pages/Home.module.css";

const Intro = () => {
  return (
    <>
      <div className={homeClass.el_1}>
      
          <Typewriter
            options={{
              strings: [
                "Hi, I'm John",
                "Full Stack Developer",
                "Open Source Contributor",
                "Using",
                "C#",
                "React",
                "Java",
              ],

              cursor: "_",
              autoStart: true,
      
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>

    </>
  );
};

export default Intro;
