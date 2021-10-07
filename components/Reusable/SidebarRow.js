import React from "react";
import Image from 'next/image';

function SidebarRow({ src, Icon, title,loader }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && <Image loader={loader} src={src} width={30} height={30} layout="fixed" className="rounded-full"/>}
      {Icon && <Icon className="h-8 w-8 text-blue-500"/>}
      <p className="hidden md:inline-flex font-medium ml-3">{title}</p>
    </div>
  );
}

export default SidebarRow;
