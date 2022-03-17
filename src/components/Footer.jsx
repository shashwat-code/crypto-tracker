import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer(){
    return(
        <Grid lg={12} container sx={{display:"flex"}} style={{position:"absolute",bottom:0,height:"1.5vh"}}>
             <Grid lg={12} sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:3}} container item >
             <Typography variant="overline" >Made with </Typography>
                <FavoriteIcon sx={{color:"red",mr:1,ml:1}} />
                <Typography variant='overline'> in India</Typography>
            </Grid>
            <Grid item lg={12} sx={{display:"flex",justifyContent:"center"}} container>
            <img style={{width:"30%"}} src={require('../Assets/india.png')} item />
            </Grid>
        
           
        </Grid>
    )
}

export default Footer