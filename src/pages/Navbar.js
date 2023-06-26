import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ReactComponent as SnapIcon } from "../images/logo.svg";
import { ReactComponent as IconMenu } from "../images/icon-menu.svg";
import FeatureMenu from "../components/BasicMenus/FeatureMenu";
import CompanyMenu from '../components/BasicMenus/CompanyMenu';
import { useMediaQuery } from '@mui/material';
function Navbar() {
  const iconStyle = {
    "margin-left": "15px",
    "margin-top": "5px",
    "padding-right": "3px"
  };

  const matches = useMediaQuery('(max-width:900px)');

  return (
    <Box sx={{ display: "flex", width: "100%", height: "64px" }} >
     <AppBar 
        color="transparent"  
        sx={{ 
          boxShadow: 'none', 
          borderBottom: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SnapIcon style={iconStyle}/>

            <Box 
              sx={{ 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "row",

                '@media (max-width: 900px)': {
                  display: "none",
                },
              }}
            >
              <FeatureMenu />
              <CompanyMenu />
              <Button sx={{ textTransform: "none", ml: 2.5 }}>
                <Typography sx={{ color: "hsl(0, 0%, 8%)", fontSize: "14px" }}>Careers</Typography>
              </Button>
              <Button sx={{ textTransform: "none", ml: 2.5 }}>
                <Typography sx={{ color: "hsl(0, 0%, 8%)", fontSize: "14px" }}>About</Typography>
              </Button>
            </Box>

            <Box 
              sx={{ 
                flexGrow: 0,
                display: "flex",
                textAlign: "right"
              }}
            >
               {matches ? (
                <IconMenu style={{ "padding-left": "45em" }}/>
               ) : (
                <div>
                  <Button sx={{ textTransform: "none", mr: 3 }}>
                    <Typography sx={{ color: "hsl(0, 0%, 8%)", fontSize: "14px" }}>Login</Typography>
                  </Button>
                  <Button 
                    sx={{ 
                      textTransform: "none",
                      borderRadius: 3,
                      border: "1px solid hsl(0, 0%, 8%)",
                      py: 0.8,
                      px: 2,
                    }}
                  >
                    <Typography sx={{ color: "hsl(0, 0%, 8%)", fontSize: "14px" }}>Register</Typography>
                  </Button>
                </div>
              )}
              
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>   
  );
}
export default Navbar;