import React from "react";
import { useSession } from "next-auth/client";
import SidebarRow from "./Reusable/SidebarRow";
import { CalendarIcon, DesktopComputerIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/outline";
import { BookmarkIcon, ChevronDownIcon, ClockIcon, SaveIcon, UserGroupIcon } from "@heroicons/react/solid";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:mid-w-[300px] ">
      <SidebarRow
        loader={() => session.user.image}
        src={session.user.image}
        title={session.user.name}
      />
      <SidebarRow Icon={UsersIcon} title="Users" />
      <SidebarRow Icon={UserGroupIcon} title="User Group" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Events"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>      
    </div>
  );
}

export default Sidebar;
