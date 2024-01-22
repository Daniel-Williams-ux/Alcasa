// src/components/PromoBanner.jsx
import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-amber-800 text-white p-2 text-center">
       Up to $10,000 in Air Credits or special 18 Month Leases available on select 2023 Models.{' '}
      <a href="/shop" className="text-underline hover:underline">
        Shop Now
      </a>
    </div>
       
  );
};

export default PromoBanner;
