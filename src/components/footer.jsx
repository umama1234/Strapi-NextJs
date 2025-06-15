import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <>

      <footer className="bg-gray-50 pt-10 pb-5">
        <div className="container mx-auto px-4">
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-center justify-center">
              <div className="text-center group">
                <i className="fas fa-shipping-fast text-4xl text-[#bada55] group-hover:scale-110 transition-transform"></i>
                <h3 className="font-semibold mt-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">Order over Rs 10,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center group">
                <i className="fas fa-lock text-4xl text-[#bada55] group-hover:scale-110 transition-transform"></i>
                <h3 className="font-semibold mt-2">Secure Payments</h3>
                <p className="text-sm text-gray-600">100% Secure & Safe</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center group">
                <i className="fas fa-truck text-4xl text-[#bada55] group-hover:scale-110 transition-transform"></i>
                <h3 className="font-semibold mt-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">2-5 Business Days</p>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-gray-200">
            {/* Logo Section */}
            <div className="col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-[#bada55] hover:opacity-80 transition-opacity">
                  Decor Hub
                </span>
              </Link>
              <p className="mt-4 text-gray-600 text-sm">
                Your one-stop destination for beautiful home decor and furniture.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#bada55] transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-phone text-[#bada55]"></i>
                  <span>+92 302 5072777</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-envelope text-[#bada55]"></i>
                  <span>info@decorhub.pk</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <i className="fas fa-location-dot text-[#bada55]"></i>
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Decor Hub. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#bada55] transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#bada55] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#bada55] transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;