import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import { useAppSelector } from "@/redux/store";


function NavBar() {
  const userName= useAppSelector((state) => state.authReducer.value.username);
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 64 }}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
         {userName && (
          <Avatar sx={{ mr: 2 }}>{userName.charAt(0).toUpperCase()}</Avatar>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userName}
        </Typography>
        {/* Add additional buttons/icons here */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
