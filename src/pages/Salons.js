import React from 'react';
import Theme from '../Theme';
import ServicesTop from '../components/ServicesTop';
import SalonListCards from '../components/salon/SalonListCards';
import BookAppointment from '../components/salon/BookAppointment';

const Salons = () => {
  return (
    <>
      <ServicesTop name='salons' bg={Theme.palette.background.greenBlueGradiant} />
      <SalonListCards />
      <BookAppointment />
    </>
  )
}

export default Salons;
