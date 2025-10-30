import type { Widget } from "@/types/Widget.ts";
import VariantDialog from "@/components/variants/VariantDialog.tsx";
import RatingDialog from "@/components/ratings/RatingDialog.tsx";
import { useEffect } from "react";

interface WidgetCardProps {
  widget: Widget;
  refetch: () => void;
}
export default function WidgetCard({ widget, refetch }: WidgetCardProps) {
  useEffect(() => {
    console.log("current widget", widget);
  }, []);

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

        <section className={"flex justify-between items-center p-2"}>
          <img
            src={
              widget.primaryImageFileName
                ? `http://localhost:8080/api/images/${widget.primaryImageFileName}`
                : "/src/assets/react.svg"
            }
            alt={widget.name}
            className={"w-[80px] rounded-lg object-cover"}
          />
          <div className={"flex gap-2"}>
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
          </div>
        </section>
      </article>
    </>
  );
}
