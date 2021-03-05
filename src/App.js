import React from 'react';
import DetailsProductTabs from './Components/DetailProductTabs/DetailsProductTabs';
import Header from './Components/Header/Header';
import ProductDescription from './Components/ProductDescription/ProductDescription';

const App = () => {
  return (
    <div>
      <Header></Header>
      <ProductDescription></ProductDescription>
      <DetailsProductTabs></DetailsProductTabs>
    </div>
  );
};

export default App;