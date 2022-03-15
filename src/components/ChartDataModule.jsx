import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect } from "react";
import {HistoricalChart} from '../config/api'

import { useState } from "react";
import HistoryChartModuleDetail from "./HistoryChartDetailModule";
import HistoricDataChart from "./HistoricDataChart";

function ChartDataModule({id,currentPrice}) {
  const [timeline, setTimeline] = useState(1);

  // const [color,setColor]= useState(currentPrice>=0?"green":"red")
  const handleChange = (event, newTimeline) => {
    setTimeline(newTimeline);
    console.log(newTimeline)
  };
  return (
    <Grid item lg={12}  xs={12}>
      <Card elevation={8}>
        <CardHeader title="Price Visualization" subheader="data provided by coin gecko" />
        <CardContent>
        <ToggleButtonGroup
      color="primary"
      value={timeline}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={1}>24 hrs</ToggleButton>
      <ToggleButton value={7}>7 days</ToggleButton>
      <ToggleButton value={30}>30 days</ToggleButton>
      <ToggleButton value={365}>1 year</ToggleButton>
    </ToggleButtonGroup>
    {/* <HistoricDataChart id={id} /> */}
    <HistoryChartModuleDetail id={id} timeline={timeline} price={currentPrice} />
         
        </CardContent>
      </Card>
    </Grid>
  );
}
export default ChartDataModule;
