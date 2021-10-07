import React from "react";
import Image from "next/image";
import {ThumbUpIcon,ChatAltIcon,ShareIcon} from '@heroicons/react/outline';

function Post({caption , src , time}) {
  return (
    <div className="my-5 bg-white shadow-md rounded-xl">
      <div className="flex px-5 py-4">
        <Image
          src="/images/fb.png"
          width={45}
          height={45}
          objectFit="contain"
        />
        <div className="ml-3">
          <div className="font-medium text-lg text-black-500">Sakib Chowdhury</div>
          <div className="text-sm text-gray-500">{time}</div>
        </div>
      </div>
      <p className="px-5 pb-2 font-normal text-lg">{caption}</p>
      <div className="relative h-80">
        <Image src={`/images/${src}`} objectFit="cover" layout="fill" />
      </div>
      <div className="flex justify-between cursor-pointer py-3">
        <div className="postIconGroup">
          <ThumbUpIcon className="postIcon group-hover:text-blue-500"/>
          <div className="PostBtn group-hover:text-blue-500">like</div>
        </div>
        <div className="postIconGroup">
          <ChatAltIcon className="postIcon "/>
          <div className="PostBtn">comment</div>
        </div>
        <div className="postIconGroup">
          <ShareIcon className="postIcon"/>
          <div className="PostBtn">share</div>
        </div>
        
      </div>
    </div>
  );
}

export default Post;
