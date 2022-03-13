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
  console.log(circulating_supply);
  return (
    <Grid item>
      <Card elevation={7}>
        <CardHeader title="Market Details" subheader="market in details" />
        <CardContent>
          <Grid container lg={12} spacing={2}>
            <Grid item lg={6}>
              <Typography variant={"subtitle"}>Liquidity Score</Typography>
              <Typography
                variant={"h6"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {liquidity_score.toFixed(2)}
              </Typography>
              <Divider />
              <Typography variant={"subtitle"}>Total Volume</Typography>
              <Typography
                variant={"h6"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {total_volume.inr}
              </Typography>
            </Grid>

            <Grid item lg={6}>
              <Typography variant={"subtitle"}>Total Supply</Typography>
              <Typography
                variant={"h6"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {total_supply}
              </Typography>
              <Divider />
              <Typography variant={"subtitle"}>Circulating Supply</Typography>
              <Typography
                variant={"h6"}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {circulating_supply}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default MarketDataModule;
