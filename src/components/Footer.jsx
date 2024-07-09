import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-indigo-900 py-5 items-center text-white">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-sm text-white ">
        All Right Reserved. Copyright @Blogger 2024
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image
          src={assets.twitter_icon}
          alt=""
          width={40}
          className="ml-2 mr-2"
        />
        <Image src={assets.googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
