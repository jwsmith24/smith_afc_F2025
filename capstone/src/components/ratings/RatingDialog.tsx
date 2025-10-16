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
import RatingsTable from "@/components/ratings/RatingsTable.tsx";
import { useRatings } from "@/hooks/useRatings.ts";
import { useState } from "react";
import RatingForm from "@/components/ratings/RatingForm.tsx";
import type { Rating } from "@/types/Rating.ts";

interface RatingDialogProps {
  widgetName: string;
  widgetId: number;
  refetchCards: () => void;
}

export default function RatingDialog({
  widgetName,
  widgetId,
  refetchCards,
}: RatingDialogProps) {
  const { data: ratings, loading, error, refetch } = useRatings(widgetId);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [activeRating, setActiveRating] = useState<Rating>();

  const handleClick = (rating: Rating) => {
    console.log("setting active rating to: ", rating);
    setActiveRating(rating);
  };

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
        <RatingsTable
          ratings={ratings}
          loading={loading}
          error={error}
          handleClick={handleClick}
          activeRating={activeRating}
        />
        <DialogFooter>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
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
              <RatingForm
                widgetId={widgetId}
                widgetName={widgetName}
                onSuccess={() => {
                  void refetch();
                  setAddOpen(false);
                  refetchCards();
                }}
              />
            </DialogContent>
          </Dialog>
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <Button
                className={`bg-slateGray hover:bg-limeGlow hover:text-black cursor-pointer 
                  ${!activeRating ? "hidden" : ""}`}
              >
                Edit Rating
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>BrightForge</DialogTitle>
                <DialogDescription>
                  Browse ratings for {widgetName}
                </DialogDescription>
              </DialogHeader>
              <RatingForm
                widgetId={widgetId}
                widgetName={widgetName}
                onSuccess={() => {
                  void refetch();
                  setEditOpen(false);
                  refetchCards();
                }}
                editMode={true}
                activeRating={activeRating}
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
