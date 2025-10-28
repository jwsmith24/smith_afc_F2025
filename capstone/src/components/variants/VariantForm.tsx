import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  type VariantSchema,
  variantFormSchema,
  type WidgetVariant,
} from "@/types/WidgetVariant.ts";
import { createVariant, updateVariant } from "@/api/variants.ts";

const sizeOptions = ["Small", "Medium", "Large"];

interface VariantFormProps {
  onSuccess?: () => void;
  widgetId: number;
  widgetName: string;
  editMode?: boolean;
  variant?: WidgetVariant;
}

export default function VariantForm({
  onSuccess,
  widgetId,
  widgetName,
  editMode = false,
  variant,
}: VariantFormProps) {
  const form = useForm<VariantSchema>({
    resolver: zodResolver(variantFormSchema),
    defaultValues: {
      color: variant?.color ?? "#000000",
      size: (variant?.size as "Small" | "Medium" | "Large") ?? "Medium",
      quantity: variant?.quantity ?? 0,
    },
    mode: "onChange",
  });

  async function onSubmit(data: VariantSchema) {
    if (!editMode) {
      try {
        const variant = await createVariant(widgetId, data);
        console.log("New variant created: ", variant);
        toast.success(`New variant for ${widgetName} created!`);
        onSuccess?.();
      } catch (error) {
        toast.error("Failed to create variant.. please try again.");
        console.error(error);
      }
    } else {
      if (!variant?.id) return;
      try {
        await updateVariant(widgetId, variant.id, data);
        console.log("Variant updated!");
        toast.success("Variant updated!");
        onSuccess?.();
      } catch (error) {
        toast.error("Failed to updated variant");
        console.error(error);
      }
    }

    form.reset();
  }

  return (
    <Card className={"place-self-center w-full"}>
      <CardHeader>
        <CardTitle>{editMode ? "Edit" : "Add"} Variant</CardTitle>
      </CardHeader>
      <CardContent className={"grid gap-8"}>
        <form id={"create-widget-form"} onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name={"color"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-widget-form-color">
                    Color
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-widget-form-color"
                    aria-invalid={fieldState.invalid}
                    placeholder="What is the primary color?"
                    autoComplete="off"
                    type={"color"}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name={"size"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  orientation={"responsive"}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="create-widget-form-size">
                      Widget Size
                    </FieldLabel>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="create-widget-form-size"
                      aria-invalid={fieldState.invalid}
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {sizeOptions.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name={"quantity"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-widget-form-color">
                    {editMode ? "Set Quantity" : "Initial Quantity"}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-widget-form-color"
                    aria-invalid={fieldState.invalid}
                    placeholder={""}
                    autoComplete="off"
                    type={"number"}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Button
          type={"submit"}
          form={"create-widget-form"}
          className={"w-1/2 justify-self-end cursor-pointer"}
        >
          FORGE!
        </Button>
      </CardContent>
    </Card>
  );
}
