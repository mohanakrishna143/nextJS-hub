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
  const userName= useAppSelector((state) => state.authReducer.value.username); 
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: { currentTarget: React.SetStateAction<null>; }) => {
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
    <AppBar position="fixed" color="primary" sx={{ top: 64, backgroundColor: "#2AAA8A"}}>
      <Toolbar>
        {/* App Name/Logo */}
        {userName && (
          <Avatar sx={{ mr: 2 }}>{userName.charAt(0).toUpperCase()}</Avatar>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userName}
        </Typography>

        {/* Tabs for navigation */}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" onClick={() => router.push("/home")} />
          <Tab label="About" onClick={() => router.push("/about")} />
          <Tab
            label="Product"
            aria-controls="product-menu"
            aria-haspopup="true"
            onClick={handleProductTabClick}
          />
          <Tab label="Services" onClick={() => router.push("/services")} />
          <Tab label="Contact" onClick={() => router.push("/contact")} />
        </Tabs>

        {/* Dropdown menu for "Product" */}
        <Menu
          id="product-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleMenuItemClick("/product/car")}>
            Car
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/product/bikes")}>
            Bikes
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/product/vans")}>
            Vans
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
