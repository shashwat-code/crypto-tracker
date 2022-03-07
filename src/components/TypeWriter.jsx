import TypeWriterEffect from 'react-typewriter-effect';
import {textArray} from "../config/data"
function TypeWriter(){
    return(
    <div id="typing-effect">
    <h1 id="typewrite">Cryptocurrency </h1>
            <TypeWriterEffect 
            // textStyle={{

            // }}
            startDelay={1000}
            cursorColor="red"
            multiText={textArray}
            multiTextDelay={2000}
            typeSpeed={20}
        />
    </div>
    )
}
export default TypeWriter