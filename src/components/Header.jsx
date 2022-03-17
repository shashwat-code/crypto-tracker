import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {


  return (
    <AppBar position="static"  sx={{backgroundColor:"black"}}>
      <Container >
        <Toolbar >
         
          <Typography
            variant="h4"
            noWrap
            // component={Link}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',lg:'flex'},justifyContent:"center" }}
          >
            CRYPTO TRACKER
          </Typography>
          
          <Typography
            variant="h5"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',lg:'none'},justifyContent:"center" }}
          >
            CRYPTO TRACKER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;