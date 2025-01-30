"use client";

import Link from "next/link";

export default function Help() {
  return (
    <main className="p-6 md:p-12 bg-gray-100 min-h-screen mt-32">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Help & Support</h1>
        <p className="text-gray-600 mb-6">Find answers to commonly asked questions or contact our support team.</p>
        
        {/* FAQ Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Frequently Asked Questions</h2>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="text-blue-600 hover:underline">How do I create an account?</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">How can I track my order?</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">What payment methods do you accept?</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">How do I return a product?</Link></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Contact Support</h2>
          <p className="text-gray-600">Need further assistance? Contact us via:</p>
          <ul className="mt-2 text-gray-600">
            <li>Email: <a href="mailto:support@shop.co" className="text-blue-600 hover:underline">arainrimshakanwal@gmail.com</a></li>
            <li>Phone: <span className="text-gray-800 font-semibold">+923101026509</span></li>
            <li>Live Chat: Available Mon-Fri, 9 AM - 5 PM</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
