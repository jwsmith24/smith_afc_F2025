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
import WidgetVariantsTable from "@/components/variants/WIdgetVariantsTable.tsx";
import VariantForm from "@/components/variants/VariantForm.tsx";
import { useVariants } from "@/hooks/useVariants.ts";
import { useState } from "react";
import type { WidgetVariant } from "@/types/WidgetVariant.ts";
import { toast } from "sonner";

interface VariantDialogProps {
  widgetName: string;
  widgetId: number;
  refetchCards: () => void;
}

export default function VariantDialog({
  widgetName,
  widgetId,
  refetchCards,
}: VariantDialogProps) {
  const {
    data: variants,
    loading,
    error,
    refetch,
    removeVariant,
  } = useVariants(widgetId);

  const [addFormOpen, setAddFormOpen] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);

  const [activeVariant, setActiveVariant] = useState<WidgetVariant>();

  const handleClick = (variant: WidgetVariant) => {
    console.log("setting active variant to: ", variant);
    setActiveVariant(variant);
  };

  const handleDelete = async () => {
    if (!activeVariant) return;

    if (!activeVariant.id) {
      toast.error("Current rating does not have a valid id");
      console.error("Current rating does not have a valid id: ", activeVariant);
      return;
    }

    await removeVariant(activeVariant.id);

    await refetch();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Variant succesfully removed");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={
              "cursor-pointer bg-brightSilver hover:bg-limeGlow hover:opacity-85 text-black"
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
            handleClick={handleClick}
          />
          <DialogFooter>
            <Button
              className={
                "bg-slateGray hover:bg-limeGlow hover:text-black cursor-pointer"
              }
              onClick={() => setAddFormOpen(true)}
            >
              Add Variant
            </Button>
            <Button
              className={`bg-slateGray hover:bg-forgeOrange hover:text-black cursor-pointer ${!activeVariant ? "hidden" : ""}`}
              disabled={!activeVariant}
              onClick={() => setEditFormOpen(true)}
            >
              Edit Variant
            </Button>
            <Button
              className={`bg-slateGray hover:bg-errorRed  cursor-pointer ${!activeVariant ? "hidden" : ""}`}
              disabled={!activeVariant}
              onClick={handleDelete}
            >
              Delete Variant
            </Button>

            <DialogClose asChild>
              <Button
                className={
                  "bg-slateGray hover:bg-electricBlue cursor-pointer hover:opacity-95"
                }
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={addFormOpen} onOpenChange={setAddFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>BrightForge</DialogTitle>
            <DialogDescription>Reimagine {`${widgetName}`}</DialogDescription>
          </DialogHeader>
          <VariantForm
            widgetId={widgetId}
            widgetName={widgetName}
            editMode={false}
            onSuccess={() => {
              void refetch();
              setAddFormOpen(false);
              refetchCards();
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={editFormOpen} onOpenChange={setEditFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>BrightForge</DialogTitle>
            <DialogDescription>Reimagine {`${widgetName}`}</DialogDescription>
          </DialogHeader>
          <VariantForm
            widgetId={widgetId}
            widgetName={widgetName}
            editMode={true}
            onSuccess={() => {
              void refetch();
              setAddFormOpen(false);
              refetchCards();
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
