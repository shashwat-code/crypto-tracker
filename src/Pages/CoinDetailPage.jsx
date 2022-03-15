import { useState } from "react";
import ChartDataModule from '../components/ChartDataModule'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { Grid } from "@mui/material";
import "../style/detailPage.css";
import CurrentDataModule from "../components/CurrentDataModule";
import NameDetailModule from "../components/NameDetailModule";
import HistoryDataModule from "../components/HistoryDataModule";
import CommunityDataModule from "../components/CommunityDataModule";
import DevelopersDataModule from "../components/DevelopersDataModule";
import MarketDataModule from "../components/MarketDataModule";
function CoinDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [history, setHistory] = useState([]);
  // console.log("entered the arena", id);
  useEffect(async () => {
    const data = await fetch(SingleCoin(id))
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);

        return response;
      });
    setData(data);
    const arr = [
      { time: "24hr", data: data.market_data.price_change_percentage_24h },
      { time: "7 days", data: data.market_data.price_change_percentage_7d },
      { time: "2 weeks", data: data.market_data.price_change_percentage_14d },
      { time: "1 month", data: data.market_data.price_change_percentage_30d },
      { time: "2 month", data: data.market_data.price_change_percentage_60d },
      { time: "200 days", data: data.market_data.price_change_percentage_200d },
      { time: "1 year", data: data.market_data.price_change_percentage_1y },
    ];
    setHistory(arr);
  }, []);
  // console.log("this is data: ", data);
  if (data === null) {
    return <>loading...</>;
  }

  return (
    <Grid container sx={{mt:2,pl:1,pr:1}} spacing={1}>
      <Grid item container lg={6} xs={12}  spacing={1}  order={{xs:2,lg:1}}>
        <Grid container item lg={6} xs={12} spacing={3}>
          <NameDetailModule
            detail={data.description.en}
            name={data.name}
            symbol={data.symbol.toUpperCase()}
            image={data.image.large}
            rank={data.market_cap_rank}
          />
          <CurrentDataModule
            lg={12} 
            currentPrice={data.market_data.current_price.inr}
            high24={data.market_data.high_24h.inr}
            low24={data.market_data.low_24h.inr}
            value={data.market_data.price_change_percentage_24h}
          />
        </Grid>
        <Grid item lg={6} xs={12} container>
          <HistoryDataModule item history={history} />
        </Grid>
        <Grid item container lg={12} spacing={1} sx={{display:"flex",justifyContent:"space-between"}}>
          <Grid  item lg={4} md={12} xs={12} order={{xs:2}}>
            <CommunityDataModule
              item
              score={data.community_score}
              data={data.community_data}
            />
          </Grid>
          <Grid  item lg={4} xs={12} order={{xs:3}}>
            <DevelopersDataModule
              item
              score={data.developer_score}
              data={data.developer_data}
            />
          </Grid>

          <Grid  item lg={4} xs={12} order={{xs:1}}>
            <MarketDataModule
              item
              liquidity_score={data.liquidity_score}
              total_volume={data.market_data.total_volume}
              total_supply={data.market_data.total_supply}
              circulating_supply={data.market_data.circulating_supply}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid  item container spacing={0} lg={6} order={{xs:1,lg:2}} >
        <ChartDataModule id={data.id} currentPrice={data.market_data.price_change_percentage_24h} />
      </Grid>
    </Grid>
  );
}
export default CoinDetailPage;

{/* <ChartDataModule id={data.id} />
<ChartDataModule id={data.id} />
<ChartDataModule id={data.id} /> */}