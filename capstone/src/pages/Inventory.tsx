import type { Widget } from "@/types/Widget.ts";
import WidgetCard from "@/components/WidgetCard.tsx";

export default function Inventory() {
  const mockInventory: Widget[] = [
    {
      name: "Test Product 1",
      description: "very cool thing",
    },
    {
      name: "Test Product 2",
      description: "another very cool thing",
    },
    {
      name: "Test Product 3",
      description: "yet another very cool thing",
    },
  ];

  return (
    <>
      {/*grid container*/}
      <div className={"grid h-full"}>
        {mockInventory.map((widget) => (
          <WidgetCard widget={widget} key={widget.id} />
        ))}
      </div>
    </>
  );
}
