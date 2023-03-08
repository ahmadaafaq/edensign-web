import './imgAnimation.css';
import React from 'react';
import { Container } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';


function BodyCarousel() {

    return (
        <>
        <Container maxWidth="xl" className="container" sx={{pt:10}}>
        </Container>
        <Container maxWidth='xl' sx={{pt:10, display:'flex',  flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#F8C8DC"}}>
            <p style={{fontSize:'32px', letterSpacing:"0.3em"}}> TOP BRANDED </p> <br />
            <DiamondIcon  /> <br />
            <h2 style={{letterSpacing:"0.4em", fontSize:'36px'}}> PRODUCTS </h2>
        </Container>
        </>
    )
}

export default BodyCarousel;
