import { Circle } from "@mui/icons-material";
import { red, green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Grid, Card, CardContent, CardHeader, Typography } from "@mui/material";
import ProfitArrow from "./ProfitArrow";

const useStyles = makeStyles({
  root: {
    animation: `$myEffect 1000ms infinite `,
    width: "11%",
    height: "11%",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});

function CurrentDataModule({ currentPrice, high24, low24,value }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1} item>
      <Grid item lg={12}>
        <Card elevation={3}>
          <CardHeader title="Current" subheader="current price and changes within 24 hrs" />
          <CardContent sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{width:"50%"}} variant="h6">Price: $ {currentPrice}</Typography>
            <ProfitArrow value={value.toFixed(2)} time={""} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item container lg={12} spacing={1}>
        <Grid item lg={6} xs={6}>
          <Card elevation={3}>
            <CardHeader title="All-Time High" subheader="within 24 hrs" />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Circle className={classes.root} sx={{ color: green[500] }} />
              <Typography variant="h6">
                {" "}
                <strong>Price</strong><br></br> $ {high24}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} xs={6}>
          <Card elevation={3}>
            <CardHeader title="All-Time Low" subheader="within 24 hrs" />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Circle className={classes.root} sx={{ color: red[500] }} />
              <Typography variant="h6">
                {" "}
                <strong>Price</strong><br></br> $ {low24}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CurrentDataModule;
