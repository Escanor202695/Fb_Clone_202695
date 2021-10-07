import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  PlayIcon,
  ChatIcon,
  BellIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  HomeIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./Reusable/HeaderIcon";
import {signOut,useSession} from "next-auth/client";

function Header(props) {
  const [session] = useSession();
  const myLoader=({src})=>{
    return session.user.image;
  }

  return (
    <div className="flex sticky top-0 z-50 bg-white shadow-md p-2 lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image src="/images/fb.png" height={40} width={40} layout="fixed" />
        <div className="flex bg-gray-200 items-center p-2 rounded-full ml-2
        border-2 border-white hover:border-blue-500">
          <SearchIcon className="h-5 text-gray-600"/>
          <input
            className="flex ml-2 hidden md:inline-flex items-center bg-transparent outline-none
            placeholder-gray-500 flex-shrink w-600"
            type="text"
            placeholder="Seach Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex flex-grow items-center justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          loader={myLoader}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          objectfit="contain"
        />
        <p className="hidden xl:inline-flex whitespace-nowrap pr-3 font-semibold">Sakib Chowdhury</p>
        <ViewGridIcon className="Icon" />
        <ChatIcon className="Icon" />
        <BellIcon className="Icon" />
        <ChevronDownIcon className="Icon" />
      </div>
    </div>
  );
}

export default Header;
