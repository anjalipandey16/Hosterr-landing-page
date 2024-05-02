import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex " >
      <div className="flex item-centre justify-center lg:flex-1 lg:order-2">
        <img src="./public/assets/Blue-Shape.svg" alt="1st image" className="-rotate-45 h-64 md:h-75 lg:h-[400px] "/>
        <img src="./public/assets/Pink-Shape.svg" alt="2nd image"  className="absolute -rotate-[15deg] h-64 md:h-75 lg:h-[400px]"/>
        <img src="./public/assets/Purple-Shape.svg" alt="3rd image" className="absolute -rotate-[15deg] h-64 md:h-75 lg:h-[400px]"/>
        <img src="./public/assets/Hero-model.png" alt="4th image" className="absolute h-64 md:h-75 lg:h-[400px]"/>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-400  ">with hoster get your website up and running in less than 5 minutes with competetive price and packages </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
            <input  className=" rounded-md px-4 py-3 placeholder:text-gray-400"type="email" placeholder="enter your email address"/>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">join waitlist</button>
        </form>
        <div className="flex gap-2">
            <img src="./public/assets/Checkmark.svg" alt="tick" />
            <p className="font-lato text-gray-400">No spam.ever.unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
