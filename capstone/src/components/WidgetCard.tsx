import type { Widget } from "@/types/Widget.ts";
import VariantDialog from "@/components/VariantDialog.tsx";
import RatingDialog from "@/components/RatingDialog.tsx";

interface WidgetCardProps {
  widget: Widget;
}
export default function WidgetCard({ widget }: WidgetCardProps) {
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
            src="/src/assets/react.svg"
            alt="widget image"
            className={"w-[80px]"}
          />
          <div className={"flex gap-2"}>
            <RatingDialog widgetName={widget.name} widgetId={widget.id!} />
            <VariantDialog widgetName={widget.name} widgetId={widget.id!} />
          </div>
        </section>
      </article>
    </>
  );
}
