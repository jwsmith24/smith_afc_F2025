import {useEffect, useState} from 'react'
import './App.css'

type DogResponse = {
    message: string,
    status: string
}


function App() {

    const [dogCount, setDogCount] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [activeBreed, setActiveBreed] = useState("kelpie");

    const BASE_URL = "https://dog.ceo/api";

    const BREED_OPTIONS = [
        "kelpie",
        "beagle",
        "husky"
    ]

    async function fetchDogImage() {

        const response = await fetch(`${BASE_URL}/breeds/image/random`);
        if (!response.ok) {
            throw new Error("BAd stuff happened with the request")
        }

        const dogMessage: DogResponse = await response.json();

        setImageUrl(dogMessage.message);
        setDogCount((prev) => prev + 1);
    }

    async function fetchSpecificBreedImage(breed: string) {
        const response = await fetch(`${BASE_URL}/breed/${breed}/images/random`);
        if (!response.ok) {
            throw new Error(`Failed to get image of ${breed}`);
        }

        const message: DogResponse = await response.json();

        setImageUrl(message.message);
        setDogCount((prev) => prev + 1);
    }


    useEffect(() => {
        void fetchSpecificBreedImage(BREED_OPTIONS[0]);
    }, []);


  return (
    <div className={"container grid gap-4 justify-items-center"}>
        <div className={"flex items-center gap-4"}>
            <label>
                <select name={"breedSelection"} id="breedSelection" onChange={(event => setActiveBreed(event.target.value))}>
                    {BREED_OPTIONS.map(breed => {
                        return (<option value={breed} key={breed}>{breed.toUpperCase()}</option>)
                    })}
                </select>
            </label>
            <button onClick={() => fetchSpecificBreedImage(activeBreed)}>Get {activeBreed} Image</button>
        </div>
        <p className={"font-bold"}>or</p>
      <button onClick={fetchDogImage}>Get Random Dog</button>
        <div >
            {imageUrl ? (<img src={imageUrl} alt="dog" className={"border-orange-300 border-2 rounded object-cover w-96 h-96"}/>) : (<p>Loading image..</p>)}

        </div>
        <p>{dogCount} {dogCount === 1 ? "dog" : "dogs"} seen!</p>
    </div>
  )
}

export default App
