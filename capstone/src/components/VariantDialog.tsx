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
import CreateVariantForm from "@/components/CreateVariantForm.tsx";
import { useVariants } from "@/hooks/useVariants.ts";
import { useState } from "react";

interface VariantDialogProps {
  widgetName: string;
  widgetId: number;
}

export default function VariantDialog({
  widgetName,
  widgetId,
}: VariantDialogProps) {
  const { data: variants, loading, error, refetch } = useVariants(widgetId);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={
            "cursor-pointer bg-limeGlow hover:bg-limeGlow hover:opacity-85 text-black"
          }
        >
          Variants
        </Button>
      </DialogTrigger>
      <DialogContent className={""}>
        <DialogHeader>
          <DialogTitle>Variant</DialogTitle>
          <DialogDescription>
            These are the variants of {widgetName}
          </DialogDescription>
        </DialogHeader>
        <WidgetVariantsTable
          variants={variants}
          loading={loading}
          error={error}
        />
        <DialogFooter>
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button
                className={
                  "bg-limeGlow hover:bg-limeGlow cursor-pointer hover:opacity-85"
                }
              >
                Add Variant
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>BrightForge</DialogTitle>
                <DialogDescription>
                  Reimagine {`${widgetName}`}
                </DialogDescription>
              </DialogHeader>
              <CreateVariantForm
                widgetId={widgetId}
                widgetName={widgetName}
                onSuccess={() => {
                  void refetch();
                  setFormOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>

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
