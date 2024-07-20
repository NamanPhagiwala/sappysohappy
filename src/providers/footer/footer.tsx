"use-client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { withBasePath } from "@/utils/helpers";
import { useModalStore } from "@/store/modal";

const Footer = () => {
  const { openModal } = useModalStore();
  const history = useRouter();

  return (
    <div className="flex flex-col justify-between bg-brand-black text-white md:grid md:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-6 p-16 px-0 md:items-baseline md:p-16">
        <Image
          className="w-[212px] md:w-[312px]"
          src={withBasePath("/assets/HFLogo.svg")}
          alt="Brand Logo"
          width={32}
          height={32}
          onClick={() => history.push("/")}
        />
        <p className="text-ellipsis px-5 text-lg md:p-0">Sample Text </p>
        <Button
          onClick={() => openModal("contactUs")}
          variant="solid"
          className="w-[50%] rounded-md bg-brand-primary text-sm text-white md:w-[25%]"
        >
          Drop a line
        </Button>
      </div>
      <div className="ml-7 flex h-[331px] flex-col justify-around gap-6 rounded-tl-[130px] border border-b-0 border-r-0 border-brand-primary p-16 md:ml-0 md:mt-16 md:h-[377px] md:flex-row md:gap-32 md:p-16">
        <div className="flex flex-col gap-4">
          <div className="uppercase text-brand-primary">Contact</div>
          <div className="text-base uppercase">Email</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="uppercase text-brand-primary">Follow Us</div>
          <div className="flex gap-2">
            <Link href={""} target="_blank">
              <IoLogoInstagram className="size-8 rounded-full border border-brand-primary p-1" />
            </Link>
            <Link href={""} target="_blank">
              <FaFacebook className="size-8 rounded-full border border-brand-primary p-1" />
            </Link>
            <Link href={""} target="_blank">
              <FaLinkedin className="size-8 rounded-full border border-brand-primary p-1" />
            </Link>
          </div>
        </div>
        <div className="text-[10px] text-[#ffffff80]">© Copyright-2024</div>
      </div>
    </div>
  );
};

export default Footer;
