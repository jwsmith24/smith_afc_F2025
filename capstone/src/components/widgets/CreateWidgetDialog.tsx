import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import CreateWidgetForm from "@/components/widgets/CreateWidgetForm.tsx";
import { useState } from "react";

interface CreateWidgetDialogProps {
  onWidgetCreated?: () => void;
}

export default function CreateWidgetDialog({
  onWidgetCreated,
}: CreateWidgetDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={"cursor-pointer  hover:opacity-85 "}>
          Create Widget
        </Button>
      </DialogTrigger>
      <DialogContent className={""}>
        <DialogHeader>
          <DialogTitle>BrightForge</DialogTitle>
        </DialogHeader>
        <CreateWidgetForm
          onSuccess={() => {
            onWidgetCreated?.(); // refetch widgets
            setOpen(false); // close dialog
          }}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className={
                "bg-slateGray hover:bg-slateGray cursor-pointer hover:opacity-95"
              }
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
