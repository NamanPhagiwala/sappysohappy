"use router";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { NavItemsType, navItems } from "./component/navItems";
import { withBasePath } from "@/utils/helpers";
import { useModalStore } from "@/store/modal";

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
  const open = () => {
    openModal("loginModal");
    setIsMenuOpen(false);
  };
  return (
    <div className="flex flex-row items-center justify-between bg-black px-8 py-6 shadow-lg md:px-4 md:py-6">
      <Image
        className="w-[150px] cursor-pointer"
        src={withBasePath("/assets/HFLogo.svg")}
        alt="Company Name"
        width={32}
        height={32}
        onClick={() => router.push(`/`)}
      />
      <div className="hidden md:block">
        <div className="flex items-center justify-center">
          {navItems?.map((item: NavItemsType) => {
            return (
              <div
                key={item.id}
                className="mr-[20px] inline-block cursor-pointer text-lg text-white transition-colors duration-200 ease-in-out hover:text-brand-primary"
              >
                {item.name === "Contact Us" ? (
                  <div onClick={() => openModal("contactUs")}>{item.name}</div>
                ) : (
                  <Link href={item.route}>{item.name}</Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
