import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MessageBox from './components/MessageBox';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import ContentHead from './components/ContentHead';
import ImageText from './components/ImageText';
import './HomePage.css';
import Footer from './components/Footer';

const HomePage = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <MessageBox />
      <ContentHead />
      <div className="main-content">
        {!isSmallScreen && <Filter />}
        <ProductList />
      </div>
      <ImageText />
      <Footer />
    </div>
  );
};

export default HomePage;
