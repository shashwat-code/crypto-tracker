import "../style/Banner.css"
import Canvas from "./Canvas";
import Carousel from "./Carousel";

import TypeWriter from "./TypeWriter";

function Banner(){
    return(
        <div className="container">
            <Canvas />
            <img id="wallpaper" src="https://i.pinimg.com/originals/e8/d3/80/e8d380dc0a17661001f487c68c7b66c6.jpg"/>
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