import React from 'react';
import ApiCarbs from './components/pages/meal/ApiCarbs';
// import ContentFrame from './components/pages/homepage/ContentFrame';
// import Footer from './components/layout/Footer';
// import HeaderMobile from './components/layout/HeaderMobile';
// import HomeNavButtons from './components/pages/homepage/HomeNavButtons';
// import InsulinCalculation from './components/pages/calculation/InsulinCalculation';
// import Navbar from './components/layout/Navbar';



import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <InsulinCalculation />
      <Navbar  />
      <Footer />
      <HeaderMobile />
      <HomeNavButtons />
      <ContentFrame /> */}
      <ApiCarbs />
    </div>
  )
}

export default App;
