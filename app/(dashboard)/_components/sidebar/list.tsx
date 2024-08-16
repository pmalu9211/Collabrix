"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";
import { Hint } from "@/components/hint";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <>
      <ul className="space-y-4">
        {userMemberships.data?.map((membership) => (
          // <Hint
          //   key={membership.organization.id}
          //   label={membership.organization.name}
          //   side="right"
          // >
          <Item key={membership.organization.id} {...membership.organization} />
          // {/* </Hint> */}
        ))}
      </ul>
    </>
  );
};

export default List;
