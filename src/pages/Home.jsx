import React from 'react'
import Header from '../components/Header';
import Info from '../components/Info';
import Section from '../components/Section';
import Products from '../components/Products';
import { productsSection } from '../constants/constant';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';




const Home = () => {
  return (
        <>
        <Header />
        <Info />
        <Section data={productsSection.iphonePro} />
        <Section data={productsSection.iphone} />
        <Section data={productsSection.macbookpro} />
        <Products />
        </>
       )
}

export default Home
