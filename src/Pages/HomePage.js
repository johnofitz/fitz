import Intro from "../Components/Home/Intro"
import './Root.css'
const HomePage =()=>{

    return(
        <>
         {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}
        <body className="backsplash">
        <Intro />
        </body>
        </>
    )
}
export default HomePage;