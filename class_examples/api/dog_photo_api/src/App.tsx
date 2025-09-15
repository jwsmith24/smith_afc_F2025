import {useEffect, useState} from 'react'
import './App.css'

type DogResponse = {
    message: string,
    status: string
}


function App() {

    const [dogCount, setDogCount] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    const BASE_URL = "https://dog.ceo/api"

    async function fetchDogImage() {

        const response = await fetch(`${BASE_URL}/breeds/image/random`);
        if (!response.ok) {
            throw new Error("BAd stuff happened with the request")
        }

        const dogMessage: DogResponse = await response.json();

        setImageUrl(dogMessage.message);
        setDogCount(dogCount + 1);
    }

    useEffect(() => {
        void fetchDogImage();
    }, []);


  return (
    <div className="container">
      <button onClick={fetchDogImage}>Get Dog</button>
        <div>
            {imageUrl && (<img src={imageUrl} alt="dog" width={400} height={400}/>)}

        </div>
        <p>{dogCount} {dogCount === 1 ? "dog" : "dogs"} seen</p>
    </div>
  )
}

export default App
