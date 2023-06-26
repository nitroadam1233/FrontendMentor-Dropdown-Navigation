import { Box } from '@mui/material';
import { ReactComponent as DataBizIcon } from "../images/client-databiz.svg";
import { ReactComponent as AudioPhileIcon } from "../images/client-audiophile.svg";
import { ReactComponent as MeetIcon } from "../images/client-meet.svg";
import { ReactComponent as MakerIcon } from "../images/client-maker.svg";
import React from 'react';

const ResponsiveIcons = () => {
    const iconStyle = {
        marginLeft: "1.875rem", // 30px converted to rem
    };

    const StyleMediaQuery = {
        '@media (min-width: 1200px)': {
            display: "none",
        },
        '@media (max-width: 1200px)': {
            mt: 3
        },
    }

    return (
    <Box 
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                ...StyleMediaQuery 
            }}
        >
            <DataBizIcon />
            <AudioPhileIcon style={iconStyle}/>
            <MeetIcon style={iconStyle}/>
            <MakerIcon style={iconStyle}/>
        </Box>
    </Box>
  )
}

export default ResponsiveIcons;