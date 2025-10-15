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
import RatingsTable from "@/components/RatingsTable.tsx";
import { useRatings } from "@/hooks/useRatings.ts";
import { useState } from "react";
import AddRatingForm from "@/components/AddRatingForm.tsx";

interface RatingDialogProps {
  widgetName: string;
  widgetId: number;
}

export default function RatingDialog({
  widgetName,
  widgetId,
}: RatingDialogProps) {
  const { data: ratings, loading, error, refetch } = useRatings(widgetId);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={
            "cursor-pointer bg-brightSilver hover:bg-limeGlow hover:opacity-85 text-black"
          }
        >
          Ratings
        </Button>
      </DialogTrigger>
      <DialogContent className={""}>
        <DialogHeader>
          <DialogTitle>Ratings</DialogTitle>
          <DialogDescription>Ratings for {widgetName}</DialogDescription>
        </DialogHeader>
        <RatingsTable ratings={ratings} loading={loading} error={error} />
        <DialogFooter>
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button
                className={
                  "bg-slateGray hover:bg-limeGlow hover:text-black cursor-pointer"
                }
              >
                Add Rating
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>BrightForge</DialogTitle>
                <DialogDescription>
                  Browse ratings for {widgetName}
                </DialogDescription>
              </DialogHeader>
              <AddRatingForm
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
