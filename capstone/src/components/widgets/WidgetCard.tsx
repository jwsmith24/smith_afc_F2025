import type { Widget } from "@/types/Widget.ts";
import VariantDialog from "@/components/variants/VariantDialog.tsx";
import RatingDialog from "@/components/ratings/RatingDialog.tsx";
import { useEffect } from "react";
import MediaDialog from "@/components/media/MediaDialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { deleteWidget } from "@/api/widgets.ts";
import { toast } from "sonner";

interface WidgetCardProps {
  widget: Widget;
  refetch: () => void;
}
export default function WidgetCard({ widget, refetch }: WidgetCardProps) {
  useEffect(() => {
    console.log("current widget", widget);
  }, []);

  const handleDelete = async () => {
    if (!widget) return;

    const choice = confirm(
      `WAIT! Are you sure you want to delete ${widget.name}? This is not a reversible action.`,
    );

    if (choice) {
      const result = await deleteWidget(widget.id!);

      if (result) {
        toast.success("Widget deleted!");
      } else {
        toast.error("Widget could not be deleted");
      }

      refetch();
    }
  };

  return (
    <>
      <article
        className={
          "bg-midnightSteel text-brightSilver shadow-xl p-4 rounded-xl  border grid gap-4"
        }
      >
        <h2>{widget.name}</h2>
        <p className={"italic break-words whitespace-normal line-clamp-3"}>
          {widget.description}
        </p>
        <p className={"font-bold"}>
          Avg Rating: {widget.averageRating ?? "Not rated yet"}
        </p>

        <section className={"flex justify-between items-center p-1 gap-2"}>
          <img
            src={
              widget.primaryImageFileName
                ? `http://localhost:8080/api/images/${widget.primaryImageFileName}`
                : "/src/assets/react.svg"
            }
            alt={widget.name}
            className={"w-[80px] rounded-lg object-cover"}
          />
          <div className={"grid gap-2 grid-rows-2 grid-cols-2"}>
            <RatingDialog
              widgetName={widget.name}
              widgetId={widget.id!}
              refetchCards={refetch}
            />
            <VariantDialog
              widgetName={widget.name}
              widgetId={widget.id!}
              refetchCards={refetch}
            />

            <MediaDialog widget={widget} refetchCards={refetch} />
            <Button
              onClick={handleDelete}
              className={
                "bg-slateGray hover:bg-errorRed hover:text-black cursor-pointer"
              }
            >
              Delete Widget
            </Button>
          </div>
        </section>
      </article>
    </>
  );
}
