'use client';
import { useState } from 'react';

import NavigationTitle from "@/components/Navigation/NavigationTitle";
import Logo from "@/components/Logo";
import PrimaryActionButton from "@/components/PrimaryActionButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className="flex justify-center p-3 mt-5 bg-dark">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Left */}
          <div className="flex-shrink-0">
            <Logo size={40} />
          </div>

          {/* Middle */}
          <div className="hidden md:flex flex-1 justify-center gap-20">
            <NavigationTitle title="Notes" />
            <NavigationTitle title="Tasks" />
            <NavigationTitle title="Tools" />
            <NavigationTitle title="Time Table" />
          </div>

          {/* Right */}
          <div className="hidden md:flex flex-shrink-0 flex-row gap-7 text-main-dark items-center">
            <NavigationTitle title="Log In" className="translate-y-0.5" />
            <PrimaryActionButton text="Sign Up" />
          </div>

          {/* Hamburger */}
          <div className="visible md:hidden">
            <span
              className="material-symbols-outlined transition-transform duration-300 ease-in-out cursor-pointer text-3xl text-main-dark"
              onClick={toggleMenu}
            >
              {open ? 'close' : 'menu'}
            </span>
          </div>
        </div>
      </div>

      {/* Dropdown menu outside navbar flex container */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Dropdown menu (centered) */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-dark p-6 rounded-xl shadow-xl w-[90%] max-w-sm z-50">
            <ul className="flex flex-col space-y-4 text-main-dark text-lg">
              <button
                onClick={() => toggleMenu()}
                className="absolute cursor-pointer top-3 right-3 text-2xl text-gray-400 hover:text-white transition"
              >
                ×
              </button>
              <NavigationTitle title="Home"/>
              <NavigationTitle title="Notes"/>
              <NavigationTitle title="Tasks"/>
              <NavigationTitle title="Tools"/>
              <NavigationTitle title="Time Table"/>
              <NavigationTitle title="Log In"/>
              <PrimaryActionButton text="Sign Up"/>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}