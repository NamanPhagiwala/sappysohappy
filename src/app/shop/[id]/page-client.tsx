"use client";
import FilterTab from "@/app/_components/home/filter-tabs";
import ShopCard, { ShopCardProps } from "@/app/_components/home/shop-card";
import { Button, Image } from "@nextui-org/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const ShopDetailsClient = () => {
  const cities = ["jaipur", "bangalore", "mumbai"];
  const shops: ShopCardProps[] = [
    { img: [""], title: "1", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "2", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "3", tags: ["jewelry", "becklace", "etc"] },
    { img: [""], title: "4", tags: ["jewelry", "becklace", "etc"] },
  ];
  return (
    <div className="grid gap-10">
      <div className="flex gap-5">
        <div className="rounded-3xl shrink-0 border-2 border-black">
          <Image
            src={"https://i0.wp.com/erria.xyz/wp-content/uploads/2023/04/JongjinPark_featured.jpg?w=2400&ssl=1"}
            style={{ objectFit: "contain", borderRadius: 24 }}
            alt="failed"
            width={570}
            height={570}
          />
        </div>
        <div className="flex flex-col shrink gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-4xl uppercase"> elllieee</div>
            <div className="text-2xl capitalize"> Jaipur</div>
          </div>
          <div className="text-3xl text-wrap">
            Ellie Sweeney is an embroidery artist and designer whose work toes the line between traditional craft and
            digital reinvention with colour and process at the core of her work, she explores a deconstruct and re-make
            approach often creating a complex range of colored and textured layers.
          </div>
          <div className="flex gap-6">
            <Button className="border-2 text-xl px-5 py-5 capitalize rounded-none hover:bg-brand-primary hover:bg-opacity-60 border-brand-primary bg-transparent">
              <BsInstagram /> Instagram
            </Button>
            <Button className="border-2 px-5 py-5 text-xl capitalize rounded-none hover:bg-brand-primary hover:bg-opacity-60 border-brand-primary bg-transparent">
              <CgWebsite /> Website
            </Button>
          </div>
        </div>
        {/* <div className="text-lg">{title}</div>
      <div className="flex flex-wrap gap-1">
        {tags &&
          tags?.length > 1 &&
          tags.map((tag) => (
            <div className="bg-brand-primary bg-opacity-60 capitalize text-sm px-4 py-2" key={tag}>
              {tag}
            </div>
          ))}
      </div> */}
      </div>
      <div className="flex gap-10">
        <div className="rounded-3xl shrink-0 border-2 border-black">
          <Image
            src={"https://i0.wp.com/erria.xyz/wp-content/uploads/2023/04/JongjinPark_featured.jpg?w=2400&ssl=1"}
            style={{ objectFit: "contain", borderRadius: 24 }}
            alt="failed"
            width={366}
            height={366}
          />
        </div>
        <div className="rounded-3xl shrink-0 border-2 border-black">
          <Image
            src={"https://i0.wp.com/erria.xyz/wp-content/uploads/2023/04/JongjinPark_featured.jpg?w=2400&ssl=1"}
            style={{ objectFit: "contain", borderRadius: 24 }}
            alt="failed"
            width={366}
            height={366}
          />
        </div>
        <div className="rounded-3xl shrink-0 border-2 border-black">
          <Image
            src={"https://i0.wp.com/erria.xyz/wp-content/uploads/2023/04/JongjinPark_featured.jpg?w=2400&ssl=1"}
            style={{ objectFit: "contain", borderRadius: 24 }}
            alt="failed"
            width={366}
            height={366}
          />
        </div>
      </div>
      <div className="flex text-lg gap-4 items-center border-b-2 pb-10 border-brand-primary">
        Explore More in :
        <FilterTab
          type={cities}
          styles="px-5 bg-brand-primary bg-opacity-60 py-3 text-base capitalize rounded-none hover:bg-brand-gray hover:bg-opacity-60"
        />
      </div>
      <div className="grid gap-5">
        <div className="text-3xl">Related Posts: </div>
        <div className="flex gap-10 flex-wrap shrink-0">
          {shops?.map((shop) => <ShopCard key={shop.title} {...shop} />)}
        </div>
        {/* <Pagination
          loop
          className="justify-self-end"
          showControls
          color="success"
          // classNames={{ item: "active:bg-brand-primary" }}
          total={totalPages}
          initialPage={1}
          onChange={(val) => change(val)}
        /> */}
      </div>
    </div>
  );
};

export default ShopDetailsClient;
