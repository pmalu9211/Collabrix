"use client";

import EmptyBoard from "./empty-boards";
import EmptyFav from "./empty-fav";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //todo get boards
  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favorite) return <EmptyFav />;

  if (!data?.length) return <EmptyBoard />;
  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
