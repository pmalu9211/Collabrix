"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <Hint label="Create Organization" side="right">
        <DialogTrigger asChild>
          <div className="aspect-square">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 translate">
              <Plus className="text-white"></Plus>
            </button>
          </div>
        </DialogTrigger>
      </Hint>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
