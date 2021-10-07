import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";
import Contact from "./Reusable/Contact";

function Widgets(props) {
  const contacts = [
    {
        name:"Sony Sangha",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name:"Elon Musk",
        src:"https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"

    },
    {
        name:"Jeff Bezos",
        src:"https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"

    },
    {
        name:"Mark Zuckerburg",
        src:"https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"

    },
    {
        name:"Sony Sangha",
        src:"https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"

    },

  ];
  return (
    <div className=" hidden lg:flex flex-col w-80 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5 ">
        <h2 className="text-xl font-medium pl-2">Contacts</h2>.
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.src} src={contact.profile} name={contact.name} />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
