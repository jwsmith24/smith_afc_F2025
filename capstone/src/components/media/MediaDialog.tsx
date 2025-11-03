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

import { Label } from "@/components/ui/label.tsx";

import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { type ChangeEvent, useState } from "react";
import { toast } from "sonner";
import type { Widget } from "@/types/Widget.ts";

interface MediaDialogProps {
  widget: Widget;
  refetchCards: () => void;
}

export default function MediaDialog({
  widget,
  refetchCards,
}: MediaDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("widgetId", widget.id!.toString());

    const response = await fetch(`http://localhost:8080/api/images/upload`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      refetchCards();
      toast.success("New image uploaded!");
      setOpen(false);
      setSelectedFile(null);
    } else {
      console.error("Image upload failed");
      toast.error("Image upload failed");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className={
              "cursor-pointer bg-brightSilver hover:bg-limeGlow hover:opacity-85 text-black"
            }
          >
            Update Image
          </Button>
        </DialogTrigger>
        <DialogContent className={""}>
          <DialogHeader>
            <DialogTitle>Upload Image</DialogTitle>
            <DialogDescription>
              Give {widget.name} a fresh look
            </DialogDescription>
          </DialogHeader>

          <div>
            <Label htmlFor={`widget-image-upload-${widget.id!}`}>
              Select an image
              <Input
                id={`widget-image-upload-${widget.id!}`}
                type={"file"}
                accept={"image/*"}
                onChange={handleFileChange}
              />
            </Label>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Image Preview"
                className={
                  "max-h-48 mt-3 rounded-lg shadow-lg place-self-center"
                }
              />
            )}
          </div>

          <DialogFooter>
            <Button
              className={
                "bg-slateGray hover:bg-limeGlow hover:text-black cursor-pointer"
              }
              onClick={handleUpload}
            >
              Upload Image
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
    </>
  );
}
