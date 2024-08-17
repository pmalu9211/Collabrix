"use client";

import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from "@clerk/nextjs";
import SearchInput from "./search_input";
import InviteButton from "./invite-button";

const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1 ">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1 w-full ">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "360px",
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
      </div>
      {/* {console.log("org", org)} */}
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};

export default Navbar;
