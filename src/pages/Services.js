import React from 'react';
import "../components/imgAnimation.css";
import ServicesTop from '../components/ServicesTop';
import ServicesLeftBar from '../components/ServicesLeftBar';
import ServicesAllProducts from '../components/ServicesAllProducts';


const Services = () => {
  return (
    <>
      <ServicesTop />
      <div style={{ backgroundColor: "#F8C8DC"}}>
        <ServicesLeftBar />
        <ServicesAllProducts />
      </div>
    </>
  )
}

export default Services;
