import React from 'react';
import AnimateCounter from './Components/AnimateCounter/AnimateCounter';
import DetailsProductTabs from './Components/DetailProductTabs/DetailsProductTabs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <div>
      <Header></Header>
      <ProductDescription></ProductDescription>
      <DetailsProductTabs></DetailsProductTabs>
      <Testimonials></Testimonials>
      <AnimateCounter></AnimateCounter>
      <Footer></Footer>
    </div>
  );
};

export default App;