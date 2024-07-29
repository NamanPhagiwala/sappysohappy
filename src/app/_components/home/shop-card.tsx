import { withBasePath } from "@/utils/helpers";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import NextImage from "next/image";

export interface ShopCardProps {
  img: string[];
  title: string;
  tags: string[];
}
const ShopCard = ({ img, title, tags }: ShopCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-3xl">
        <Image
          src={"https://i0.wp.com/erria.xyz/wp-content/uploads/2023/04/JongjinPark_featured.jpg?w=2400&ssl=1"}
          style={{ objectFit: "contain", borderRadius: 24 }}
          loading="lazy"
          isZoomed
          className="border-2 border-black hover:border-2 hover:bg-brand-primary"
          alt="failed"
          width={275}
          height={275}
        />
      </div>
      <Link href={`/shop/${title}`} className="text-lg hover:text-brand-primary hover:text-opacity-60">
        {title}
      </Link>
      <div className="flex flex-wrap gap-1">
        {tags &&
          tags?.length > 1 &&
          tags.map((tag) => (
            <Link
              href={`/category/${tag}`}
              className="bg-brand-gray hover:bg-brand-primary hover:bg-opacity-60 capitalize text-sm px-4 py-2"
              key={tag}
            >
              {tag}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ShopCard;
