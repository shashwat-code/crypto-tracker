import { Grid, Stack,Card,CardHeader,Divider, CardContent } from "@mui/material";
import ProfitArrow from "./ProfitArrow"
function HistoryDataModule({history}) {
    console.log(history)
  return <Grid>
      <Card elevation={5}>
          <CardHeader title="Previous Data" subheader="fetched from coin gecko" />
      <CardContent>
      {
          history.map(item=>{
              return <>
              <ProfitArrow key={item.time}  value={item.data.toFixed(2)} time={item.time}/>
              <Divider />
              </>
          })
      }
      </CardContent>
      </Card>
  </Grid>;
}

export default HistoryDataModule;
