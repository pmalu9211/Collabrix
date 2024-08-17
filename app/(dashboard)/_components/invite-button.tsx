import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className=" h-4 w-4 m-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-none ">
        <OrganizationProfile
          routing="hash"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                height: "100%",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
