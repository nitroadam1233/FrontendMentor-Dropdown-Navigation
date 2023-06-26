import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { ReactComponent as ArrowUp } from "../../images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../images/icon-arrow-down.svg";
import { ReactComponent as Todo } from "../../images/icon-todo.svg";
import { ReactComponent as Calendar } from "../../images/icon-calendar.svg";
import { ReactComponent as Reminders } from "../../images/icon-reminders.svg";
import { ReactComponent as Planning } from "../../images/icon-planning.svg";
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)(({ theme }) => ({
  wordSpacing: '2px',
}));

const FeatureMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ textTransform: "none", ml: 7 }}
      >
        <CustomTypography sx={{ color: "hsl(0, 0%, 8%)", fontSize: "14px" }}>
          Features { open ? <ArrowUp /> : <ArrowDown /> }
        </CustomTypography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
          onClick={handleClose} 
          sx={{ color: "hsl(0, 0%, 8%)" }}
        >
          <Todo />Todo List
        </MenuItem>
        
        <MenuItem 
          onClick={handleClose} 
          sx={{ color: "hsl(0, 0%, 8%)" }}
        >
          <Calendar />Calendar
        </MenuItem>
        
        <MenuItem 
          onClick={handleClose} 
          sx={{ color: "hsl(0, 0%, 8%)" }}
        >
          <Reminders />Reminders
        </MenuItem>

        <MenuItem 
          onClick={handleClose} 
          sx={{ color: "hsl(0, 0%, 8%)" }}
        >
          <Planning />Planning
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FeatureMenu;