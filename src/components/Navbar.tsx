'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");  // Track the active link

  // Handle active link styling
 
  
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  return (
    <>
      {/* First Navbar */}
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-modal-bg py-2 shadow-md lg:py-4">
        <div className="flex w-full items-center justify-between px-3">
          {/* Shipping Text */}
          <Link href="#" className="text-xl text-neutral-100 flex items-center">
            <h1 className="flex items-center">
              <TiTick />
              Free Shipping On All Orders Over $50
            </h1>
          </Link>

          {/* Right side: Dropdown, Faqs, Need Help */}
          <div className="flex items-center ml-auto">
            {/* Dropdown Button */}
            <button
              className="flex items-center text-black/60 transition duration-200 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Eng
              <span className="ms-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute z-10 mt-2 min-w-[200px] rounded-lg bg-white shadow-lg dark:bg-gray-800">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">French</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">Urdu</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">English</a>
                </li>
              </ul>
            )}

            {/* Faqs and Need Help */}
            <div className="flex space-x-4 ml-4">
              <span className="text-black/30 dark:text-white/30">Faqs</span>
              <span className="text-black/30 dark:text-white/30">@Need help</span>
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="block border-0 bg-transparent px-2 text-neutral-300 lg:hidden" onClick={() => setIsOpen1(!isOpen1)} aria-label="Toggle navigation">
          <span className="w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </span>
        </button>

        {/* Mobile Menu */}
        <div className={`${isOpen1 ? "flex" : "hidden"} mt-2 w-full flex-grow lg:mt-0 lg:flex lg:basis-auto`}>
          {/* Mobile menu content here */}
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="relative flex w-full items-center bg:gray-500 justify-between bg-primary py-2 shadow-md lg:py-4">
        <div className="flex w-full items-center justify-between px-3">
          {/* Comfort logo on the left */}
          <Link href="/" className="text-xl text-neutral-100">
            <Image className="whitespace-pre" src="/Frame 168.png" alt="logo" width={200} height={100} />
          </Link>

          {/* Cart icon button moved to the right side */}
          <div className="flex justify-between items-center px-4 sm:px-11 lg:px-19">
  {/* Left-side content here (e.g., logo, navigation) */}

  <button
    onClick={() => {
      // Button click ka logic yahan likhiye
      console.log("Cart button clicked!");
    }}
    className="ml-auto flex items-center space-x-2 text-xl text-gray-400 hover:text-gray-100 focus:outline-none"
  >
    <img src="/add-cart.png" alt="Cart Icon" width={20} height={15} />
    <span>Cart</span>
  </button>
</div>

            {/* Hamburger menu button for mobile */}
            <button className="block border-0 bg-transparent px-2 text-neutral-300 lg:hidden" onClick={() => setIsOpen2(!isOpen2)} aria-label="Toggle navigation">
              <span className="w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
      

        {/* Mobile Menu */}
        <div className={`${isOpen2 ? "flex" : "hidden"} mt-2 w-full flex-grow lg:mt-0 lg:flex lg:basis-auto`}>
          {/* Mobile menu content */}
        </div>
      </nav>

      {/* Third Navbar */}
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-sky-100 py-2 shadow-md lg:py-4">
        <div className="flex w-full items-center justify-between px-3">
          {/* Left side navigation */}
          <div className="flex space-x-4">
  <Link
    href="/"
    className={`text-xl text-black ${activeLink === '/' ? 'font-bold bg-blue-500 text-white' : 'hover:bg-gray-200'} py-2 px-4 rounded-lg transition duration-300`}
    onClick={() => handleLinkClick('/')}
  >
    Home
  </Link>
  
  <Link
    href="/shop"
    className={`text-xl text-black ${activeLink === '/shop' ? 'font-bold bg-blue-500 text-white' : 'hover:bg-gray-200'} py-2 px-4 rounded-lg transition duration-300`}
    onClick={() => handleLinkClick('/shop')}
  >
    Shop
  </Link>
  
  <Link
    href="/product"
    className={`text-xl text-black ${activeLink === '/product' ? 'font-bold bg-blue-500 text-white' : 'hover:bg-gray-200'} py-2 px-4 rounded-lg transition duration-300`}
    onClick={() => handleLinkClick('/product')}
  >
    Product
  </Link>
  
  <Link
    href="/about"
    className={`text-xl text-black ${activeLink === '/about' ? 'font-bold bg-blue-500 text-white' : 'hover:bg-gray-200'} py-2 px-4 rounded-lg transition duration-300`}
    onClick={() => handleLinkClick('/about')}
  >
    About
  </Link>
</div>

          {/* Right side navigation (Contact) */}
          <div className="flex justify-end w-full">
            <ul className="flex flex-col lg:flex-row ml-auto">
              <li className="lg:mx-2">
                <Link href="tel:08005550111" className="text-black hover:text-neutral-600 lg:px-2">
                  Contact: (0800) 555-0111
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;