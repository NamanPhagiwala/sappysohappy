"use router";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { NavItemsType, navItems } from "./component/navItems";
import { withBasePath } from "@/utils/helpers";
import { useModalStore } from "@/store/modal";
import { IoSearchCircleOutline } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const { openModal } = useModalStore();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const openContactUsModal = () => {
    setIsMenuOpen(false);
    openModal("contactUs");
  };

  const pushToUrl = (url: string) => {
    setIsMenuOpen(false);
    router.push(url);
  };
  return (
    // <div className="flex px-[10%] flex-row items-center justify-between py-6 md:px-[10%] md:py-6">
    //   <Image
    //     className="w-max-[100px] w-[240px] cursor-pointer"
    //     src="https://i0.wp.com/erria.xyz/wp-content/uploads/2023/06/ERRIA_Logo_Black_Final-01.png?w=1381&ssl=1"
    //     alt="Company Name"
    //     style={{ objectFit: "contain" }}
    //     onClick={() => router.push(`/`)}
    //   />
    //   <div>A directory of creatives working between craft, art, and design.</div>
    //   <div className="hidden md:block">
    //     {/* <div className="flex items-center justify-center">
    //       {navItems?.map((item: NavItemsType) => {
    //         return (
    //           <div
    //             key={item.id}
    //             className="mr-[20px] inline-block cursor-pointer text-lg text-white transition-colors duration-200 ease-in-out hover:text-brand-primary"
    //           >
    //             {item.name === "Contact Us" ? (
    //               <div onClick={() => openModal("contactUs")}>{item.name}</div>
    //             ) : (
    //               <Link href={item.route}>{item.name}</Link>
    //             )}
    //           </div>
    //         );
    //       })}
    //     </div> */}
    //     <input type="text" placeholder="Search" />
    //   </div>
    // </div>
    <Navbar shouldHideOnScroll className="px-[10%] py-6 justify-between">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4 cursor-pointer" onClick={() => router.push(`/`)}>
          {/* <Image
            className="w-max-[100px] w-[240px] cursor-pointer"
            src="https://i0.wp.com/erria.xyz/wp-content/uploads/2023/06/ERRIA_Logo_Black_Final-01.png?w=1381&ssl=1"
            alt="Company Name"
            style={{ objectFit: "contain" }}
            onClick={() => router.push(`/`)}
          /> */}
          <p className="hidden sm:block font-bold text-inherit">Sappy So Happy</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<IoSearchCircleOutline size={18} />}
          type="search"
        />
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
