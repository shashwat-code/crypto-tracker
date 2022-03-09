import "../style/Banner.css"
import Canvas from "./Canvas";
import Carousel from "./Carousel";

import TypeWriter from "./TypeWriter";

function Banner(){
    return(
        <div className="container">
            <Canvas />
            <img id="wallpaper" src="https://uploads-ssl.webflow.com/6139e071178ba7042629f424/61a62b3ef0879644f7d04a2f_dark_bg_big.png"/>
            <TypeWriter   />
            {/* <h1 id="typewriter"  style={{color:"red"}} >Shashwat singh chauhan</h1> */}
            <Carousel />
    </div>)
}

export default Banner

/*
TODO:
1.> add canvas interactive
2.> add tagline animation
*/