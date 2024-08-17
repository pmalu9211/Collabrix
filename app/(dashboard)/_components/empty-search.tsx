import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center -translate-y-10 -translate-x-8">
      <Image
        src={"./empty-search.svg"}
        alt="empty"
        width={200}
        height={200}
        className="-rotate-12"
      />
      <h2 className="text-2xl font-semibold">No result found</h2>
      <p className="text-muted-foreground text-md mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
