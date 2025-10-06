import type { Widget } from "@/types/Widget.ts";

interface WidgetCardProps {
  widget: Widget;
}
export default function WidgetCard({ widget }: WidgetCardProps) {
  return (
    <>
      <div className={"bg-midnightSteel shadow-xl"}>
        <p>{widget.name}</p>
        <p>{widget.description}</p>
      </div>
    </>
  );
}
