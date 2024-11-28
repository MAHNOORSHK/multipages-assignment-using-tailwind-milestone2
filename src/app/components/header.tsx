"use client";
import Image from 'next/image';
import { useState } from 'react';
import Logo from "@/app/images/logo.png";
import Link from 'next/link';
import "@/app/about/page";
import "@/app/blog/page";
import "@/app/team/page";
import "@/app/home/page";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1A3129]">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-40 flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="logo" className="w-[80px] h-10 hidden lg:block " />
          <a href="#" className="text-white font-bold text-2xl">Nutritionist</a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={isMenuOpen ? '/close.svg' : '/hamburger-menu.svg'}
            alt="Menu Icon"
            width={30}
            height={30}
          />
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center gap-5 bg-[#1A3129] lg:bg-transparent w-full lg:w-auto absolute lg:static top-16 lg:top-auto left-0 lg:left-auto px-4 lg:px-0 py-5 lg:py-0 z-10`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 font-bold list-none text-center w-full lg:w-auto">
            {['Home', 'About', 'Team', 'Blog'].map((item) => (
              <li key={item} className="w-full">
                <Link href={`/${item.toLowerCase()}`} className="text-white hover:text-[#CBEA7B] text-lg px-4 py-2 transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
