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
import { toast } from "sonner";

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
  const {
    data: ratings,
    loading,
    error,
    refetch,
    removeRating,
  } = useRatings(widgetId);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [activeRating, setActiveRating] = useState<Rating>();

  const handleClick = (rating: Rating) => {
    if (rating.id === activeRating?.id) {
      setActiveRating(undefined);
    } else {
      setActiveRating(rating);
    }
  };

  const handleDelete = async () => {
    if (!activeRating) return;

    if (!activeRating.id) {
      toast.error("Current rating does not have a valid id");
      return;
    }

    await removeRating(widgetId, activeRating.id);
    setActiveRating(undefined);
    await refetch();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Rating successfully deleted");
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
            <Button
              className={
                "bg-slateGray hover:bg-limeGlow hover:text-black cursor-pointer"
              }
              onClick={() => setAddOpen(true)}
            >
              Add Rating
            </Button>
            <Button
              className={`bg-slateGray hover:bg-forgeOrange hover:text-black cursor-pointer 
                  ${!activeRating ? "hidden" : ""}`}
              disabled={!activeRating}
              onClick={() => setEditOpen(true)}
            >
              Edit Rating
            </Button>
            <Button
              className={`bg-slateGray hover:bg-errorRed  cursor-pointer 
                  ${!activeRating ? "hidden" : ""}`}
              disabled={!activeRating}
              onClick={() => handleDelete()}
            >
              Delete Rating
            </Button>

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
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
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
    </>
  );
}
