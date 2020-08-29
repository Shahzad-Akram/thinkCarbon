import React from 'react';
import './home.styles.css';
import { Container } from 'react-bootstrap';
// Sections
import SectionOne from '../../components/sections/Section-1';
import SectionTwo from '../../components/sections/Section-2';
import SectionThree from '../../components/sections/Section-3';
import SectionFour from '../../components/sections/Section-4';
import SectionFive from '../../components/sections/Section-5';

const Home = () => {
  return (
    <Container fluid className='background-image px-0'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </Container>
  );
};

export default Home;
