import React from 'react';
import "../components/imgAnimation.css";
import Theme from '../Theme';
import ServicesTop from '../components/ServicesTop';
import ServicesLeftBar from '../components/ServicesLeftBar';
import ServicesAllProducts from '../components/ServicesAllProducts';


const Services = () => {
  return (
    <>
      <ServicesTop name='shop' bg={Theme.palette.background.pinkVioletGradient} />
      <div style={{ backgroundColor: "#F8C8DC"}}>
        <ServicesLeftBar />
        <ServicesAllProducts />
      </div>
    </>
  )
}

export default Services;
