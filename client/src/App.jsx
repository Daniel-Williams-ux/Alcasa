// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyListing from './components/PropertyListing';

const App = () => {
  // Sample data for properties
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      image: 'path/to/image.jpg',
      description: 'A stunning villa with breathtaking views.',
    },
    // Add more property entries as needed
  ];

  return (
    <>
      <Header />
      <Hero />
      <PropertyListing properties={properties} />
      {/* Add more sections or components as needed */}
    </>
  );
};

export default App;
