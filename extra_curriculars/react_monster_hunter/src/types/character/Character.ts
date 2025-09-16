import type { CharacterClass } from "./CharacterClass.ts";
import type { WeaponType } from "./WeaponType.ts";

export interface Character {
  id?: number;
  name: string;
  age: number;
  characterClass: CharacterClass;
  weapon: WeaponType;
}
