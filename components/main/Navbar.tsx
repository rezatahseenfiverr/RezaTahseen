"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo and Name */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/Profile-Image.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          {/* Name always visible */}
          <span className="font-bold ml-3 text-gray-300">Reza Tahseen</span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="text-gray-300 text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-[500px] border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.uri}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#24292e] py-10 backdrop-blur-md mt-2">
          <div className="flex flex-col items-center space-y-4 text-white">
            <a href="#about-me" onClick={toggleMenu} className="cursor-pointer">
              About me
            </a>
            <a href="#skills" onClick={toggleMenu} className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
              Projects
            </a>
            {/* Social Icons for Mobile */}
            <div className="flex gap-5 mt-4">
              {Socials.map((social) => (
                <a
                  href={social.uri}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
