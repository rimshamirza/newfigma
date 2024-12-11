'use client'
import React from "react";

export default function NewsletterAndFooter() {
  return (
    <div>
      {/* Newsletter and Instagram Section */}
      <section className="newsletter-instagram-section bg-dark-gray py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Newsletter Section */}
          <div className="newsletter-section mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Or Subscribe To The Newsletter
            </h2>
            <div className="flex justify-center items-center mb-6">
              <input
                type="email"
                placeholder="Email Address..."
                className="py-2 px-6 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-800 text-white py-2 px-6 rounded-r-md hover:bg-indigo-700">
                Submit
              </button>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="instagram-section mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="flex justify-center space-x-6">
              <img
                src="/product1.png"
                alt="Product 1"
                className="w-50 h-48 object-cover rounded-lg"
              />
              <img
                src="/product2.png"
                alt="Product 2"
                className="w-50 h-48 object-cover rounded-lg"
              />
              <img
                src="/product3.png"
                alt="Product 3"
                className="w-50 h-48 object-cover rounded-lg"
              />
              <img
                src="/product4.png"
                alt="Product 4"
                className="w-50 h-48 object-cover rounded-lg"
              />
              <img
                src="/product5.png"
                alt="Product 5"
                className="w-50 h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-gray-700 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4 md:w-1/3">
            <div className="flex items-center space-x-2">
              <img src="/Frame 168.png" alt="Logo" className="w-18 h-8" />
              <span className="text-2xl font-semibold text-indigo-800"></span>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in eius minima obcaecati consequatur saepe asperiores, ratione distinctio laboriosam nulla iure, voluptatibus aspernatur, atque aliquam fugit quasi fuga ad consequuntur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-800 hover:text-indigo-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-indigo-800 hover:text-indigo-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-indigo-800 hover:text-indigo-600">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-indigo-800 hover:text-indigo-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8 md:mt-0 md:w-1/3">
            <h4 className="text-lg font-semibold text-gray-800">Category</h4>
            <ul className="space-y-2 mt-4 text-sm text-gray-500">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li className="text-indigo-800">Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-8 md:mt-0 md:w-1/3">
            <h4 className="text-lg font-semibold text-gray-800">Support</h4>
            <ul className="space-y-2 mt-4 text-sm text-gray-500">
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-8 md:mt-0 md:w-1/3">
            <h4 className="text-lg font-semibold text-gray-800">Newsletter</h4>
            <p className="text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-800 text-white py-2 px-6 rounded-r-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gray-100 py-4 mt-8">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2021 - Blogy - Designed & Developed by Rimsha Mirza
            </p>
            <div className="flex space-x-4">
              <img src="/paypal.jpg" alt="PayPal" className="w-8" />
              <img src="/visa.jpg" alt="Visa" className="w-8" />
              <img src="/mast.png" alt="Mastercard" className="w-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}