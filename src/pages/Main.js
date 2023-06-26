import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import heroImage from "../images/image-hero-desktop.png";
import { ReactComponent as DataBizIcon } from "../images/client-databiz.svg";
import { ReactComponent as AudioPhileIcon } from "../images/client-audiophile.svg";
import { ReactComponent as MeetIcon } from "../images/client-meet.svg";
import { ReactComponent as MakerIcon } from "../images/client-maker.svg";
import "./main.css";

const Main = () => {
    const iconStyle = {
        marginLeft: "1.875rem", // 30px converted to rem
    };
    
    const bizStyle = {
        marginLeft: "6.25rem", // 100px converted to rem
    };

    const bizStyleMediaQuery = {
        '@media (max-width: 1200px)': {
          display: "none"
        },
    }

    return (
    <Box sx={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    }}>
        <Box
            sx={{ 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "50%",
                mt: 13,

                '@media (max-width: 1300px)': {
                    mt: 11
                },

                '@media (max-width: 1200px)': {
                    mt: 15
                },
                '@media (max-width: 1100px)': {
                    mt: 10
                },
            }}
        >
            <Typography 
                sx={{ 
                    color: "hsl(0, 0%, 8%)",
                    fontSize: 70,
                    fontWeight: "bold",
                    lineHeight: 1.05,
                    pl: "7rem",
                    mb: 5,

                    '@media (max-width: 1200px)': {
                        fontSize: "3.5rem",
                        pl: "6rem"
                    },
                    
                    '@media (max-width: 1000px)': {
                        fontSize: "3rem",
                        pl: "5rem"
                    },
                }}
            >
                Make<br />remote work
            </Typography>

            <Typography 
                sx={{ 
                    pl: 4, 
                    mb: 5,
                    
                    '@media (max-width: 1200px)': {
                        pl: "6rem"
                    },

                    '@media (max-width: 1000px)': {
                        fontSize: "0.9rem"
                    },
                }}
            >
            Get your team in sync, no matter your location.<br /> Streamline processes, 
            create team rituals, and<br /> watch productivity soar.
            </Typography>

            <Button 
                sx={{ 
                    textTransform: "none", 
                    backgroundColor: "hsl(0, 0%, 8%)", 
                    border: "1px solid hsl(0, 0%, 8%)",
                    borderRadius: "15px",
                    mr: 25.5,
                    mb: 14,
                    py: 1.5,
                    px: 3.5,

                    '@media (max-width: 1000px)': {
                        mr: "100px !important"
                    },
                    '@media (max-width: 1200px)': {
                        mr: 18,
                        mb: 11
                    },
                    '@media (max-width: 1300px)': {
                        mb: "50px !important"
                    },
                    '@media (max-width: 1400px)': {
                        mb: 10
                    },
                }}
            >
                <Typography sx={{ color: "hsl(0, 0%, 98%)", fontSize: "14.5px", fontWeight: "bold" }}>Learn more</Typography>
            </Button>
            
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    ...bizStyle,
                    ...bizStyleMediaQuery,
                }}
            >
                <DataBizIcon />
                <AudioPhileIcon style={iconStyle}/>
                <MeetIcon style={iconStyle}/>
                <MakerIcon style={iconStyle}/>
            </Box>
        </Box>
        
        <img src={heroImage} alt="hero" class="center" />
        
        
    </Box>
  )
}

export default Main