import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center mt-36">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        Welcome to <span className="font-semibold">[Suaid]</span>, your one-stop destination for premium-quality products at unbeatable prices.
      </p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            At <span className="font-semibold">[Suaid]</span>, our mission is to redefine online shopping by offering a seamless, convenient, and enjoyable experience.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>High-Quality Products</li>
            <li>Affordable Prices</li>
            <li>Secure Shopping</li>
            <li>Fast & Reliable Delivery</li>
            <li>Excellent Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Founded in [2000], <span className="font-semibold">[Suaid]</span> was created with the vision of transforming the e-commerce experience.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions or need assistance? Reach out to us at <span className="font-semibold">[arainrimshakanwal@gmail.com]</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
