import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Field,
  FieldContent,
  FieldDescription,
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
} from "@/components/ui/select";
import { Button } from "@/components/ui/button.tsx";

const sizeOptions = ["small", "medium", "large"];

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Widget name must be at least 3 characters")
    .max(32, "Widget name cannot exceed 32 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(120, "Description cannot exceed 120 characters")
    .optional(),
  baseColor: z.string().min(3).max(32),
  size: z.enum(["small", "medium", "large"]),
  initialQuantity: z.number(),
});

export default function CreateWidgetForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      baseColor: "",
      size: "medium",
      initialQuantity: 0,
    },
    mode: "onChange",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as CSSProperties,
    });
  }

  return (
    <Card className={"w-1/2 place-self-center mt-8"}>
      <CardHeader>
        <CardTitle>Create Widget</CardTitle>
        <CardDescription>Create a new widget with Brightforge!</CardDescription>
      </CardHeader>
      <CardContent>
        <form id={"create-widget-form"} onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name={"name"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-widget-form-name">
                    Widget Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-widget-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Super creative name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name={"description"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-widget-form-desc">
                    Description
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-widget-form-desc"
                    aria-invalid={fieldState.invalid}
                    placeholder="Briefly describe your vision"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name={"baseColor"}
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
                      Spoken Language
                    </FieldLabel>
                    <FieldDescription>
                      For best results, select the language you speak.
                    </FieldDescription>
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
          </FieldGroup>
        </form>
        <Button type={"submit"} form={"create-widget-form"}>
          FORGE!
        </Button>
      </CardContent>
    </Card>
  );
}
