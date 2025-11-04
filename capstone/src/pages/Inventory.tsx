import WidgetCard from "@/components/widgets/WidgetCard.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useWidgets } from "@/hooks/useWidgets.ts";
import CreateWidgetDialog from "@/components/widgets/CreateWidgetDialog.tsx";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

export default function Inventory() {
  const backToTop = () => {
    const top = document.getElementById("navBar");
    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
    }
    setShowBackToTop(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: widgets, loading, error, refetch } = useWidgets();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [filter, setFilter] = useState("");

  const handleFilter = async (value: string) => {
    setFilter(value.toLowerCase());
  };

  return (
    <div className={"flex flex-col bg-slateGray"}>
      <section
        className={"p-4 border-b sticky top-0 bg-slateGray z-10 flex gap-4"}
      >
        <CreateWidgetDialog onWidgetCreated={refetch} />
        <span>
          <Label className={" text-white"}>
            Filter
            <Input
              type={"text"}
              onChange={(event) => handleFilter(event.target.value)}
            />
          </Label>
        </span>
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
        {loading && widgets.length > 0 && (
          <div className="text-center text-sm text-slate-400">
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            <span>Updating widgets...</span>
          </div>
        )}
        {error && (
          <div>
            {error.name}: {error.message}
          </div>
        )}
        {!loading && !error && widgets?.length === 0 && (
          <div>Add some widgets</div>
        )}
        {widgets
          ?.filter((widget) => widget.name.toLowerCase().includes(filter))
          .map((widget, index) => (
            <WidgetCard
              widget={widget}
              key={widget.id ?? `${widget.name}-${index}`}
              refetch={refetch}
            />
          ))}
      </div>
      <section className={"flex items-center justify-center p-2"}>
        <Button
          className={`cursor-pointer transition-opacity duration-300 ${showBackToTop ? "opacity-100" : "opacity-0"}`}
          onClick={backToTop}
        >
          Back to Top
        </Button>
      </section>
    </div>
  );
}
