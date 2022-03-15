import { Box } from "@mui/material";
import Banner from "../components/Banner";
import CoinTable from "../components/CoinTable";
function HomePage(){
    return(
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Banner style={{backgroundColor:"red"}} />
            <CoinTable />
        </Box>
    )
}

export default HomePage;