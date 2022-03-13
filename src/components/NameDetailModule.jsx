import { pink, purple, green, red } from "@mui/material/colors";
import { Grid, Typography, Card, CardContent, Avatar } from "@mui/material";

function NameDetailModule({ image, name, symbol,rank ,detail}) {
  return (
    <Grid lg={12} item spacing={1} >
      <Card sx={{ display: "flex", alignItems:"center" }} elevation={3}>
      <Typography variant="h4"  sx={{ml:2}} > #{rank}</Typography>
        <Avatar
          src={image}
          sx={{
            width: "22%",
            height: "22%",
            mt: 1,
            mb: 1,
            ml: 1,
            bgcolor: purple[500],
          }}
        />
        <CardContent>
          <Typography variant="h4">{name} </Typography>
          <Typography variant="subtitle">{symbol}</Typography>
          {/* <Typography>{detail}</Typography> */}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default NameDetailModule;
