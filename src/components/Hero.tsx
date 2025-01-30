// pages/hero.tsx

import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative mt-32 bg-gray-900 text-white/75">
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{ backgroundImage: 'url(/perfume2.png)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ">
          Welcome to Our Website
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl">
          We are dedicated to delivering top-quality products and services to meet your needs.
        </p>
        <div className="mt-10">
          {/* <Link
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold text-gray-900 bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Learn More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
