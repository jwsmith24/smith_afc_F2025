import { z } from "zod";

export const CHARACTER_CLASSES = ["Mage", "Fighter", "Priest"] as const;
export type CharacterClass = (typeof CHARACTER_CLASSES)[number];

export const WEAPON_TYPES = [
  "Greatsword",
  "Wand",
  "Warhammer",
  "Bow",
  "Staff",
] as const;
export type WeaponType = (typeof WEAPON_TYPES)[number];

export const CharacterSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(1, "Character name required")
    .max(20, "Name must be less than 20 characters"),
  age: z.number().int().gte(10).lte(200),
  characterClass: z.enum(CHARACTER_CLASSES),
  weapon: z.enum(WEAPON_TYPES),
});

export type Character = z.infer<typeof CharacterSchema>;
