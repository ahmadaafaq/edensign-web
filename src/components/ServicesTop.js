import * as React from 'react';
import { Box } from '@mui/material';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

export default function ServicesTop() {
    const location = useLocation();

    return (
        <Box sx={{width:'100%', height:'60vh', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", background:"linear-gradient(to right, pink, violet)"}}>
            <p style={{textTransform:"uppercase", fontSize:"52px", color:"white", letterSpacing:"0.4rem", marginTop:"130px"}}> shop </p>
            <p style={{color:"white", textTransform:"uppercase", marginTop:"130px"}}><Link style={{ textDecoration:"none", color:"white" }} to="/"> HOME &gt;</Link> {location.pathname.slice(1)} </p>
        </Box>
    )
}