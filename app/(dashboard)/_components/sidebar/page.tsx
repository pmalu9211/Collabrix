import List from "./list";
import NewButton from "./newbutton";

const SideBar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-[#787CF5] h-full w-[60px] flex p-3 flex-col gap-y-4 text-white ">
      <List />
      <NewButton />
    </aside>
  );
};

export default SideBar;
