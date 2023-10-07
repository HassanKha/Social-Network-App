import React from "react";

import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  UserGroupIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
 // CalendarIcon
} from "@heroicons/react/outline";
import {
   CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from './SidebarRow';
function Sidebar() {
    const { data: session } = useSession()
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {/* <div>
        <Image
          src={session.user.imagesession.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p>{session.user.name}</p>
      </div> */}
      {/* <div></div> */}
<SidebarRow  src={session.user.image} title = {session.user.name} />
<SidebarRow Icon= {UsersIcon} title='Friends'/>
<SidebarRow Icon= {UserGroupIcon} title='Groups' />
<SidebarRow  Icon= {ShoppingBagIcon} title='Marketplace' />
<SidebarRow Icon= {DesktopComputerIcon} title='Watch' />
<SidebarRow Icon= {CalendarIcon} title='Events' />
<SidebarRow Icon= {ClockIcon} title='Memories' />
<SidebarRow Icon= {ChevronDownIcon} title='See More' />
      
    </div>
  );
}

export default Sidebar;
