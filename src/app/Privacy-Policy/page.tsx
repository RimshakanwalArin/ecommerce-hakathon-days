
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-32 mb-0">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Your privacy is important to us. Read our policy below to understand how we collect, use, and protect your information.</p>
        
        {/* Information Collection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Information We Collect</h2>
          <p className="text-gray-600">We collect personal information such as your name, email address, and payment details when you use our services.</p>
        </div>
        
        {/* Usage of Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">How We Use Your Information</h2>
          <p className="text-gray-600">Your information is used to process orders, provide customer support, and improve our services.</p>
        </div>
        
        {/* Data Protection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Data Protection</h2>
          <p className="text-gray-600">We implement security measures to protect your personal information from unauthorized access.</p>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Contact Us</h2>
          <p className="text-gray-600">If you have any questions, feel free to <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.</p>
        </div>
      </div>
    </main>
  );
}
