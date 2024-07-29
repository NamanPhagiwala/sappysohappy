import { Button } from "@nextui-org/react";
import React from "react";

interface FilterTabProps {
  type: string[];
  styles: string;
}
const FilterTab = ({ type, styles }: FilterTabProps) => {
  return (
    <div className="flex gap-3 w-[50%] flex-wrap">
      {type?.map((x: string) => (
        <Button className={styles} key={x}>
          {x}
        </Button>
      ))}
    </div>
  );
};

export default FilterTab;
