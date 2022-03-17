import { Box, Grid } from "@mui/material";
import Banner from "../components/Banner";
import CoinTable from "../components/CoinTable";
function HomePage(){
    return(
        <Grid container lg={12} xs={12} sx={{display:"flex",flexDirection:"column"}}>
            <Banner lg={12} item  />
            <CoinTable />
        </Grid>
    )
}

export default HomePage;