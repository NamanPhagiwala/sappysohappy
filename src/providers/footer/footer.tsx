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
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const { openModal } = useModalStore();
  const history = useRouter();

  return (
    <div className="flex flex-col items-center justify-center my-10 text-lg py-10 px-[10%] border-t-4 border-brand-primary border-opacity-60 gap-20 md:grid md:grid-cols-3">
      <div className="">
        Our goal is to democratize access to brilliant creative talent. This is why what we.ve brought into the world
        first is the Erria Directory. To learn more about our future goals, visit our about page.
      </div>
      <div className="">
        <strong>
          <span className="underline">
            <a href="http://www.erria.xyz/newsletter">Subscribe to our newsletter</a>
          </span>{" "}
        </strong>
        for weekly updates.
        <p className="gb-headline gb-headline-8c8766ac gb-headline-text">
          To be added to the directory,{" "}
          <span className="underline">
            <a rel="noreferrer noopener" href="https://forms.gle/u99DagUCgazye6Yg7" target="_blank">
              fill out this form.
            </a>
          </span>
        </p>
        <p className="gb-headline gb-headline-22d6bdbe gb-headline-text">
          <strong>Current Directory Size:</strong> 1,403
        </p>
      </div>
      <div className="flex gap-5 justify-self-end">
        <Link href={"https://www.instagram.com/sappysohappy/"} target="_blank">
          <BsInstagram />
        </Link>
        <Link href={"www.instagram.com"} target="_blank">
          {" "}
          <FaFacebook />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
