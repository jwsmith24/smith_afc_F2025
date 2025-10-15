import WidgetCard from "@/components/WidgetCard.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useWidgets } from "@/hooks/useWidgets.ts";
import CreateWidgetDialog from "@/components/CreateWidgetDialog.tsx";

export default function Inventory() {
  const backToTop = () => {
    const top = document.getElementById("navBar");
    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data: widgets, loading, error } = useWidgets();

  return (
    <div className={"flex flex-col bg-slateGray"}>
      <section className={"p-4 border-b sticky top-0 bg-slateGray z-10"}>
        <CreateWidgetDialog />
      </section>
      {/*grid container*/}
      <div
        className={
          "grid flex-1 gap-8 m-4 " +
          "grid-cols-1 " +
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 " +
          " overflow-y-auto"
        }
      >
        {loading && <div>Loading...</div>}
        {error && (
          <div>
            {error.name}: {error.message}
          </div>
        )}
        {!loading && !error && widgets?.length === 0 && (
          <div>Add some widgets</div>
        )}
        {!loading &&
          !error &&
          widgets?.length > 0 &&
          widgets.map((widget, index) => (
            <WidgetCard
              widget={widget}
              key={widget.id ?? `${widget.name}-${index}`}
            />
          ))}
      </div>
      <section className={"flex items-center justify-center p-2"}>
        <Button className={"cursor-pointer"} onClick={backToTop}>
          Back to Top
        </Button>
      </section>
    </div>
  );
}
