import { HiringDataSchema, type HiringData } from "@/types/HiringDataSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";

const formSchema = HiringDataSchema;

export default function HiringForm() {
  const form = useForm<HiringData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: undefined,
      age: 25,
      phone: "",
      email: "",
      password: "",
      married: "single",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // values are type-safe and validated
    console.log(values);
  }

  return (
    <div className={"flex flex-col bg-gray-700 taco-bg h-full"}>
      <div className={"p-4 border-b bg-red-200 font-bold text-3xl"}>
        Hiring Form
      </div>
      <div className={"flex-1 p-4 text-white overflow-y-auto"}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={
              "grid gap-4 p-6 border rounded shadow w-full mx-auto max-w-xl bg-gray-700 opacity-100"
            }
            id={"hiring-form"}
          >
            <FormField
              control={form.control}
              name={"firstName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"Enter first name.."} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"lastName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"Enter last name.."} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"address1"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder={"Enter address.."} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"city"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder={"Enter city.."} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"state"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value ?? ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"Select state"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"HI"}>HI</SelectItem>
                      <SelectItem value={"MI"}>MI</SelectItem>
                      <SelectItem value={"TX"}>TX</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"age"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type={"number"}
                      {...field}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"phone"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder={"123-456-7890"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={"example@email.com"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"password"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type={"password"}
                      placeholder={"Enter password.."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name={"married"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className={"flex gap-4"}
                    >
                      <div>
                        <RadioGroupItem value={"single"} id={"single"} />
                        <label htmlFor={"single"}>Single</label>
                      </div>
                      <div>
                        <RadioGroupItem value={"married"} id={"married"} />
                        <label htmlFor={"married"}>Married</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </div>
      <div className={"p-4 border-t bg-red-200 w-full flex gap-4"}>
        <Button
          type={"submit"}
          form={"hiring-form"}
          className={"hover:cursor-pointer"}
        >
          Apply
        </Button>
        <Button
          type={"reset"}
          form={"hiring-form"}
          className={"hover:cursor-pointer"}
          onClick={() => form.reset()}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
