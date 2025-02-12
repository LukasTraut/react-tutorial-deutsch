import "./styles.css";
import { useState } from "react";

import LoadingText from "./components/LoadingText";
import SeverityMessage from "./components/SeverityMessage";
import MemoryTable from "./components/MemoryTable";
import DynamicTable from "./components/DynamicTable";

type ImageDataT = {
  id?: string;
  author?: string;
  width?: number;
  height?: number;
  url?: string;
  download_url?: string;
};

export default function App() {
  const [imageData, setImageData] = useState<ImageDataT>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchImageData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch("https://picsum.photos/id/237/info");
      const data = await response.json();
      setImageData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <div className="App">
      <h1>React Tutorial</h1>
      <h2>Time now: {new Date().toISOString()}</h2>
      <LoadingText isLoading={isLoading} />
      {isError && (
        <SeverityMessage severity={"error"}>
          Es gab einen Fehler während des API Calls
        </SeverityMessage>
      )}
      <img alt="dog" src={imageData.download_url} width={350} />
      <div>Künstler:in: {imageData.author}</div>
      <button onClick={fetchImageData}>Image Daten laden</button>

      <DynamicTable initialRows={4} initialColumns={4} />
      <MemoryTable handleImageClick={handleImageClick} />
    </div>
  );
}
