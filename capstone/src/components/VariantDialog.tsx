import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import WidgetVariantsTable from "@/components/WIdgetVariantsTable.tsx";

interface VariantDialogProps {
  widgetName: string;
  widgetId: number;
}

export default function VariantDialog({
  widgetName,
  widgetId,
}: VariantDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={
            "cursor-pointer bg-limeGlow hover:bg-limeGlow hover:opacity-85 text-black"
          }
        >
          View Variants
        </Button>
      </DialogTrigger>
      <DialogContent className={""}>
        <DialogHeader>
          <DialogTitle>Variant</DialogTitle>
          <DialogDescription>
            These are the variants of {widgetName}
          </DialogDescription>
        </DialogHeader>
        <WidgetVariantsTable widgetId={widgetId} />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className={
                "bg-electricBlue hover:bg-electricBlue cursor-pointer hover:opacity-95"
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
