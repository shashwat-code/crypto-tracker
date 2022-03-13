import { Grid, Stack,Card,CardHeader,Divider, CardContent } from "@mui/material";
import ProfitArrow from "./ProfitArrow"
function HistoryDataModule({history}) {
    console.log(history)
  return <Grid item container>
      <Card elevation={5}>
          <CardHeader title="Previous Data" subheader="fetched from coin getcho API" />
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
