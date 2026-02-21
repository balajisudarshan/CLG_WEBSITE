import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#0b3d91] text-white text-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaPhoneAlt className="text-xs"/>
            <span className="tracking-wide">8985382247</span>
          </div>

          <div className="hidden md:flex items-center gap-2 hover:text-yellow-300 transition">
            <FaPhoneAlt className="text-xs"/>
            <span className="tracking-wide">8985159547</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-gray-200">
            <span className="text-xs">✉</span>
            <span className="tracking-wide">ist@nbkrist.org</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="flex items-center gap-2 hover:text-yellow-300 transition">
            <HiAcademicCap className="text-lg"/>
            <span className="font-medium">Alumni</span>
          </button>

          <div className="h-4 w-[1px] bg-white/40"></div>

          <button className="flex items-center gap-2 hover:text-yellow-300 transition">
            <PiStudent className="text-lg"/>
            <span className="font-medium">Student Login</span>
          </button>

        </div>

      </div>

    </div>
  )
}

export default TopHeader