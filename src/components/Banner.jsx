import { Box, Grid } from "@mui/material";
import "../style/Banner.css"
import Canvas from "./Canvas";
import Carousel from "./Carousel";

import TypeWriter from "./TypeWriter";

function Banner(){
    return(
        <Grid container   >
            <Grid item lg={12}>
               
                
            </Grid>
        </Grid>
      )
}

export default Banner

/*
TODO:
1.> add canvas interactive
2.> add tagline animation
*/

{/* <Box container sx={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}  style={{backgroundImage:`url("https://www.p2pfinancenews.co.uk/wp-content/uploads/2020/12/AdobeStock_188739092-1024x576.jpeg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>

<TypeWriter item   />
<Carousel item />
</Box> */}