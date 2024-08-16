"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, StarIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorite = searchParams.get("favorite");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[180px] pl-5 pt-5 ">
      <Link href={"/"}>
        <div
          className="flex items-center
       gap-x-2"
        >
          <Image src="./logo.svg" alt="logo" height={50} width={50} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Collabrix
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              height: "100%",

              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "8px",
              border: "2px solid #E2E8F0",
            },

            organizationPreviewAvatarBox: {
              width: "30px",
              height: "30px",
            },
            organizationPreviewTextContainer: {
              color: "blue-500",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          variant={!favorite ? "secondary" : "ghost"}
          asChild
          size={"lg"}
          className="font-normal justify-start px-4 w-full"
        >
          <Link href={"/?team=true"}>
            <LayoutDashboard className="h-4 w-4 mr-2"></LayoutDashboard>
            Team Boards
          </Link>
        </Button>
        <Button
          variant={favorite ? "secondary" : "ghost"}
          asChild
          size={"lg"}
          className="font-normal justify-start px-4 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorite: true },
            }}
          >
            <StarIcon className="h-4 w-4 mr-2"></StarIcon>
            Favorite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
