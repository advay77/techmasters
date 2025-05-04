'use client';

// import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full border-b border-gray-100 bg-white px-6 md:px-16 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="https://res.cloudinary.com/dlauialhp/image/upload/v1746354167/tech_master_india2_xilhey.png" alt="TMC Logo" width={152} height={32} />
          {/* <span className="text-lg font-semibold">Techmasters</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/" className="font-medium text-gray-500 hover:text-black transition-colors duration-400 ease-in-out">Home</Link>
          <Link href="/events" className="font-medium text-gray-500 hover:text-black transition-colors duration-400 ease-in-out">Events</Link>
          <Link href="/teams" className="font-medium text-gray-500 hover:text-black transition-colors duration-400 ease-in-out">Teams</Link>
          <Link href="/contact-us" className="font-medium text-gray-500 hover:text-black transition-colors duration-400 ease-in-out">Contact Us</Link>
        </nav>

        {/* Join Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
          Join
        </button>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button on Top */}
            <button
              className="absolute top-6 right-6 text-black"
              onClick={toggleMenu}
            >
              <X size={32} />
            </button>

            {/* Menu Items */}
            <Link href="/" className="block text-lg font-medium text-black hover:underline">Home</Link>
            <Link href="/events" className="block text-lg font-medium text-black hover:underline">Events</Link>
            <Link href="/teams" className="block text-lg font-medium text-black hover:underline">Teams</Link>
            <Link href="/contact-us" className="block text-lg font-medium text-black hover:underline">Contact Us</Link>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
              Join
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
