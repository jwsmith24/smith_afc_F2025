import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type AddRatingSchema, ratingSchema } from "@/types/Rating.ts";
import { createRating } from "@/api/ratings.ts";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

interface AddRatingFormProps {
  onSuccess?: () => void;
  widgetId: number;
  widgetName: string;
}

export default function AddRatingForm({
  onSuccess,
  widgetId,
  widgetName,
}: AddRatingFormProps) {
  const form = useForm<AddRatingSchema>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      score: 5,
      comment: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: AddRatingSchema) {
    try {
      const rating = await createRating(widgetId, data);
      console.log("New rating added: ", rating);
      toast.success(`Rating added to ${widgetName}`);
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to add rating.. please try again");
      console.error(error);
    }

    form.reset();
  }

  return (
    <Card className={"place-self-center w-full"}>
      <CardHeader>
        <CardTitle>Add Rating</CardTitle>
      </CardHeader>
      <CardContent className={"grid gap-8"}>
        <form id={"add-rating-form"} onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name={"score"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="add-rating-form-score">Score</FieldLabel>
                  <FieldDescription>
                    Choose a rating between 1-5
                  </FieldDescription>
                  <Input
                    {...field}
                    id="add-rating-form-score"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    type={"number"}
                    min={1}
                    max={5}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name={"comment"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rating-form-comment">Comment</FieldLabel>
                  <Textarea
                    {...field}
                    id={"rating-form-comment"}
                    aria-invalid={fieldState.invalid}
                    placeholder={"Leave your feedback here"}
                  ></Textarea>
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
          form={"add-rating-form"}
          className={"w-1/2 justify-self-end cursor-pointer"}
        >
          FORGE!
        </Button>
      </CardContent>
    </Card>
  );
}
