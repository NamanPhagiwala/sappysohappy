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
      <div className="flex bg-brand-bg">
        <div className="flex h-full flex-1 flex-col">
          <Header />
          <div className="max-w-[100vw]">{children}</div>
          <Footer />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default LayoutProvider;
