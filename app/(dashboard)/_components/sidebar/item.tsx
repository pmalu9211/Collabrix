"use client";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface ItemProps {
  name: string;
  imageUrl: string;
  id: string;
}

const Item = ({ name, imageUrl, id }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;
  const onClick = () => {
    if (!setActive) {
      return;
    }
    setActive({ organization: id });
  };
  return (
    <div className="aspect-square">
      <Hint label={name} side="right" align="end" sideOffset={10}>
        <Image
          // fill
          width={60}
          height={60}
          alt={name}
          src={imageUrl}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-50 hover:opacity-100",
            isActive && "opacity-100"
          )}
        ></Image>
      </Hint>
    </div>
  );
};

export default Item;
