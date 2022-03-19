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
      style={{ position: "absolute",height:"2vh" }}
    >
      <Grid
        lg={3}
        item
        container
        sx={{
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        order={{xs:1,lg:1}}
      >
        <Grid item>
          <Typography variant="overline">Made with </Typography>
          <FavoriteIcon sx={{ color: "red", mr: 1, ml: 1 }} />
          <Typography variant="overline"> in India</Typography>
        </Grid>
        <Grid sx={{display:"flex",justifyContent:"center" }}container>
          <Typography variant="overline" item><strong>Shashwat</strong></Typography>
          {/* <VerifiedIcon item sx={{color:"rgba( 46, 141, 221, 100%)"}} /> */}
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
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
       
       <Typography variant="overline" align={'left'}>Links</Typography>
        <Grid sx={{display:"flex",justifyContent:"space-evenly",pb:1}} container>
        
            <GitHubIcon sx={{color:"black"}} item  aria-label='Github' onClick={()=>{window.open('https://github.com/shashwat-code')}} />
            <LinkedInIcon sx={{color:"black",pointerEvents:"cursor"}} item aria-label='LinkedIn' onClick={()=>{window.open('https://www.linkedin.com/in/shashwat-chauhan-3009461b0/')}}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
