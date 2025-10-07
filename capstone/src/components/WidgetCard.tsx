import type { Widget } from "@/types/Widget.ts";
import { Button } from "@/components/ui/button.tsx";

interface WidgetCardProps {
  widget: Widget;
}
export default function WidgetCard({ widget }: WidgetCardProps) {
  return (
    <>
      <div
        className={
          "bg-midnightSteel text-brightSilver shadow-xl p-4 rounded-xl  border grid gap-4"
        }
      >
        <h2>{widget.name}</h2>
        <p className={"italic"}>{widget.description}</p>
        <p className={"font-bold"}>
          Avg Rating: {widget.rating ?? "Not rated yet"}
        </p>
        <section className={"flex justify-between"}>
          <img src="/src/assets/react.svg" alt="widget image" />
          <Button
            className={
              "cursor-pointer bg-limeGlow hover:bg-limeGlow hover:opacity-85 text-black"
            }
          >
            View Variants
          </Button>
        </section>
      </div>
    </>
  );
}
