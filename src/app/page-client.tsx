"use client";
import React, { useEffect, useMemo, useState } from "react";
import FilterTab from "./_components/home/filter-tabs";
import ShopCard, { ShopCardProps } from "./_components/home/shop-card";
import { Pagination } from "@nextui-org/react";

const DashboardPageClient = () => {
  const [totalPages, setTotalPages] = useState<number>(1);
  const fieldsPerPage = 8;
  const cities = [
    "jaipur",
    "bangalore",
    "mumbai",
    "jaipur",
    "bangalore",
    "mumbai",
    "jaipur",
    "bangalore",
    "mumbai",
    "jaipur",
    "bangalore",
    "mumbai",
  ];
  const shops: ShopCardProps[] = [
    { img: [""], title: "1", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "2", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "3", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "4", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "5", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "6", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "7", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "8", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "9", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "10", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "11", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "12", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "13", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "14", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "15", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "16", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "17", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "18", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "19", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "20", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "21", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "22", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "23", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "24", tags: ["jewelry", "becklace", "etc"] },
  ];
  const [data, setData] = useState<ShopCardProps[]>();
  useEffect(() => {
    setTotalPages(shops.length / 8);
    change(1);
  }, []);

  const territory = ["Furniture", "Ceramic", "Jewelry", "Glass", "Interior"];
  const change = (val: number) => {
    debugger;
    const indexOfLastField = val * fieldsPerPage;
    const indexOfFirstField = indexOfLastField - fieldsPerPage;
    const currentFields = shops.slice(indexOfFirstField, indexOfLastField);
    setData(currentFields);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-5">
        <div className="text-3xl">Explore By Location:</div>
        <FilterTab
          type={cities}
          styles="border-2 px-5 py-3 text-base capitalize rounded-none hover:bg-brand-primary hover:bg-opacity-60 border-brand-primary bg-transparent"
        />
      </div>
      <div className="grid gap-5">
        <div className="text-3xl">Explore By creative territory:</div>
        <FilterTab
          type={territory}
          styles="border-2 px-5 py-3 text-base capitalize rounded-none hover:bg-brand-primary hover:bg-opacity-60 border-brand-primary bg-transparent"
        />
      </div>
      <div className="grid gap-5">
        <div className="text-3xl">Random selection of the moment</div>
        <div className="flex gap-10 flex-wrap shrink-0">
          {data?.map((shop) => <ShopCard key={shop.title} {...shop} />)}
        </div>
        <Pagination
          loop
          className="justify-self-end"
          showControls
          color="success"
          // classNames={{ item: "active:bg-brand-primary" }}
          total={totalPages}
          initialPage={1}
          onChange={(val) => change(val)}
        />
      </div>
    </div>
  );
};

export default DashboardPageClient;
