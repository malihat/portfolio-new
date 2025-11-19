import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D2931] text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Maliha Tanweer</h2>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/malihat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#f7b449] transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/malihat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#f7b449] transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:malihat@example.com"
            className="text-xl hover:text-[#f7b449] transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm opacity-80">
        Designed & Built by <span className="text-[#f7b449] font-medium">Maliha Tanweer</span>
      </div>
    </footer>
  );
};

export default Footer;