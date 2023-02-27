import React from 'react';
import HeaderBar from '../components/HeaderBar';
import BodyCarousel from '../components/BodyCarousel';
import BodyProductList from '../components/BodyProductList';
import BodyBoxes from '../components/BodyBoxes';
import BodyServicesList from '../components/BodyServicesList';
import BodyContainers from '../components/BodyContainers';
import BodyContainers2 from '../components/BodyContainers2';
import BodyBoxes2 from '../components/BodyBoxes2';
import BodyServicesList2 from '../components/BodyServicesList2';
import ProductSlideShow from '../components/ProductSlideShow';
import BodyBoxes3 from '../components/BodyBoxes3';
import BodyNewsletter from '../components/BodyNewsletter';
import BodyNewsSlideShow from '../components/BodyNewsSlideShow';


function Home() {
  return (
    <>
      <HeaderBar title="EDENSIGN" />
      <BodyCarousel />
      <BodyProductList />
      <BodyBoxes />
      <BodyServicesList />
      <BodyContainers />
      <BodyContainers2 />
      <BodyBoxes2 />
      <BodyServicesList2 />
      <ProductSlideShow />
      <BodyBoxes3 />
      <BodyNewsletter />
      <BodyNewsSlideShow />
    </>

  )
}

export default Home;
