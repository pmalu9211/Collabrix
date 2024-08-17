import { Button } from "@/components/ui/button";
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

const EmptyOrg = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center -translate-y-10 -translate-x-6">
      <Image
        src={"./elements.svg"}
        alt="empty"
        width={200}
        height={200}
        className="rotate-90"
      />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-md mt-2">
        Create an organization to get started
      </p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent p-0 border-none max-w-[480px]">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
