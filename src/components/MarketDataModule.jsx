import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function MarketDataModule({
  liquidity_score,
  total_volume,
  total_supply,
  circulating_supply,
}) {
  // console.log(circulating_supply);
  return (
    <Grid item>
      <Card elevation={7}>
        <CardHeader title="Market Details" subheader="market in details" />
        <CardContent>
          <Typography variant="h4">
            SCORE: {liquidity_score.toFixed(2)}
          </Typography>

          <Typography
            variant={"subtitle"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Total Volume</span>
            <span>{total_volume.inr}</span>
          </Typography>
          <Divider />

          <Typography
            variant={"subtitle"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Total Supply</span>
            <span>{total_supply.toFixed(2)}</span>
          </Typography>
          <Divider />

          <Typography
            variant={"subtitle"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Circulating Supply</span>
            <span>{circulating_supply.toFixed(2)}</span>
          </Typography>
          <Divider />
        </CardContent>
      </Card>
    </Grid>
  );
}
export default MarketDataModule;
