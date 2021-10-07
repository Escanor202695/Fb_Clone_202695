import { useSession } from "next-auth/client";
import Image from "next/image";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { db } from "../firebase";
import { doc, setDoc,Timestamp } from "firebase/firestore"; 

function InputBox(props) {
  const [session] = useSession();
  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if(!inputRef.current.value) return;

    setDoc(doc(db,"posts",session.user.email), { 
      message:inputRef.current.value,
      image:session.user.image,
      email:session.user.email,
      name:session.user.name,
      timestamp:"20 Dec 2020",
    });

    console.log("hello");

  };

  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md text-gray-500
    font-medium mt-6"
    >
      <div className="flex space-x-4 px-4 py-2 pb-4 items-center border-b-2 border-gray-100">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind , ${session.user.name}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-around m-2 mt-4">
        <div className="flex cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500 mr-2" />
          <p>Live Video</p>
        </div>
        <div className="flex cursor-pointer">
          <EmojiHappyIcon className="h-7 text-yellow-300 mr-2" />
          <p>Feeling/Activity</p>
        </div>
        <div className="flex cursor-pointer">
          <CameraIcon className="h-7 text-green-300 mr-2" />
          <p>Live Video</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
