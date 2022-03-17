import { Grid, Typography } from '@mui/material';
import TypeWriterEffect from 'react-typewriter-effect';
import {textArray} from "../config/data"
function TypeWriter(){
    return(
    <Grid >
    <Typography variant='h1' sx={{color:"white"}} >Cryptocurrency </Typography>
            <TypeWriterEffect 
            textStyle={{
                color:"white"
            }}
            startDelay={1000}
            cursorColor="white"
            multiText={textArray}
            multiTextDelay={2000}
            typeSpeed={20}
        />
    </Grid>
    )
}
export default TypeWriter