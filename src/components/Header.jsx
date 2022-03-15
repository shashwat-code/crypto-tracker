import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {


  return (
    <AppBar position="static">
      <Container >
        <Toolbar >
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{display: { xs: 'none', md: 'flex',lg:'flex' },justifyContent:"flex-start" }}
          >
            CRYPTO TRACKER
          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,ml:2, display: { xs: 'flex', md: 'none' } }}
          >
            CRYPTO TRACKER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;