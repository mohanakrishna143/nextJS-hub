import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

function NavBar() {
  const userName = useAppSelector((state) => state.auth.value.username);
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: { currentTarget: React.SetStateAction<null> }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (route: Url) => {
    // router.push(route);
    handleMenuClose();
  };

  const handleProductTabClick = (event: any) => {
    handleMenuClick(event);
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 64, backgroundColor: "#FFAC1C" }}>
      <Toolbar>
        {/* App Name/Logo */}
        {userName && (
          <Avatar sx={{ mr: 2 }}>{userName.charAt(0).toUpperCase()}</Avatar>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userName}
        </Typography>

        {/* Tabs for navigation */}
        <Tabs
          value={value}
          onChange={handleChange} 
          TabIndicatorProps={{
            style: {
              backgroundColor: "Black", 
              color: "Red",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.24)",
            },
          }}
        >
          <Tab
            label="Employees"
            onClick={() => router.push("/employee")}
            sx={{
              color: value === 0 ?   "Black": "white",
              fontWeight: value === 0 ? "bold" : "normal",
            }}
          />
          <Tab
            label="About" 
            sx={{
              color: value === 1 ? "Black": "white",
              fontWeight: value === 1 ? "bold" : "normal",
            }}
          />
          <Tab
            label="Product"
            aria-controls="product-menu"
            aria-haspopup="true"
            onClick={handleProductTabClick}
            sx={{
              color: value === 2 ? "Black": "white",
              fontWeight: value === 2 ? "bold" : "normal",
            }}
          />
          <Tab
            label="Services"
             
            sx={{
              color: value === 3 ? "Black": "white",
              fontWeight: value === 3 ? "bold" : "normal",
            }}
          />
          <Tab
            label="Contact"
             
            sx={{
              color: value === 4 ? "Black": "white",
              fontWeight: value === 4 ? "bold" : "normal",
            }}
          />
        </Tabs>

        {/* Dropdown menu for "Product" */}
        <Menu
          id="product-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem  >Car</MenuItem>
          <MenuItem  >Bikes</MenuItem>
          <MenuItem  >Vans</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
