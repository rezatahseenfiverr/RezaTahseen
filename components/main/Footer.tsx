import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <Link href="#sponsor" className="my-[15px] cursor-pointer">
              <span className="text-[15px]">Become Sponsor</span>
            </Link>
            <Link href="#about" className="my-[15px] cursor-pointer">
              <span className="text-[15px]">Learning about me</span>
            </Link>
            <a
              href="mailto:rezatahseenfiverr@gmail.com"
              className="my-[15px] cursor-pointer"
            >
              <span className="text-[15px]">rezatahseenfiverr@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Reza Tahseen 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
