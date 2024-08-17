import Image from "next/image";

const EmptyFav = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center -translate-y-10 -translate-x-8">
      <Image src={"./empty-fav.svg"} alt="empty" width={200} height={200} />
      <h2 className="text-2xl font-semibold">No favorite board</h2>
      <p className="text-muted-foreground text-md mt-2">
        Add something to you favorite
      </p>
    </div>
  );
};

export default EmptyFav;
