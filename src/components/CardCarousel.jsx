import "../style/cardCarousel.css"
import {numberWithCommas} from "../config/commonFunction"
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
function CardCarousel({item}){

    let color = (price_change_24h)=>{
        return price_change_24h>=0?"green":"red"
    }
    const newdata = item.price_change_percentage_24h
    const pricePercentageRAW = item.price_change_percentage_24h.toFixed(2)
    // console.log(pricePercentageRAW)
    let profit=(num)=>{

        return num>0?"+"+num+"%":num+"%"
    }
    const colorFinal =color(item.price_change_percentage_24h)
    return(
            <Card sx={{width:"45%"}}>
                <Grid sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography variant="h5" >
                        # {item.market_cap_rank}
                    </Typography>
                    <Avatar 
                     src={item.image}
                    />
                    {/* <img src={item.image}></img> */}
                    <Box component={"div"} sx={{display:"flex",justifyContent:"space-evenly",alignItems:"flex-end"}}>
                    <Typography variant="h5" >
                        {item.name}
                    </Typography>
                    <Typography>  ({item.symbol.toUpperCase()})</Typography>
                    </Box>
                    <h3>{numberWithCommas(item.current_price)}</h3>
                </Grid>
            </Card>

          
    )
}
export default CardCarousel


// ath: 19286.66
// ath_change_percentage: -66.86839
// ath_date: "2021-11-06T21:54:35.825Z"
// atl: 38.03
// atl_change_percentage: 16704.3707
// atl_date: "2020-05-11T19:35:23.449Z"
// circulating_supply: 321219688.112058
// current_price: 6396.69
// fully_diluted_valuation: null
// high_24h: 6788.89
// id: "solana"
// image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
// last_updated: "2022-03-07T05:45:52.588Z"
// low_24h: 6280.67
// market_cap: 2052048592877
// market_cap_change_24h: -89317538447.4143
// market_cap_change_percentage_24h: -4.17105
// market_cap_rank: 8
// max_supply: null
// name: "Solana"
// price_change_24h: -357.583551228101
// price_change_percentage_24h: -5.29418
// price_change_percentage_24h_in_currency: -5.294180385207454
// roi: null
// symbol: "sol"
// total_supply: 508180963.57
// total_volume: 104388510183