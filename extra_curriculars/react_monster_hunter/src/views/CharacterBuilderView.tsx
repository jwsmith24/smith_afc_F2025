import Navbar from "../components/Navbar.tsx";
import CharacterBuilderForm from "./CharacterBuilderForm.tsx";

export default function CharacterBuilderView() {
  return (
    <div className={"h-screen"}>
      <Navbar />

      <CharacterBuilderForm />
    </div>
  );
}
