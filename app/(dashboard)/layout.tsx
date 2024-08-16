import { RedirectToUserProfile, UserButton } from "@clerk/nextjs";
import SideBar from "./_components/sidebar/page";
import OrgSidebar from "./_components/org-sidebar";
import Navbar from "./_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar></Navbar>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
