import React from "react";
import Image from "next/image";

function Contact({ name, src }) {
  return (
    <div className="flex items-center space-x-3 mb-2
     relative hover:bg-gray-200 cursor-pointer p-2 
     rounded-x;">
      <Image
        src={src}
        className="rounded-full"
        objectFit="cover"
        layout="fixed"
        width={50}
        height={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
