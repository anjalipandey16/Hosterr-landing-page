<<<<<<< HEAD
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
const header = () => {
  return (
    <div className=" flex justify-between ">
      <div className="flex items-center justify-center gap-2 ">
        <img src="./public/assets/logo.svg " alt="" />
        <button className="rounded-2xl  bg-gradient-to-r from-orange-400 to bg-red-400 text-xs text-white px-2.5 py1.5   ">Hoster is Hiring</button>
        </div>
        <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
            <li>
                <a href="#">plans</a>
            </li>
            <li>
                <a href="#">Find domain</a>
            </li>
            <li>
                <a href="#">why hoster</a>
            </li>
        </ul>
        <div className="hidden: lg:flex justify-center items-center font-lato gap-6">
            <a href="#" className="text-gray-400 ">sign In</a>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
        </div>
      <div className="lg:hidden">
      <LiaBarsSolid />
      </div>
    </div>
  );
};

export default header;
=======
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
const header = () => {
  return (
    <div className=" flex justify-between ">
      <div className="flex items-center justify-center gap-2 ">
        <img src="./public/assets/logo.svg " alt="" />
        <button className="rounded-2xl  bg-gradient-to-r from-orange-400 to bg-red-400 text-xs text-white px-2.5 py1.5   ">Hoster is Hiring</button>
        </div>
        <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
            <li>
                <a href="#">plans</a>
            </li>
            <li>
                <a href="#">Find domain</a>
            </li>
            <li>
                <a href="#">why hoster</a>
            </li>
        </ul>
        <div className="hidden: lg:flex justify-center items-center font-lato gap-6">
            <a href="#" className="text-gray-400 ">sign In</a>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
        </div>
      <div className="lg:hidden">
      <LiaBarsSolid />
      </div>
    </div>
  );
};

export default header;
>>>>>>> 2423346 (Deployed website)
