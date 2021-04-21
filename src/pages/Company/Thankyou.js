import React from 'react';
import Layout from '../../components/layout.js';
import styled from 'styled-components';

const Thankyou = () => {
  return (
    <Layout>
      <SectionWrapper>
        <h1>Thank You For Contacting Us</h1>
        <h3>we will get back to you soon !</h3>
      </SectionWrapper>
    </Layout>
  );
};

export default Thankyou;

const SectionWrapper = styled.section`
  h1 {
    font-size: 3.5rem !important;
    font-weight: 500 !important;
  }
  h3 {
    font-size: 2.5rem !important;
    font-weight: 200 !important;
  }
  text-align: center;
  color: #f5f5f5;
  margin: 0 auto;
  padding: 3rem;
  background: #007bff !important;
  @media (min-width: 576px) {
    padding: 6rem;
  }
`;
