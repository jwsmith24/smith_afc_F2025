import { z } from "zod";

export const HiringDataSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "First name cannot be longer than 20 characters"),
  lastName: z
    .string()
    .max(20, "Last name cannot be longer than 20 characters")
    .optional()
    .or(z.literal("")), // allow default to "" if last name isn't provided
  address1: z
    .string()
    .min(1, "Address is required")
    .max(100, "Address cannot be more than 100 characters"),
  city: z
    .string()
    .min(1, "City is required")
    .max(29, "City cannot be longer than 29 characters"),
  state: z.enum(["HI", "MI", "TX"], "Select a value in the list"),
  age: z.number().min(25).max(89),
  phone: z
    .string()
    .min(2, "Phone number is required")
    .regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number provided. Must be in format ###-###-####",
    ),
  email: z.email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(12, "Password must be less than 12 characters")
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number")
    .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),

  married: z.enum(["single", "married"]),
});

// infer type directly from schema
export type HiringData = z.infer<typeof HiringDataSchema>;
