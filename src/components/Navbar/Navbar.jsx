import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="fixed w-full z-20"> 
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow-lg z-20 ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img src={menu_icon} onClick={()=> setSidebar(prev => prev === false ? true : false)} alt="Menu" className="h-6" />
        <Link to="/">
        <img src={logo} alt="Logo" className="h-8" />
        </Link>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 justify-center items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-60 py-1 pl-8 pr-4 bg-gray-100 rounded-full focus:outline-none"
          // Adjusted width to medium size for medium screens
        />
        <img
          src={search_icon}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <img src={upload_icon} alt="Upload" className="h-8" />
        <img src={more_icon} alt="More" className="h-8" />
        <img src={notification_icon} alt="Notification" className="h-8" />
        <img src={profile_icon} alt="Profile" className="h-8 rounded-full" />
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
