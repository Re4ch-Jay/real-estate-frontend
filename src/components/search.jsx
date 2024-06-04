import Image from "next/image";
import searchIcon from "@/assets/icons/search.png";
import React from "react";

export default function Search() {
    return <div className=" hidden sm:flex">
        <Image src={searchIcon} alt="Menu" className="w-4 h-4 self-center"/>
        <input
            type="text"
            placeholder="Search"
            maxLength="20"
            className="w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
    </div>
}