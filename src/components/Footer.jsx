import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <Grid
      lg={12}
      container
      style={{ position: "relative", bottom: 0, }}
    >
      <Grid
        lg={3}
        item
        container
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        order={{xs:1,lg:1}}
      >
        <Grid item>
          <Typography variant="overline">Made with </Typography>
          <FavoriteIcon sx={{ color: "red", mr: 1, ml: 1 }} />
          <Typography variant="overline"> in India</Typography>
        </Grid>
      </Grid>
      <Grid lg={6} item container order={{xs:2,lg:2}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "100%" }}
            src={require("../Assets/india.png")}
            item
          />
        </Box>
      </Grid>
      <Grid
        lg={3}
        order={{xs:1,lg:3}}
        item
        container
        sx={{
          display: "flex",
          flexDirection:"column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <Grid sx={{ml:5}}>
          <Typography variant="overline">Shashwat</Typography>
          <VerifiedIcon sx={{color:"rgba( 46, 141, 221, 100%)"}} />
        </Grid>
       
        <Grid sx={{display:"flex",justifyContent:"space-around"}} container>
        <Typography variant="overline">Links</Typography>
            <GitHubIcon sx={{color:"black"}} item />
            <LinkedInIcon sx={{color:"black"}} item/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
