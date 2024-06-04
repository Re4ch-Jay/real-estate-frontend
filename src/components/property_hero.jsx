import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/heroBackground.png';
import searchIcon from "@/assets/icons/search.png";
import Search from "@/components/search";

const PropertyHero = () => {

  return (
    <section className="flex flex-col w-full h-screen ">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
      />
      <div className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <button className="hidden lg:block bg-orange-600 hover:bg-orange-500 px-2 py-1 rounded-2xl text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
            Real Estate
          </button>
          <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize">
            find real estate
            <br /> that suits you
          </h1>
            <div className="hidden sm:flex mt-24 justify-center items-center">
                <Search/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
