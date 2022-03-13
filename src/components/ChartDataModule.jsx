import {
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect } from "react";
import {HistoricalChart} from '../config/api'

import { useState } from "react";

function ChartDataModule({id}) {
  const [timeline, setTimeline] = useState(1);

  useEffect(async ()=>{
      const data = await fetch(HistoricalChart(id,timeline,"INR")).then(res=>res.json()).then(response=>{console.log(response)})
  },[timeline])

  const handleChange = (event, newTimeline) => {
    setTimeline(newTimeline);
    console.log(newTimeline)
  };
  return (
    <Grid>
      <Card>
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
         
        </CardContent>
      </Card>
    </Grid>
  );
}
export default ChartDataModule;
