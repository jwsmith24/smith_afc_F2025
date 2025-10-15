import type { Widget } from "@/types/Widget.ts";
import VariantDialog from "@/components/VariantDialog.tsx";

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
        <p className={"italic"}>{widget.description}</p>
        <p className={"font-bold"}>
          Avg Rating: {widget.averageRating ?? "Not rated yet"}
        </p>

        <section className={"flex justify-between"}>
          <img src="/src/assets/react.svg" alt="widget image" />
          <div>
            <VariantDialog widgetName={widget.name} />
          </div>
        </section>
      </article>
    </>
  );
}
