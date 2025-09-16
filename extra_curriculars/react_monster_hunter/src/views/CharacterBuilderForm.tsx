import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import {
  type Character,
  CHARACTER_CLASSES,
  type CharacterClass,
  WEAPON_TYPES,
  type WeaponType,
} from "../types/character/CharacterSchema.ts";

export default function CharacterBuilderForm() {
  const [formData, setFormData] = useState<Character>({
    name: "",
    age: 25,
    characterClass: "Mage",
    weapon: "Wand",
  });

  const [characterString, setCharacterString] = useState("");

  useEffect(() => {
    setCharacterString(
      formData.name.length != 0
        ? `Playing ${formData.name}, the ${formData.age} year-old ${formData.characterClass} with a ${formData.weapon}!`
        : "Build a character!",
    );
  }, [formData]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Creating character!", formData);
  }

  return (
    <div className={"flex flex-col justify-center items-center h-full"}>
      <p>
        {characterString.length != 0 ? characterString : "Build a character"}
      </p>
      <form
        className={
          "grid gap-4 bg-gray-700 w-1/2 text-white p-4 rounded-lg shadow-xl"
        }
        onSubmit={handleSubmit}
      >
        <div className={"flex gap-4"}>
          <label>Character Name</label>
          <input
            type="text"
            maxLength={20}
            placeholder={"Enter a cool name..."}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData((prevData) => ({
                ...prevData,
                name: event.target.value,
              }))
            }
          />
        </div>
        <div className={"flex gap-4"}>
          <label>Character Age</label>
          <input
            type="number"
            defaultValue={formData.age}
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                age: Number(event.target.value),
              }))
            }
          />
        </div>
        <div className={"flex gap-4"}>
          <label>Class</label>
          <select
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                characterClass: event.target.value as CharacterClass,
              }))
            }
          >
            {CHARACTER_CLASSES.map((cls) => (
              <option value={cls} key={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
        <div className={"flex gap-4"}>
          <label>Weapon</label>
          <select
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                weapon: event.target.value as WeaponType,
              }))
            }
          >
            {WEAPON_TYPES.map((weapon) => (
              <option value={weapon} key={weapon}>
                {weapon}
              </option>
            ))}
          </select>
        </div>
        <button
          className={
            "hover:opacity-90 hover:cursor-pointer border px-2 py-1 rounded justify-self-end"
          }
          type={"submit"}
        >
          Create
        </button>
      </form>
    </div>
  );
}
