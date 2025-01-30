import React from 'react';

const Brand = () => {
  return (
    <div className="object-cover mt-20 py-3 px-3 sm:px-10 md:px-20" style={{ backgroundImage: 'url(/perfume1.png)' }}>
      <div className="text-center text-white mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-black/50">Brands</h2>
       
      </div>

      {/* Flex Container for Brand Logos */}
      <div className="flex flex-wrap justify-center gap-4 text-black/30">
        {/* Brand 1 */}
        <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg w-32 sm:w-40 md:w-48">
          <h3 className="text-xl font-semibold">Rose</h3>
        </div>

        {/* Brand 2
        <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg w-32 sm:w-40 md:w-48">
          <h3 className="text-xl font-semibold">Khaddi</h3>
        </div> */}

        {/* Brand 3 */}
        <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg w-32 sm:w-40 md:w-48">
          <h3 className="text-xl font-bold">Jasmain</h3>
        </div>

        {/* Brand 4 */}
        <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg w-32 sm:w-40 md:w-48">
          <h3 className="text-xl font-semibold">Chamali</h3>
        </div>

        {/* Brand 5 */}
        <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg w-32 sm:w-40 md:w-48">
          <h3 className="text-xl font-semibold">Sandal</h3>
        </div>
      </div>
    </div>
  );
};

export default Brand;
