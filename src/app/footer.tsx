import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import AppBar from '@mui/material/AppBar';

function Footer() {
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height:"40px" }}>
                <Toolbar sx={{
                    backgroundColor: "#FFD580",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "14px",
                    minHeight: "20px",
                    justifyContent: "right" // Centering the text horizontally
                }}>
                    <Typography variant="body2" color="black">
                        Copyright © www.knowledghub.com 2024.
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Footer;
