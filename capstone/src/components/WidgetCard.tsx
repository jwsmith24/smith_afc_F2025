import type { Widget } from "@/types/Widget.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <p>Total Quantity: {widget.totalQuantity ?? "Not Available"}</p>
        <p className={"font-bold"}>
          Avg Rating: {widget.rating ?? "Not rated yet"}
        </p>

        <section className={"flex justify-between"}>
          <img src="/src/assets/react.svg" alt="widget image" />
          <Dialog>
            <DialogTrigger>
              <Button
                className={
                  "cursor-pointer bg-limeGlow hover:bg-limeGlow hover:opacity-85 text-black"
                }
              >
                View Variants
              </Button>
            </DialogTrigger>
            <DialogContent className={""}>
              <DialogHeader>
                <DialogTitle>Variant</DialogTitle>
                <DialogDescription>
                  These are the variants of {widget.name}
                </DialogDescription>
              </DialogHeader>
              <article>hi</article>
              <DialogFooter>
                <DialogClose>
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
        </section>
      </article>
    </>
  );
}
