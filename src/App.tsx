import Card from "./Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Imageseach from "./Components/Imageseach";

type Tobject = {
  id: number;
  likes: number;
  downloads: number;
  webformatURL: string;
  user: string;
  views: number;
  tags: string;
};

function App() {
  const [images, setImage] = useState<Array<Tobject>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    try {
      axios
        .get(
          `https://pixabay.com/api/?key=${
            import.meta.env.VITE_PIXABAY_API_KEY
          }&q=${term}&image_type=photo&pretty=true`
        )
        .then((response) => {
          setImage(response.data.hits);
          setIsLoading(false);
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  }, [term]);

  const handleSearch = (text:string) => {
    setTerm(text);
  }

  return (
    <div className="container mx-auto ml-10 w-fit">
      <Imageseach searchText={handleSearch} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-center mx-auto mt-32 text-5xl">No Images Found!</h1>
      )}

      {isLoading ? (
        <h1 className="text-center mx-auto mt-32 text-6xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image?.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
