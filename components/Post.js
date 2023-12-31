import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
function Post({ id, name, email, image, message, timestamp, postImage }) {
  console.log(name, image, timestamp);
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt={name}
            className="rounded-full"
          />

          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image alt={name} src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className='inputIcon rounded-b-2xl'>
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className='inputIcon rounded-none'>
          <ChatAltIcon className="h-4 " />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className='inputIcon rounded-b-2xl'>
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
