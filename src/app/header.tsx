
"use client"
import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { toggleLogOutStatus } from '@/redux/features/auth-slice';
import paths from './path';
import { useRouter } from 'next/navigation';
import NavBar from './core/navbar';

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [userName, setUserName] = useState("Mohana Krishna");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  // const userName= useAppSelector((state) => state.authReducer.value.username);
  // const isLoggedIn= useAppSelector((state) => state.authReducer.value.isLoginStatus); 
  const loginDetails = useAppSelector((state) => ({
    userName: state.authReducer.value.username,
    isLoginStatus: state.authReducer.value.isLoginStatus
  }));

  console.log("--test-------", loginDetails)
  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage, resetting state, etc.
    console.log("---set------", paths.signIn())
    router.push(paths.signIn());
    dispatch(toggleLogOutStatus());
    // setUserName("");
  };
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto', backgroundColor: "#6495ED", textAlign: "center", height: "30px" }}>
        <Toolbar sx={{ position: "fixed", left: 0, top: 0, right: 0, backgroundColor: "#6495ED", fontFamily: "Inter", fontWeight: 400, fontSize: "5px", display: "flex", justifyContent: "left", minHeight: "30px" }}>
          <Typography variant="body2" align="right" sx={{ color: "#00ff00", fontWeight: "bold", fontSize: "20px" }}>
            <ImportContactsIcon sx={{ color: "#00ff00", fontSize: "50px" }} /> <span style={{ color: "#00ff00", fontSize: "30px" }}>Knowledge</span> <span style={{ color: "#ffffff", fontWeight: "bold", textShadow: "1px 1px 2px black", fontSize: "30px" }}>Hub</span>
          </Typography>
          {loginDetails.isLoginStatus && (
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              {/* <Typography variant="body2" align="right" sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "16px" }}>
                {loginDetails.userName}
              </Typography> */}
              <IconButton color="inherit" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {loginDetails.isLoginStatus &&<NavBar />}
    </>

  );
};

export default Header;
