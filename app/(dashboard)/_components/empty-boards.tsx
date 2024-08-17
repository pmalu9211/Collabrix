import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";

const EmptyBoard = () => {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return null;
    }
    mutate({
      orgId: organization.id,
      title: "untitled",
    });
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center -translate-y-10 -translate-x-8">
      <Image src={"./note.svg"} alt="empty" width={200} height={200} />
      <h2 className="text-2xl font-semibold">No Boards</h2>
      <p className="text-muted-foreground text-md mt-2">Create new board</p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
