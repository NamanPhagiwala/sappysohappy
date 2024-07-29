"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./footer/footer";
import Header from "./header/header";
// import { useUserStore } from "@/store/user";

interface LayoutProviderProps extends PropsWithChildren {}

const LayoutProvider = (props: LayoutProviderProps) => {
  const { children } = props;
  // // const { setUser } = useUserStore();
  // useEffect(() => {
  //   const storedData = localStorage.getItem("userDetails");
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     // setUser(parsedData);
  //   }
  // }, [setUser]);
  return (
    <NextUIProvider>
      <div className="flex py-10k h-min-screen">
        <div className="flex h-full flex-1 flex-col">
          <Header />
          <div className="max-w-[100vw] px-[10%] py-[3%]">{children}</div>
          <Footer />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default LayoutProvider;
